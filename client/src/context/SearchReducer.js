const SearchReducer = (state, action) => {
    switch (action.type) {
        case "NEW_SEARCH": {
            return action.payload
        }
        case "RESET_SEARCH": {
            return null
        }
        default:
            return state
    }
}

export default SearchReducer