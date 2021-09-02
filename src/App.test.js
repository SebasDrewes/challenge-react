import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, act, waitFor} from '@testing-library/react';
import Login from './Components/Login/Login';
import userEvent from '@testing-library/user-event'
import Home from './Components/Home/Home';
 
describe('Verificacion de usuario autenticado al ingresar a una ruta', () => {

  test('doesnt renders Home if there is no token in localStorage', () => {
    const {queryByTestId} = render(<BrowserRouter>
    <Home />
    </BrowserRouter>)
   expect(queryByTestId('home')).toBeFalsy();
  });

  test('renders Home if there is a token in localStorage', () => {
    localStorage.setItem('token', 'token');
    const {getByTestId} = render(<BrowserRouter>
    <Home />
    </BrowserRouter>)
  expect(getByTestId('home')).toBeTruthy();
  });
}); 

describe('Validacion de campos en submit de formulario de login o busqueda', () => {

  test('rendering and submitting a basic Formik form', async () => {
    //se elimina token de test anterior//
    localStorage.removeItem('token');
    const handleSubmit = jest.fn()
    act(() => {
    render(
      <BrowserRouter>
        <Login/>
      </BrowserRouter>)

    userEvent.type(screen.getByLabelText(/email/i), 'john.dee@someemail.com')
    userEvent.type(screen.getByLabelText(/password/i), '123')
    userEvent.click(screen.getByRole('button', {name: /enviar/i}))
    });
    await waitFor(() =>
    expect(handleSubmit).toHaveBeenCalledWith({
      email: 'john.dee@someemail.com',
      password: '123'
    }))

  

  })
}); 