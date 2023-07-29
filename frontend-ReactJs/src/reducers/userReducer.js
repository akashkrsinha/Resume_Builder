const initialState = {
    email: '',
    uid: ''
}

const userReducer = (state=initialState, action) =>{
    if(action.type === 'user'){
        return action.payload;
    }else{
        return state
    }
}

export default userReducer