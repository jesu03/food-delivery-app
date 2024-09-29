import { createContext } from "react";
import { food_list } from "../../assets/assets";
import {menu_list} from '../../assets/assets';
export const StoreContext = createContext();

const StoreContextProvider = ({ children }) =>{
    const contextValue = {
        food_list,
        menu_list  
    }
   return(
    <StoreContext.Provider value={contextValue}>
        {children}
    </StoreContext.Provider>
   )
}
export default StoreContextProvider;