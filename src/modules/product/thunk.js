import axios from 'axios';
import {
  SEARCH_REQUEST,
  SEARCH_ERROR,
  SEARCH_SUCCESS,
  GET_LIST_REQUEST,
  GET_LIST_SUCCESS,
  GET_LIST_ERROR,
  ADD_WISH_REQUEST,
  ADD_WISH_SUCCESS,
  ADD_WISH_ERROR,
  REMOVE_WISH_REQUEST,
  REMOVE_WISH_SUCCESS,
  REMOVE_WISH_ERROR,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_ERROR,
  GET_HF_REQUEST,
  GET_HF_SUCCESS,
  GET_HF_ERROR,
  LOAD_MORE_HF_REQUEST,
  LOAD_MORE_HF_SUCCESS,
  LOAD_MORE_HF_ERROR,
} from '.';

export const search = (keyword) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_REQUEST });
    const response = await axios.get(`/api/product/search?keyword=${keyword}`);
    dispatch({ type: SEARCH_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: SEARCH_ERROR, payload: e.response.data });
  }
};

export const getList = (cateId) => async (dispatch) => {
  try {
    dispatch({ type: GET_LIST_REQUEST });
    const response = await axios.get(`/api/product/list/${cateId}`);
    dispatch({ type: GET_LIST_SUCCESS, payload: response.data });
  } catch (e) {
    console.error(e);
    dispatch({ type: GET_LIST_ERROR, payload: e.response.data });
  }
};

export const addWish = (data) => async (dispatch) => {
  try {
    dispatch({ type: ADD_WISH_REQUEST });
    const response = await axios.post('/api/userproduct/wish', data);
    dispatch({ type: ADD_WISH_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: ADD_WISH_ERROR, payload: e.response.data });
  }
};

export const removeWish = (data) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_WISH_REQUEST });
    const response = await axios.delete(
      `/api/userproduct/wish?email=${data.userEmail}&productid=${data.productId}`
    );
    dispatch({ type: REMOVE_WISH_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: REMOVE_WISH_ERROR, payload: e.response.data });
  }
};

export const getProduct = (productId) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_REQUEST });
    const response = await axios.get(
      `http://localhost:8000/api/product/${productId}`
    );
    dispatch({ type: GET_PRODUCT_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: GET_PRODUCT_ERROR, payload: e.response.data });
  }
};

export const getHf = (cateId) => async (dispatch) => {
  try {
    dispatch({ type: GET_HF_REQUEST });
    const response = await axios.get(
      `http://localhost:8000/api/product/homefurnishing/${cateId}`
    );
    dispatch({ type: GET_HF_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: GET_HF_ERROR, payload: e.response.data });
  }
};
export const loadMoreHf = (data) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_MORE_HF_REQUEST });
    const response = await axios.get(
      `http://localhost:8000/api/product/homefurnishing/${data.cateId}?offset=${data.offset}`
    );
    dispatch({ type: LOAD_MORE_HF_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: LOAD_MORE_HF_ERROR, payload: e.response.data });
  }
};
