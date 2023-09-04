import React, { useState, useEffect } from "react";
import EditModal from "../modal/EditModal";
import DeleteModal from "../modal/DeleteModal";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../utils/actions/Items";

const TaskCard = () => {
  const dispatch = useDispatch();
  const [isOpenEditModal, setisOpenEditModal] = useState(false);
  const [isOpenDeleteModal, setisOpenDeleteModal] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedItemID, setSelectedItemID] = useState("");
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);
  const items = useSelector((state) => state.items.items);

  const openEditModal = (name, id) => {
    setisOpenEditModal(true);
    setSelectedItemID(id);
    setSelectedItemName(name);
  };
  const openDeleteModal = (name, id) => {
    setisOpenDeleteModal(true);
    setSelectedItemID(id);
    setSelectedItemName(name);
  };

  return (
    <div>
      {!items ? (
        <p>LOADING...</p>
      ) : (
        <>
          {items.map((item) => (
            <div
              key={item.id}
              className="relative border-[1px] my-2 border-black rounded-md flex flex-col  "
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="flex justify-between p-4">
                <p className="text-left w-[90%]">{item.name}</p>
                {hoveredItem === item.id && (
                  <div className="ml-auto absolute top-4 right-4 ">
                    {/* Edit Icon */}
                    <span
                      title="edit"
                      className="mr-4 cursor-pointer text-xl font-black"
                      onClick={() =>
                        openEditModal(String(item.name), String(item.id))
                      }
                    >
                      🖊
                    </span>

                    {/* Delete Icon */}
                    <span
                      title="delete"
                      className="mr-2 cursor-pointer text-xl font-black text-red-600"
                      onClick={() =>
                        openDeleteModal(String(item.name), String(item.id))
                      }
                    >
                      🗑
                    </span>
                  </div>
                )}{" "}
              </div>{" "}
              <hr className="border-solid border-[1px] border-[#afafaf] w-full" />
              <div className="p-4 text-left w-[95%]">
                <p>{item.description}</p>
              </div>
              <div className=" flex justify-end mr-3 mb-4">
                <label className="circular-checkbox" title="mark as completed">
                  <input type="checkbox" className="hidden" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          ))}
        </>
      )}
      <EditModal
        isOpenEditModal={isOpenEditModal}
        setisOpenEditModal={setisOpenEditModal}
        selectedItemID={selectedItemID}
        selectedItemName={selectedItemName}
      />
      <DeleteModal
        isOpenDeleteModal={isOpenDeleteModal}
        setisOpenDeleteModal={setisOpenDeleteModal}
        selectedItemID={selectedItemID}
        selectedItemName={selectedItemName}
      />
    </div>
  );
};

export default TaskCard;
