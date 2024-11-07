import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import Loader from "./Components/Loader";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://seo-server-production.up.railway.app/users"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }, []);

  const incomplete = users.filter((user) => user.progress === "not started");
  const toDo = users.filter((user) => user.progress === "to do");
  const doing = users.filter((user) => user.progress === "doing");
  const underReview = users.filter((user) => user.progress === "under review");
  const completed = users.filter((user) => user.progress === "completed");
  const overdue = users.filter((user) => user.progress === "overdue");

  if (users.length == 0) return <Loader />;
  return (
    <div className="flex mx-5 space-x-3  overflow-x-auto p-2 mt-10 custom-scrollbar">
      <section>
        <div className="flex justify-between items-center bg-[#f2f4f7] pt-5 pb-2 px-2">
          <div className="flex items-center">
            <div className="w-4 h-6 mr-0.5 bg-[#d21010] rounded-l-full overflow-hidden"></div>
            <h4 className="text-md">Incomplete</h4>
          </div>
          <p>0</p>
        </div>
        <div className="card-section">
          {incomplete.map((user) => (
            <Card key={user._id} user={user} />
          ))}
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center bg-[#f2f4f7] pt-5 pb-2 px-2">
          <div className="flex items-center">
            <div className="w-4 h-6 mr-0.5 bg-[#00b5ff] rounded-l-full overflow-hidden"></div>
            <h4 className="text-md">To Do</h4>
          </div>
          <p>0</p>
        </div>
        <div className="card-section">
          {toDo.map((user) => (
            <Card key={user._id} user={user} />
          ))}
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center bg-[#f2f4f7] pt-5 pb-2 px-2">
          <div className="flex items-center">
            <div className="w-4 h-6 mr-0.5 bg-[#ffe700] rounded-l-full overflow-hidden"></div>
            <h4 className="text-md">Doing</h4>
          </div>
          <p>0</p>
        </div>
        <div className="card-section">
          {doing.map((user) => (
            <Card key={user._id} user={user} />
          ))}
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center bg-[#f2f4f7] pt-5 pb-2 px-2">
          <div className="flex items-center">
            <h4 className="text-md">Under Review</h4>
          </div>
          <p>0</p>
        </div>
        <div className="card-section">
          {underReview.map((user) => (
            <Card key={user._id} user={user} />
          ))}
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center bg-[#f2f4f7] pt-5 pb-2 px-2">
          <div className="flex items-center">
            <h4 className="text-md">Completed</h4>
          </div>
          <p>0</p>
        </div>
        <div className="card-section">
          {completed.map((user) => (
            <Card key={user._id} user={user} />
          ))}
        </div>
      </section>
      <section>
        <div className="flex justify-between items-center bg-[#f2f4f7] pt-5 pb-2 px-2">
          <div className="flex items-center">
            <h4 className="text-md">Overdue</h4>
          </div>
          <p>0</p>
        </div>
        <div className="card-section">
          {overdue.map((user) => (
            <Card key={user._id} user={user} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
