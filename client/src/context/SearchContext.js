import { createContext, useReducer, useEffect } from "react"
import SearchReducer from "./SearchReducer"

const initialState = {
    city: JSON.parse(localStorage.getItem("city")) || null,
    dates: JSON.parse(localStorage.getItem("dates")) || [],
    options: JSON.parse(localStorage.getItem("options")) || {
        adult: null,
        children: null,
        room: null
    }
}

export const SearchContext = createContext(initialState)

export const SearchContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(SearchReducer, initialState)

    useEffect(() => {
        localStorage.setItem("city", JSON.stringify(state.destination));
        localStorage.setItem("dates", JSON.stringify(state.dates));
        localStorage.setItem("options", JSON.stringify(state.options));
    }, [state]);

    return (
        <SearchContext.Provider value={
            {
                city: state.city,
                dates: state.dates,
                options: state.options,
                dispatch
            }
        }>
            {children}
        </SearchContext.Provider>
    )
}
