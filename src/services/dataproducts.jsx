/* eslint-disable no-unused-vars */
import React from "react";
import { productsApi} from "../api/productsApi";


export const mostrarProducts = async ()=>{
    const productos = await productsApi();
    return productos
}

