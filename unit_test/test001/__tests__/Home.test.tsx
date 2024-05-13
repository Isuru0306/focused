import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("should have Docs text", () => {
    render(<Home />); //ARRANGE
    const myElem = screen.getAllByText("Docs"); //ACT
    myElem.forEach((elem) => {
      expect(elem).toBeInTheDocument(); // ASSERT
    });
  });

  it("should contained the text 'information'", () => {
    render(<Home />); //ARRANGE
    const myElem = screen.getAllByText(/information/); //ACT
    myElem.forEach((elem) => {
      expect(elem).toBeInTheDocument(); // ASSERT
    });
  });

  it("should have heading", () => {
    render(<Home />); //ARRANGE
    const myElem = screen.getByRole("heading", {
      name: "Deploy",
    }); //ACT
    expect(myElem).toBeInTheDocument(); // ASSERT
  });
});
