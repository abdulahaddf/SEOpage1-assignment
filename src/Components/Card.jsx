import React from "react";
import Warper from "../utils/Warper";

export default function Card() {
  return (
    <div className="w-[280px] bg-white p-2 rounded-md space-y-4 text-xs">
      <section className="flex justify-between">
        <Warper>
          <img className="w-8 rounded-full" src="/user3.jpg" alt="" />
          <h1 className="font-semibold">Client Name</h1>
        </Warper>
        <Warper>
          <img className="w-8 rounded-full" src="/user1.jpg" alt="" />

          <h1 className="font-semibold">User Name</h1>
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
        <Warper>
          <img className="w-4" src="/clip.svg" alt="" />
          <p>25</p>
        </Warper>

        <Warper>
          <img className="w-4" src="/calender.svg" alt="" />
          <p>30-12-2022</p>
        </Warper>
      </section>
    </div>
  );
}
