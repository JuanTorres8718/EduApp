import React, { Component } from "react";
import men from "./../images/man.jpg";
import heidy from "./../images/girl1.jpg";
import flower from "./../images/flower.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";

class Principal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img
          src="https://www.tourismburlington.com/wp-content/uploads/2013/04/fun-for-kids-header.jpg"
          className="w-100"
          alt="Header"
        ></img>
        <h1 className="titlefont text-center m-5">Los Deschabetados.com</h1>
        <div className="row">
          <div className="row">
            <img
              src="https://thumbs.dreamstime.com/z/male-teacher-classroom-students-cartoon-illustration-97538576.jpg"
              className="col-sm-6 col-lg-3 ml-lg-4 float-left img_principal"
              alt="imagen profesor"
            ></img>
            <p className="generalfont text-center mt-5 col-sm-6 col-lg-8">
              Crea tu aula, invita a tus alumnos, interactua con Docentes y
              padres
            </p>
            <div></div>
            <h1 className="titlefont col-md-7 offset-md-2 text-center mt-5 mb-5">
              ¿Que tenemos para ofrecerte?
            </h1>
            <div className="container-fluid">
              <div className="row mt-1 mb-2">
                <p className="generalfont text-center mt-5 col-sm-5 ml-sm-5 col-lg-7">
                  Sabemos que la educación necesita herramientas adicionales
                  para su eficiencia. Los deschabetados.com te ofrece una pagina
                  dinamica que secciona cada tarea educativa.
                </p>
                <img
                  src="https://thumbs.dreamstime.com/z/classroom-cartoon-illustration-background-school-lesson-vector-education-design-decorative-75664279.jpg"
                  className="col-sm-5 ml-sm-4 col-lg-4 float-right img_principal"
                  alt="salon de clase"
                ></img>
              </div>
              <div className="row mt-2">
                <img
                  src="https://thumbs.dreamstime.com/z/empty-classroom-cartoon-empty-classroom-interior-cartoon-vector-illustration-graphic-design-113273479.jpg"
                  className="col-sm-6 col-lg-4 ml-lg-4 float-left img_principal"
                  alt="classroom"
                ></img>
                <p className="generalfont text-center mt-5 col-sm-6 col-lg-7">
                  Encontraras una comunicacion fluida con los docentes,
                  herramientas como videollamadas, clases grabadas, material de
                  apoyo, agenda de actividades, chats y dashboards.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid" id="experiencias">
          <h1 className="titlefont text-center m-5">
            Comentarios de docentes y padres
          </h1>
          <div className="m-2">
            <p className="generalfont">
              <em>
                "Estamos en un periodo de transito a la digitalización que
                implica modificaciones no esperadas".
              </em>
            </p>
            <div className="row justify-content-end mb-4 mr-4">
              <FontAwesomeIcon
                className="icon_comments"
                icon={faComments}
              ></FontAwesomeIcon>
            </div>
          </div>
          <div className="m-2">
            <p className="generalfont">
              <em>
                "Hace falta tiempo para adaptarnos, ver nuevas didácticas
                digitales y mayor participación de lxs estudiantes donde se
                aproveche que puedes crear contenidos y productos digitales".
              </em>
            </p>
            <div className="row justify-content-end mb-5 mr-4">
              <FontAwesomeIcon
                className="icon_comments"
                icon={faComments}
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
        <div>
          <img src={flower} className="w-100" alt="flower"></img>
          <h1 className="titlefont mt-5 text-center" id="sobrenosotros">
            Sobre nosotros
          </h1>
          <div className="row mt-5 ml-5">
            <div className="col-sm-5 ml-4 col-lg-8">
              <h2>Juan Torres</h2>
              <p className="generalfont">Desarrollador de software</p>
            </div>
            <img
              src={men}
              className="rounded col-sm-5 col-lg-3 float-right"
              alt="Juan torres"
            ></img>
          </div>
          <div className="row mt-5 ml-5">
            <img
              src={heidy}
              className="rounded col-sm-5 col-lg-3 float-left"
              alt="Heidy"
            ></img>
            <div className="col-sm-5 ml-4 col-lg-8">
              <h2>Heidy</h2>
              <p className="generalfont">Desarrolladora de software y mamá</p>
            </div>
          </div>
          <div className="row mt-5 ml-5">
            <div className="col-sm-6 col-lg-8">
              <h2>Erika Otálvaro</h2>
              <p className="generalfont">Desarrolladora de software</p>
            </div>
            <img
              src="http://www.freevectors.com/wp-content/uploads/2016/01/Excited-Cartoon-Girl-Face-Expression-565x480.jpg"
              className="rounded col-sm-5 col-lg-3 float-right"
              alt="Erika"
            ></img>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}

export default Principal;
