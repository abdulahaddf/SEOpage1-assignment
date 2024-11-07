import { useEffect, useState } from "react";
import Warper from "../utils/Warper";
import UploadFile from "./UploadFile";

export default function Card({ user }) {
  console.log(user?._id);
  const [files, setFiles] = useState(0);
  const [update, setUpdate] = useState(false);
  console.log(update);
  console.log(files);
  const fetchFiles = async () => {
    try {
      const response = await fetch(
        `https://seo-server-production.up.railway.app/files/${user._id}`
      );
      const data = await response.json();
      setFiles(data.count);
    } catch (err) {
      console.log(err);
    }
  };

  // Fetch files on mount and after upload
  useEffect(() => {
    fetchFiles();
  }, []);

  if (update) fetchFiles();

  return (
    <div className="w-[280px] bg-white p-2 rounded-md space-y-4 text-xs">
      <section className="flex justify-between">
        <Warper>
          <img className="w-8 rounded-full" src="/user3.jpg" alt="" />
          <h1 className="font-semibold">Client Name</h1>
        </Warper>
        <Warper>
          <img className="w-8 rounded-full" src="/user1.jpg" alt="" />

          <h1 className="font-semibold">{user?.userName}</h1>
        </Warper>
      </section>

      <section className="flex justify-between ">
        <Warper>
          <img className="w-4" src="/stack.svg" alt="" />
          <p>Lorem ipsum dolor sit amet cons...</p>
        </Warper>
        <div className="flex">
          <img className="w-4" src="/clipboard.svg" alt="" />
          <p>1/2</p>
        </div>
      </section>
      <section className="flex justify-between">
        <Warper>
          <img className="w-6 rounded-full" src="/user2.jpg" alt="" />
          <img className="w-6 rounded-full" src="/user4.jpg" alt="" />
          <p className="bg-[#f2f4f7] p-[3px] h-6 rounded-full">12+</p>
        </Warper>

        <Warper>
          <img className="w-6" src="/chat.svg" alt="" />
          <p>15</p>
        </Warper>

        <UploadFile file={files} userId={user._id} setUpdate={setUpdate} />

        <Warper>
          <img className="w-4" src="/calender.svg" alt="" />
          <p>30-12-2022</p>
        </Warper>
      </section>
    </div>
  );
}
