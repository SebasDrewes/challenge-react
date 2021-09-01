import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render} from '@testing-library/react';
 
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
