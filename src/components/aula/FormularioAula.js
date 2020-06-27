import React, { useState } from "react";
// import CircleComponent from '../circulo/ComponenteCirculo'
import "../../style/FormularioAula.css";

const FormularioAula = () => {
  const [Aula, setAula] = useState(
		{ Nombre: "", Descripcion: "", Institucion: "",
		Grado: "" },
  );

  const handleOnUpdateFiel = (value, field) => {
    setAula({
      [field]: value,
		});
		};

	const handleOnSave = (e) => {
		e.preventDefault()
		const onCreate({Aula});
	  
  }

  return (
    <div className="container-form pt-4">
      <div className="form-grop text-center pt-5 pb-4">
        <h4>Crea tu aula</h4>
      </div>
			<form 
			// action="/AulaMatematicas"
			 className="p-4">
        <div className="form-group">
          <label htmlFor="materia">Nombre de la materia*</label>
          <input
            type="text"
            className="input-form"
            id="materia"
            onChange={(event) => {
              handleOnUpdateFiel(event.target.value, "Nombre");
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="descripcion">Descripción de la materia*</label>
          <textarea
            className="input-form"
            id="descripcion"
            rows="1"
            onChange={(event) => {
              handleOnUpdateFiel(event.target.value, "Descripcion");
            }}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="institucion">Institución Educativa*</label>
          <input
            type="text"
            className="input-form"
            id="institucion"
            onChange={(event) => {
              handleOnUpdateFiel(event.target.value, "Institucion");
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="grado">Grado*</label>
          <input
            type="text"
            className="input-form"
            id="grado"
            onChange={(event) => {
              handleOnUpdateFiel(event.target.value, "Grado");
            }}
          />
        </div>
        <div className="text-center">
					<button
					 type="submit" 
					 className="button-aula"
					 onClick={handleOnSave}>
            Crear
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioAula;
