/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import "../assets/css/modal.css"



const ModalProducto = NiceModal.create(
    ({hola}) => {
      
      const modal = useModal();
      return (
        <div className="background">
          <div className="modal">
            
                <p>{hola}</p>  
             <button onClick={modal.remove()}>cerrar</button>
          </div>
        </div>
      );
    }
  );

export default ModalProducto
