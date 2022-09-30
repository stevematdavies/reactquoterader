import {useCallback, useReducer} from "react";


const httpReducer = (state = {
    data: null,
    error: null,
    status: "pending"
}, action) => {
    switch (action.type) {
        case "SEND":
            return {
                ...state,
                status: "pending"
            }
        case "SUCCESS":
            return {
                ...state,
                data: action.resData,
                status: "completed"
            }
        case "ERROR":
            return {
                ...state,
                error: action.errorMessage,
                status: "completed"
            }
        default:
            return state

    }
}

const useHttp = (reqFn, startWithPending = false) => {

    const [httpState, dispatch] = useReducer(httpReducer, {
        status: startWithPending ? 'pending' : null,
        data: null,
        error: null
    })

    const sendRequest = useCallback(
        async (reqData) => {
            dispatch({type: "SEND"})
            try {
                const resData = await reqFn(reqData);
                dispatch({type: "SUCCESS", resData})
            } catch (e) {
                dispatch({
                    type: "ERROR",
                    errorMessage: e.message || "Something went wrong",
                });
            }
        },
        [reqFn]
    );

    return {
        sendRequest,
        ...httpState
    }
}

export default useHttp;