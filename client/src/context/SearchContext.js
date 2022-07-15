import { createContext, useReducer } from "react"
import SearchReducer from "./SearchReducer"

const initialState = {
    city: null,
    dates: [],
    options: {
        adult: null,
        children: null,
        room: null
    }
}

export const SearchContext = createContext(initialState)

export const SearchContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(SearchReducer, initialState)

    return (
        <SearchContext.Provider value={
            {
                city: state.city,
                dates: state.dates,
                oprtions: state.options,
                dispatch
            }
        }>
            {children}
        </SearchContext.Provider>
    )
}
