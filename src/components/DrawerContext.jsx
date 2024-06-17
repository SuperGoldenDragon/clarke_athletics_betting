import React, { createContext, useState, useContext } from 'react';

const DrawerContext = createContext();

export const DrawerProvider = ({ children }) => {
    const [drawerParams, setDrawerParams] = useState({});

    const updateDrawerParams = (newParams) => {
        setDrawerParams((prevParams) => ({
            ...prevParams,
            ...newParams,
        }));
    };

    return (
        <DrawerContext.Provider value={{ drawerParams, setDrawerParams: updateDrawerParams }}>
            {children}
        </DrawerContext.Provider>
    );
};

export const useDrawer = () => useContext(DrawerContext);