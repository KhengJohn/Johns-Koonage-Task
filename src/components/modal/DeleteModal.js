import { useDispatch } from "react-redux";
import { deleteItem } from "../../utils/actions/Items";
import { toast } from "react-toastify";
const DeleteModal = ({
  isOpenDeleteModal,
  setisOpenDeleteModal,
  selectedItemID,
  selectedItemName,
}) => {
  const dispatch = useDispatch();
  const handleDeleteItem = (e) => {
    e.preventDefault();
    const newItem = { selectedItemID };
    dispatch(deleteItem(newItem));
    toast.success("Item Deleted");
    setisOpenDeleteModal(false);
    window.location.reload();
  };
  const closeModal = () => {
    setisOpenDeleteModal(false);
  };

  return (
    <div>
      {isOpenDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            onClick={closeModal}
            className="modal-overlay absolute inset-0 bg-gray-500 opacity-75"
          ></div>

          <div className="modal-container bg-white w-11/12 md:max-w-2xl mx-auto rounded-md shadow-lg z-50 overflow-y-auto border-2 border-black border-solid">
            <div className="modal-content text-left">
              {/* Modal Header */}
              <div className="modal-header flex justify-between  p-5">
                <h3 className="text-2xl font-semibold">Delete</h3>
                <button onClick={closeModal} className="modal-close">
                  ❌
                </button>
              </div>
              <hr />

              {/* Modal Body */}
              <div className="modal-body  p-5">
                <form className="flex flex-col gap-5 justify-center align-middle text-center">
                  <p>Are you sure you want to delete</p>
                  <h3 className="text-2xl font-semibold">
                    "{selectedItemName}"
                  </h3>

                  {/* Modal Footer */}
                  <div className="modal-footer flex gap-3 m-auto">
                    <button
                      onClick={handleDeleteItem}
                      className="border-2 border-black bg-[#EB7B26] py-3 px-8 rounded-lg flex justify-between cursor-pointer hover:bg-[#ed8433]"
                    >
                      Delete
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

export default DeleteModal;
