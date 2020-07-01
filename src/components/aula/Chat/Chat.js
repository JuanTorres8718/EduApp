import React from "react";
import Nav from "../componentAula/NavAula";
import Mensajes from "./Mensajes";
import MensajeOtro from "./MensajeOtro";
import "../../../style/Chat.css";

const Chat = () => {
  return (
    <div className="">
      <Nav className="col-lg-4"></Nav>
      <div id="chat">
        <Mensajes mensaje="me ayudan con el ejercicio 5"></Mensajes>
        <Mensajes mensaje="¿hoy hay clase?" />
        <MensajeOtro mensaje="si, hay clase a las 5" />
        <div className="fixed-bottom p-3 border-top d-flex justify-content-between bg-dark">
          <input
            type="text"
            placeholder="escribe aqui tu mensaje"
            className="rounded col-lg-8"
          ></input>
          <button type="submit" className="boton">
            enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
