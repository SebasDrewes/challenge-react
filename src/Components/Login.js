import ValidateLogin from './ValidateLogin'
import { Formik, Field, Form } from "formik";

const Login = () => {
    return (
        <div className="App">
        <h1>Sign in</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {ValidateLogin(values)}}
        >
          <Form>
          <div className="mb-3">
           <label htmlFor="email" className="form-label">Email address</label>
            <Field name="email" type="email" className="form-control"/>
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <Field name="password" type="password" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </Form>
        </Formik>
      </div>
)
}
export default Login