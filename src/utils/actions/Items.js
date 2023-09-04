import axios from "axios";
const baseURL = "http://localhost:3001"
const endPoint = "/items"
export const fetchItems = () => async (dispatch) => {
  const response = await axios.get(`${baseURL}${endPoint}`); // Replace with your API endpoint
  dispatch({ type: "FETCH_ITEMS", payload: response.data });
};

export const addItem =
  ({ name, description }) =>
  async (dispatch) => {
    const response = await axios.post(`${baseURL}${endPoint}`, {
      name: name,
      description: description,
    });
    dispatch({ type: "ADD_ITEM", payload: response.data });
  };

export const updateItem =
  ({ name, description, selectedItemID }) =>
  async (dispatch) => {
    const response = await axios.put(
      `${baseURL}${endPoint}/${selectedItemID}`,
      {
        name: name,
        description: description,
      }
    );
    dispatch({ type: "UPDATE_ITEM", payload: response.data });
  };

export const deleteItem =
  ({ selectedItemID }) =>
  async (dispatch) => {await axios.delete(`${baseURL}${endPoint}/${selectedItemID}`);
    dispatch({ type: "DELETE_ITEM", payload: selectedItemID });
  };
