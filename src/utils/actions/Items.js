import axios from "axios";
const baseURL = "https://taskendpoint.netlify.app"
const baseURLII = "http://localhost:3001"
const endPoint = "/items"
export const fetchItems = () => async (dispatch) => {
  const response = await axios.get(`${baseURLII}${endPoint}`); // Replace with your API endpoint
  dispatch({ type: "FETCH_ITEMS", payload: response.data });
};

export const addItem =
  ({ name, description }) =>
  async (dispatch) => {
    const response = await axios.post(`http://localhost:3001/items`, {
      name: name,
      description: description,
    }); // Replace with your API endpoint
    dispatch({ type: "ADD_ITEM", payload: response.data });
  };

export const updateItem =
  ({ name, description, selectedItemID }) =>
  async (dispatch) => {
    const response = await axios.put(
      `http://localhost:3001/items/${selectedItemID}`,
      {
        name: name,
        description: description,
      }
    ); // Replace with your API endpoint
    dispatch({ type: "UPDATE_ITEM", payload: response.data });
  };

export const deleteItem =
  ({ selectedItemID }) =>
  async (dispatch) => {
    await axios.delete(`http://localhost:3001/items/${selectedItemID}`); // Replace with your API endpoint
    dispatch({ type: "DELETE_ITEM", payload: selectedItemID });
  };
