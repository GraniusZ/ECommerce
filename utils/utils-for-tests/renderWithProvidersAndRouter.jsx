import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "@utils/utils-for-tests/renderWithProviders";

export const renderWithProvidersAndRouter = (component, initialRoute = "/") => {
  return renderWithProviders(
    <MemoryRouter initialEntries={[initialRoute]}>{component}</MemoryRouter>
  );
};
