let initialState = {
    doc: {
        color:1,
        fontsize:1,
        fontfamily:1
    }
}

const finalReducer = (state = initialState, action) =>{
    // console.log(action.payload, "text action");

    if(action.type === 'FINAL_COLOR_CHANGE')
    {
        return {
            ...state,
            doc: action.payload
        }
    }
    else{
        return state
    }
}

export default finalReducer;