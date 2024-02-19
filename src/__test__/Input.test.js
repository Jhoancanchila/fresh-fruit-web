/* eslint-disable no-undef */
import "@testing-library/jest-dom"
import { screen, render, fireEvent } from "@testing-library/react";
import Login from "../pages/Login/Login";

describe("Componente Login",()=>{
  test('Render title login', () => {
    render(<Login/>);
    const elment = screen.getByRole("heading",{name:"Welcome to fresh fruit"});
    expect(elment).toBeInTheDocument()
  })
  test("Action button login",() => {
    render(<Login/>);
    const elmentButtton = screen.getByRole("button",{name:"Sign in"});
    fireEvent.click(elmentButtton);
  });
})