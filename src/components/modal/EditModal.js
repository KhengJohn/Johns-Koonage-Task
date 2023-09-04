import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateItem } from "../../utils/actions/Items";
import { toast } from "react-toastify";
const EditModal = ({
  isOpenEditModal,
  setisOpenEditModal,
  selectedItemID,
  selectedItemName,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleUpdateItem = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error('Please enter a title.');
      return;
    }
    const newItem = { name, description, selectedItemID };
    dispatch(updateItem(newItem));
    setName("");
    setDescription("");
    setisOpenEditModal(false);
    toast.success('Item Updated');
  };
  const closeModal = () => {
    setisOpenEditModal(false);
  };

  return (
    <div>
      {isOpenEditModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            onClick={closeModal}
            className="modal-overlay absolute inset-0 bg-gray-500 opacity-75"
          ></div>

          <div className="modal-container bg-white w-11/12 md:max-w-2xl mx-auto rounded-md shadow-lg z-50 overflow-y-auto border-2 border-black border-solid">
            <div className="modal-content text-left">
              {/* Modal Header */}
              <div className="modal-header flex justify-between  p-5">
                <h3 className="text-2xl font-semibold">
                  Edit "{selectedItemName}"
                </h3>
                <button onClick={closeModal} className="modal-close">
                  ❌
                </button>
              </div>
              <hr />

              {/* Modal Body */}
              <div className="modal-body  p-5">
                <form className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <label>Title</label>
                    <input
                      className="border-black border-solid border-2 rounded-md py-2 px-3"
                      placeholder="Add new task title"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label>Description</label>
                    <textarea
                      className="border-black border-solid border-2 rounded-md py-2 px-3"
                      placeholder="Add new task description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      type="text"
                    />
                  </div>{" "}
                  {/* Modal Footer */}
                  <div className="modal-footer flex gap-3">
                    <button
                      onClick={handleUpdateItem}
                      className="border-2 border-black bg-[#EB7B26] py-3 px-8 rounded-lg flex justify-between cursor-pointer hover:bg-[#ed8433]"
                    >
                      Edit
                    </button>
                    <button
                      onClick={closeModal}
                      className="bg-red-500 text-white hover:bg-red-600 font-bold py-3 px-8 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditModal;
