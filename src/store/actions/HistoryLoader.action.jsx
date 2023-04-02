import { API_URL } from '../../constants/Database';

export const GET_ORDERS = 'GET_HISTORY';

export const getOrders = () => {
    return async dispatch => {
        try {
            const response = await fetch(`${API_URL}/orders.json`,{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(response)
            const resData = await response.json();
            const orders = Object.keys(resData).map(key => {
                return {
                    id: key,
                    ...resData[key]
                }
            });
            dispatch({
                type: GET_HISTORY,
                orders
            });
        } catch (error) {
            console.log(error);
        }
    }
}
