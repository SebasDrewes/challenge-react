import Nav from "../Nav/Nav";
import Results from "./Results";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addHero } from '../../redux'
import { Redirect, useHistory } from "react-router";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { noRepeat, validAlignment } from "./ValidHero";
import "./Search.css";
const Search = () => {
  //history para boton regresar
  const history = useHistory();
  //redux hooks
  const heroTeam = useSelector((state) => state.hero.heroTeam);
  const dispatch = useDispatch();

  const [heroes, setHeroes] = useState(
    JSON.parse(sessionStorage.getItem("recentSearch"))
  );

  //mensaje error y carga
  const [validSelection, setValidSelection] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // check if team is already full
  if (heroTeam && heroTeam.length === 6) {
    return <Redirect to="/challenge-react" />;
  }
  //check if not logged in
  const token = localStorage.getItem("token");
  if (!token) {
    return <Redirect to="/login" />;
  }

  const searchHero = async (value) => {
    if (value) {
      setIsLoading(true);

      setHeroes([])
      const results = await axios.get(
        `https://www.superheroapi.com/api.php/4333347540058740/search/${value}`
      );
      // si se encuentran resultados, se muestran
      if (results.data.results) {
        let recentSearch = results.data.results;
        setHeroes(recentSearch);
        // logica para guardar ultima busqueda en sessionStorage, para redisplay en caso de ver detalles
        sessionStorage.setItem("recentSearch", JSON.stringify(recentSearch));
        setErrorMessage("");
        // si no se encuentran, se muestra error
      } else {
        setIsLoading(false);
        setErrorMessage("No encontrado");
      }
    }
  };
  // funcion para guardar heroes seleccionados en localStorage
  const validateAddedHero = (hero) => {
    if (errorMessage) {
      setErrorMessage("");
    }
    // asignacion de valor error message
    validAlignment(heroTeam, hero) ||
      setErrorMessage(
        "No podés elegir más de tres héroes de la misma alineación."
      );

    noRepeat(heroTeam, hero) ||
      setErrorMessage("No podés elegir el mismo héroe más de una vez.");

    if (noRepeat(heroTeam, hero) && validAlignment(heroTeam, hero)) {
      setValidSelection(true);
      dispatch(addHero(hero))
    } else {
      setValidSelection(false);
    }
  };
  return (
    <div>
      <Nav />
      <button
        className="btn btn-dark backToTeam"
        onClick={() => history.goBack()}
      >
        Volver a equipo
      </button>
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(value) => {
          searchHero(value.search);
        }}
      >
        <Form className="row g-3 align-items-center searchContainer">
          <div className="col-auto">
            <label htmlFor="search" className="form-label addSuperHero">
              Agregar SuperHero
            </label>
          </div>
          <div className="col-auto">
            <Field name="search" type="text" className="form-control" />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-dark">
              Buscar
            </button>
          </div>
        </Form>
      </Formik>
      <Results heroes={heroes} validateAddedHero={validateAddedHero} setIsLoading={setIsLoading} />
      {isLoading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      )}

      {errorMessage && (
        <div
          className="alert alert-danger alert-dismissible fade show alertSearch"
          onClick={() => setErrorMessage(false)}
          role="alert"
        >
          {errorMessage}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setErrorMessage("")}
          ></button>
        </div>
      )}
      {validSelection && (
        <div
          className="alert alert-success alert-dismissible fade show alertSearch"
          onClick={() => setValidSelection(false)}
          role="alert"
        >
          Agregado al equipo.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setValidSelection(false)}
          ></button>
        </div>
      )}
    </div>
  );
};
export default Search;
