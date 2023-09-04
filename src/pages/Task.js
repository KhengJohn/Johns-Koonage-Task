import React, { useState } from "react";
import Modal from "../components/modal/Modal";
import SummaryCard from "../components/card/SummaryCard";
import TaskCard from "../components/card/TaskCard";
import { addIcon } from "../components/data/assets";

const Task = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className="p-4">
      <div className="flex justify-center align-middle h-16 border-b-gray-950 border-2">
        <p className=" font-bold text-2xl m-auto">Task</p>
      </div>
      <div>
        <SummaryCard />
      </div>
      <div className="w-[95%] m-auto">
        <div className="flex justify-between my-2">
          <h2 className="text-left text-2xl my-3">Task Manager</h2>
          <span
            onClick={openModal}
            className="border-2 border-black bg-[#EB7B26] py-3 px-8 rounded-lg flex justify-between w-44 cursor-pointer hover:bg-[#ed8433]"
          >
            <img src={addIcon} /> Add Task
          </span>
        </div>
        <div className="border-black border-2 h-auto p-5 rounded-md bg-white ">
          <div className="">
            <TaskCard />
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default Task;
