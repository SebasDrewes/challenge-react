import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import {
  render,
  screen,
  waitForElementToBeRemoved,
  fireEvent,
} from "@testing-library/react";
import { enableFetchMocks } from "jest-fetch-mock";
import PrivateRoute from "./Components/PrivateRoute";
import Login from "./Components/Login/Login";
import userEvent from "@testing-library/user-event";
import Home from "./Components/Home/Home";
import Search from "./Components/Search/Search";

enableFetchMocks();

describe("Verificacion de usuario autenticado al ingresar a una ruta", () => {
  test("No carga home si no hay un token localStorage", () => {
    const { queryByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <PrivateRoute component={Home} />
        </Provider>
      </BrowserRouter>
    );
    expect(queryByTestId("home")).toBeFalsy();
  });

  test("Carga Home si hay un token en localStorage", () => {
    localStorage.setItem("token", "token");
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={store}>
          <PrivateRoute component={Home} />
        </Provider>
      </BrowserRouter>
    );
    expect(getByTestId("home")).toBeTruthy();
  });
});

describe("Validacion de campos en submit de formulario de login o busqueda", () => {
  test("Muestra error si se deja campo vacio Email o si se ingresa Email invalido", async () => {
    //se elimina token de test anterior//
    localStorage.removeItem("token");
    render(<Login />);
    // requerido
    const emailInput = screen.getByLabelText(/email/i);

    fireEvent.blur(emailInput);
    await screen.findByText("Requerido");

    // email invalido
    userEvent.type(emailInput, "test");
    fireEvent.blur(emailInput);
    await screen.findByText("Email invalido");

    userEvent.clear(emailInput);

    userEvent.type(emailInput, "challenge@alkemy.org");

    await waitForElementToBeRemoved(() => screen.getByText("Email invalido"));
  });
  test("Muestra error si se deja campo vacio Password", async () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/password/i);

    fireEvent.blur(emailInput);
    await screen.findByText("Requerido");
  });

  describe("Manejo de excepciones al obtener errores de la API", () => {
    test("Muestra error si el email o contraseña enviado a la API es invalido", async () => {
      fetch.mockRejectOnce({ invalid: true });
      render(<Login />);
      const emailInput = screen.getByLabelText("Email");
      const passwordInput = screen.getByLabelText("Password");
      userEvent.type(emailInput, "fakeEmail@gmail.com");
      userEvent.type(passwordInput, "fakePassword");

      const submitButton = screen.getByRole("button", { name: "Enviar" });

      userEvent.click(submitButton);

      await screen.findByText("Email o contraseña incorrectos.");
    });

    test("Muestra error si no encuentra resultados en Search de SuperHeroes", async () => {
      fetch.mockRejectOnce({ invalid: true });
      //se guarda token para poder acceder
      localStorage.setItem("token", "token");
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Search />
          </Provider>
        </BrowserRouter>
      );

      const searchInput = screen.getByRole("textbox");
      userEvent.type(searchInput, "fakeSuperHero");

      const submitButton = screen.getByRole("button", { name: "Buscar" });

      userEvent.click(submitButton);

      await screen.findByText("No encontrado");
    });
  });
});
