import React,{ useEffect, useState} from 'react';
import Api from '../services/Api';
export const ContextProvider=React.createContext()
const DataContextProvider = ({children}) => {
    const [fetch,setFetch]=useState([])
    useEffect(()=>{
        const apiFunction=async()=>{
            setFetch(await Api())
        }
        apiFunction()
    },[])
    

    return (
        <ContextProvider.Provider value={fetch}>
            {children}
        </ContextProvider.Provider>
    );
};

export default DataContextProvider;