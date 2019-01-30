const initialState ={
    loading:null
};

const loginReducer = (state = initialState,action)=>{
    switch (action.type) {
        case "NextScreen":
            return{
                loading:true
            }    
        default:
            return{...state};
    }
}

export default loginReducer;