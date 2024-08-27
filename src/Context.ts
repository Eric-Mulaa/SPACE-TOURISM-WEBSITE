import { createContext } from "react";

import handleHomeClick from './Root'

interface handleHomeClick{
    handleHomeClick:()=>void;
}

export const HomeContext = createContext< handleHomeClick | null>(null)

/*export function useHomeContex(){
    const context = useContext(HomeContext)
    if(!context){
        throw new Error('Home must be used within a HomeContext.Provider')
    }
    return context;
} */
