const initialState ={
    counter: 0,
    //timer:"00.00.00",
};

export const counterReduxer =(state=initialState, action)=>{
    switch (action.type){
        case "INCREASE":
            return{
                ...state, //{counter :0, timer:"00.00.00"}
                counter: action.payload,//override
                //counter:state.counter+1
            };
        case "DECREASE":
            return{
                ...state, //{counter :0, timer:"00.00.00"}
                counter: action.payload,//override
                //counter:state.counter - 1
            };
        
        default:
            return state    
    }
}