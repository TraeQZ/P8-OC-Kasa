
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

describe("Header component", () => {
  test("affiche le logo", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const logo = screen.getByAltText("Kasa Logo");
    expect(logo).toBeInTheDocument();
  });

  test("affiche les liens Accueil et A Propos", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByText("Accueil")).toBeInTheDocument();
    expect(screen.getByText("A Propos")).toBeInTheDocument();
  });

  test("les liens pointent aux bonnes routes", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByText("Accueil").getAttribute("href")).toBe("/");
    expect(screen.getByText("A Propos").getAttribute("href")).toBe("/about");
  });
});
