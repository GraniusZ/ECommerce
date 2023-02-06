import { screen } from "@testing-library/react";
import App from "@/App/App";
import { renderWithProviders } from "@utils/utils-for-tests/renderWithProviders";

describe("App", () => {
  it("Renders App", () => {
    renderWithProviders(<App />);
    expect(screen.getByTestId(/header/i, {})).toBeInTheDocument();
    expect(screen.getByTestId(/main/i, {})).toBeInTheDocument();
    expect(screen.getByTestId(/footer/i, {})).toBeInTheDocument();
  });
});
