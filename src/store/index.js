import React, { createContext, useReducer } from 'react'

const initialState = {
    popular: []
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_POPULAR':
            return {popular: action.payload.popular}
        default:
            return state
    }
}

export const Store = createContext({
    gloabalState: initialState,
    setGlobalState: () => null
})

const StoreProvider = ({ children }) => {
    const [gloabalState, setGlobalState] = useReducer(reducer, initialState)

    return (
        <Store.Provider value={{ gloabalState, setGlobalState }}>{children}</Store.Provider>
    )
}

export default StoreProvider
