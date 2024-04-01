import { configureStore } from "@reduxjs/toolkit";
import cartRedducer from "./cartSlice";


const appStore = configureStore({

       reducer : {
           cart:cartRedducer,
            
       },
    });



export default appStore;