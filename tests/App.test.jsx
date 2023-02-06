import { screen } from "@testing-library/react";
import App from "@/App/App";
import { renderWithProviders } from "@utils/utils-for-tests/renderWithProviders";

describe("App", () => {
  it("Renders App", () => {
    renderWithProviders(<App />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("main").toBeInTheDocument);
    expect(screen.getByRole("contentinfo").toBeInTheDocument);
  });
});
