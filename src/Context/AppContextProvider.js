import React, { createContext, useState } from 'react';

const AppContext = createContext();

function AppContextProvider({ children }) {
    const [isbn, setIsbn] = useState("");
    const defaultContext = {
        isbn,
        setIsbn
    };

    /*
    function setValue(value) {
        setIsbn(value);
    }*/

    return (
        <AppContext.Provider value={defaultContext}>
            {children}
        </AppContext.Provider>
    );
}

export { AppContext, AppContextProvider };
