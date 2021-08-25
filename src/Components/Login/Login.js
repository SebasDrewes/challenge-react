import ValidateLogin from './ValidateLogin'
import { Redirect} from 'react-router-dom'
import { Formik, Field, Form } from "formik";

const Login = ({authorized}) => {
    // si ya esta logeado, carga home
    if(authorized){
      return <Redirect to="/" />
    }

    //validate form functions
    const validateEmail = (value) => {
        let error;
        if (!value) {
          error = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Invalid email address';
        }
        return error;
      }
    const validatePassword = (value) => {
        let error;
        if(!value) {
            error = 'Required';
        }
        return error
    }

    return (
        <div className="App">
        <h1>Sign in</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {ValidateLogin(values)}}
        >
          {({ errors, touched }) => (<Form>
          <div className="mb-3">
           <label htmlFor="email" className="form-label">Email address</label>
            <Field name="email" type="email" className="form-control" validate={validateEmail}/>
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <Field name="password" type="password" className="form-control" validate={validatePassword}/>
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </Form>
          )}
        </Formik>
      </div>
)
}
export default Login