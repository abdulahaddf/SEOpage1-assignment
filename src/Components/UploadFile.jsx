import React, { useState } from "react";
import Swal from "sweetalert2";

function UploadFile({ userId, file, setUpdate }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Open and close modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Handle file selection
  const handleFileChange = (event) => {
    setSelectedFiles([...event.target.files]);
  };

  const handleUpload = async () => {
    setLoading(true);
    if (selectedFiles.length === 0) {
      alert("No files to upload!");
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("files", file);
    });

    try {
      const response = await fetch(
        `https://seo-server-production.up.railway.app/upload/${userId}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSelectedFiles([]);
        setUpdate(true);
        setLoading(false);
        // onUploadComplete();
        setMessage(`${selectedFiles.length} files uploaded successfully!`);
        closeModal();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your files has been uploaded successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        setMessage("Upload failed: " + data.message);
        setLoading(false);
      }
    } catch (error) {
      setMessage("Error: " + error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <div onClick={openModal} className="flex gap-1 pt-1 items-center">
        <img className="w-4" src="/clip.svg" alt="" />
        <p>{file ? file : 0}</p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-[90%] max-w-md p-6 rounded-lg shadow-lg relative">
            <h2 className="text-2xl font-semibold">Upload Files</h2>

            {/* File Input */}
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="mt-4"
            />

            {/* File List */}
            <ul className="mt-4">
              {selectedFiles.length > 0 ? (
                selectedFiles.map((file, index) => (
                  <li key={index} className="text-gray-700">
                    {file.name}
                  </li>
                ))
              ) : (
                <li className="text-gray-500">No files selected</li>
              )}
            </ul>

            {message && <p className="mt-4 text-green-600">{message}</p>}

            {/* Upload Button */}
            <button
              onClick={handleUpload}
              className="mt-4 bg-[#13b4be] text-white px-4 py-2 rounded"
              disabled={selectedFiles.length === 0}
            >
              {loading ? (
                <div className="flex gap-2">
                  Uploading
                  <div className="w-4 h-4 rounded-full animate-spin border-2 border-dashed border-white border-t-transparent"></div>
                </div>
              ) : (
                "Upload"
              )}
            </button>

            {/* Close Modal Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadFile;
