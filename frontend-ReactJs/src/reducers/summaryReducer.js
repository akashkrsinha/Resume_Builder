let initialState = {
    summary : '',
}

const summaryReducer = (state = initialState, action) =>{
    // console.log(action.payload, "text action");

    if(action.type === 'form5')
    {
        return {
            ...state,
            summary: action.payload.summary,
        }
    }
    else{
        return state
    }
}

export default summaryReducer;