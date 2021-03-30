import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false,
};

// ORDER BURGER

const purchaseInit = ( state, action ) => {
    return updateObject( state, { purchased: false } );
};

const purchaseBurgerStart = ( state, action ) => {
    return updateObject( state, { loading: true ,} );
};

const purchaseBurgerSuccess =( state, action ) => {
    return updateObject( state, {
        orders: action.orderData,
       
    } );
};
const purchaseBurger =( state, action ) => {
    return updateObject( state, {
        bb: action.orderData,
       
    } );
};




const purchaseBurgerFail = ( state, action ) => {
    return updateObject( state, { loading: false } );
};

// FETCH ORDER

const fetchOrdersStart = ( state, action ) => {
    return updateObject( state, { loading: true , } );
};


const fetchOrdersSuccess = ( state, action ) => {
    return updateObject( state, {
        orders: action.orders,
        loading: false,
    } );
};

const fetchOrdersFail = ( state, action ) => {
    return updateObject( state, { 
        error: action.error,
        loading: false,  
       
    } );
};




const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.PURCHASE_INIT: return purchaseInit( state, action );
        case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart( state, action );
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess( state, action )
        case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail( state, action );
        case actionTypes.FETCH_ORDERS_START: return fetchOrdersStart( state, action );
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess( state, action );
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrdersFail( state, action );        
        case actionTypes.PURCHASE_BURGER: return purchaseBurger( state, action );        
        
        default: return state;
    }
};

export default reducer;