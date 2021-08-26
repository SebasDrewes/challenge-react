import { Redirect} from 'react-router-dom'
import { Formik, Field, Form } from "formik";
import axios from 'axios';

const Search = ({authorized}) => {

if(!authorized){
    return <Redirect to="/login" />
  }
const searchHero = async (value) => {

}
    return (
        <div id="form">
          <Formik
            initialValues={{ search: ""}}
            onSubmit={(value) => {searchHero(value)}}
          >
              <Form>
            <div className="mb-3">
             <label htmlFor="search" className="form-label">Buscar SuperHero</label>
              <Field name="search" type="text" className="form-control"/>
              </div>
              <button type="submit" className="btn btn-dark">Ingresar</button>
            </Form>
          </Formik>
        </div>
  );
}
export default Search


// search https://www.superheroapi.com/api.php/4333347540058740/search/bat