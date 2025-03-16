import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); // null means no user is logged in

    // Function to log in user
    const login = (userData) => {
        console.log(10, ' login ',  userData);
        setUser(userData);
    };

    // Function to log out user
    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};
