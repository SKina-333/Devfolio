import React, { createContext, useContext, useState,} from "react";

const CursorHoverContext = createContext();

export const CursorHoverProvider = ({ children }) => {
    const [isHovering, setIsHovering] = useState(false);
    const [imageText, setImageText] = useState("");

    
    return (
        <CursorHoverContext.Provider value={{ isHovering, setIsHovering, imageText, setImageText }}>
        {children}
        </CursorHoverContext.Provider>
    );
}

export const useCursorHoverContext = () => {
    return useContext(CursorHoverContext);
}
