// src/__tests__/About.test.js
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About"; // Ensure the path is correct

test("renders a <aside> element", () => {
  const { container } = render(<About about="About this blog" image="path/to/image.jpg" />);
  expect(container.querySelector("aside")).toBeInTheDocument(); // This should now pass
});

test("renders a <img> with the blog logo and alt text of 'about'", () => {
  const logo = "path/to/logo.jpg"; // Define the logo path
  render(<About about="About this blog" image={logo} />);
  const img = screen.getByAltText("about"); // Ensure the alt text matches
  expect(img).toBeInTheDocument();
  expect(img.src).toContain(logo); // Ensure the src contains the logo path
});

test("uses a default value for the image if no image is passed as a prop", () => {
  render(<About about="About this blog" />);
  const img = screen.getByAltText("about"); // Ensure the alt text matches
  expect(img).toBeInTheDocument();
  expect(img.src).toContain("https://via.placeholder.com/215"); // Check the default image URL
});

test("renders a <p> with the about text", () => {
  render(<About about="About this blog" image="path/to/image.jpg" />);
  const p = screen.getByText("About this blog"); // Ensure the text matches
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});