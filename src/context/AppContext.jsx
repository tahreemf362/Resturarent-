import React, { createContext, useContext, useReducer } from 'react'
import { DISHES } from '../data/dishes'


const AppStateContext = createContext()
const AppDispatchContext = createContext()


const initialState = {
dishes: DISHES,
filtered: DISHES,
cart: []
}


function reducer(state, action){
switch(action.type){
case 'FILTER':{
const { category, q, sort } = action.payload
let list = [...state.dishes]
if(category && category !== 'All') list = list.filter(d => d.category === category)
if(q) list = list.filter(d => d.title.toLowerCase().includes(q.toLowerCase()))
if(sort === 'price-asc') list.sort((a,b)=>a.price-b.price)
if(sort === 'price-desc') list.sort((a,b)=>b.price-a.price)
return {...state, filtered: list}
}
case 'ADD_TO_CART':{
const item = action.payload
return {...state, cart: [...state.cart, item]}
}
case 'CLEAR_CART':
return {...state, cart: []}
default:
return state
}
}


export function AppProvider({children}){
const [state, dispatch] = useReducer(reducer, initialState)
return (
<AppDispatchContext.Provider value={dispatch}>
<AppStateContext.Provider value={state}>
{children}
</AppStateContext.Provider>
</AppDispatchContext.Provider>
)
}


export const useAppState = () => useContext(AppStateContext)
export const useAppDispatch = () => useContext(AppDispatchContext)