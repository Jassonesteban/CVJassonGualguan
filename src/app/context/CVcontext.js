"use client";

import { createContext, useContext, useEffect } from "react";
import { useState } from "react";

const CVcontext = createContext();

export const CvProvider = ({children}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect( () => {
        fetch("https://almacenamientojson.blob.core.windows.net/json-files/infoSpanish.json")
        .then((response) => {
            if(!response.ok){
                throw new Error("Error al obtener el JSON");
            }
            return response.json();
        })
        .then((data) => {
            setData(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        });
    }, []);

    return (
        <CVcontext.Provider value={{data, loading, error}}>
            {children}
        </CVcontext.Provider>
    );
};

export const useCvData = () => useContext(CVcontext);