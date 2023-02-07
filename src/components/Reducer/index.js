

export const initialState = {
    basket:[],
}

export const getBasketTotal = (basket) =>{
    return (basket?.reduce((amount,item) => item.price+amount,0));
}

const reducer = (state,action ) =>{
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket:[...state.basket,action.item],
            }
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(item => {return (item.id === action.id)})
            let newBasket=[...state.basket];

            newBasket.splice(index,1);
            return{ 
                ...state,
                basket:newBasket
            }
        default :return state;
      }
}

export default reducer;