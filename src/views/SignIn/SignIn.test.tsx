import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignIn from "./SignIn";

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockUsedNavigate,
}));

test("Loads and displays correctly", async () => {
    render(<SignIn  />);
    expect(screen.getByRole("title")).toHaveTextContent("Track your order");
});
