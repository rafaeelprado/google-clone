import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1'

export const ResultContextProvider = ({ children }) => {
    const[results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Rafael Prado');

    // /videos, /search, /images
    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
           method: 'GET',
           headers: {
            'X-User-Agent': 'desktop',
            'X-Proxy-Location': 'BR',
            'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
            'X-RapidAPI-Key': 'f2a5441f0amsh4f6f8f30615577fp1ec55djsnb71efe097feb'
           } 
        });

        const data = await response.json();

        setResults(data);
        setIsLoading(false);
}

    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    );

}
export const useResultContext = () => useContext(ResultContext);