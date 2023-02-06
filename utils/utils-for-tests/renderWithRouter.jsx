import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

export const renderWithRouter = (component, initialRoute = "/") => {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>{component}</MemoryRouter>
  );
};
