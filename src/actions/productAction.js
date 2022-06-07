import axios from 'axios';
import { PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL } from '../constants/productConstant';



// export const getProduct = (keyword = "", currentPage = 1, price = [0, 2500], category, ratings = 0) => async (dispatch) => {
export const getProduct = () => async (dispatch) => {
    try {
        dispatch({ type: PRODUCT_DETAILS_REQUEST });

        let url = `https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product`

        const { data } = await axios.get(url);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.message,
        });
    }
};
