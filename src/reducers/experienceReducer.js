let initialState = {
    jobTitle : '',
    company : '',
    city : '',
    country: '',
    startMonth:'',
    startYear:'',
    endMonth: '',
    endYear: ''
}

const experienceReducer = (state = initialState, action) =>{
    // console.log(action.payload, "text action");

    if(action.type === 'form2')
    {
        return {
            ...state,
            jobTitle: action.payload.jobTitle,
            company: action.payload.company,
            city: action.payload.city,
            country: action.payload.country,
            startMonth: action.payload.startMonth,
            startYear: action.payload.startYear,
            endMonth: action.payload.endMonth,
            endYear: action.payload.endYear
        }
    }
    else{
        return state
    }
}

export default experienceReducer;