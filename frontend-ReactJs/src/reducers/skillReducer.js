let initialState = {
    skill1 : '',
    skill2 : '',
    skill3 : '',
    skill4: '',
    skill5:'',
    skill6:''
}

const skillReducer = (state = initialState, action) =>{
    // console.log(action.payload, "text action");

    if(action.type === 'form4')
    {
        return {
            ...state,
            skill1: action.payload.skill1,
            skill2: action.payload.skill2,
            skill3: action.payload.skill3,
            skill4: action.payload.skill4,
            skill5: action.payload.skill5,
            skill6: action.payload.skill6
        }
    }
    else{
        return state
    }
}

export default skillReducer;