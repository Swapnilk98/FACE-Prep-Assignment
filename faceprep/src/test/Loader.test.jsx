import { render, screen } from "@testing-library/react";
import Loader from "../components/Loader";
test("loader", () => {
  render(<Loader />);
  const linkElement = screen.getByText(/loader/i);
  expect(linkElement).toBeInTheDocument();
});
test("spinner", () => {
  render(<Loader />);
  const linkElement = screen.getByText(/spinner/i);
  expect(linkElement).toBeInTheDocument();
});
test("rotating", () => {
  render(<Loader />);
  const linkElement = screen.getByText(/rotating/i);
  expect(linkElement).toBeInTheDocument();
});
