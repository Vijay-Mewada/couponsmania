import { useReducer } from "react";

const initialState = []

const reducer = (state, action) => {
    switch (action.type) {

        case 'GET_COUPONS_LIST':
            return {
                couponsList: state
            };
        case 'ADD_COUPONS':
            return {
                couponsList: action.payload
            }
        case 'SET_SIDEBAR_STATUS':
            return {
                isSidebarOpen: action.payload
            }

        default:
            return state
    }
}

const useGlobalState = () => {
    const [globalState, globalDispatch] = useReducer(reducer,
        {
            couponsList: [],
            isSidebarOpen : false
        })
    return { globalState, globalDispatch }
};

export default useGlobalState;
