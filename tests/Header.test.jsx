import { renderWithProvidersAndRouter } from "@utils/utils-for-tests/renderWithProvidersAndRouter";
import { Header } from "@modules/Header";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Header", () => {
  it("renders Header", () => {
    renderWithProvidersAndRouter(<Header />);
    const logo = screen.getByText(/comforty/i, { exact: true });
    const search = screen.getByTestId(/search-form/i, {});
    const cart = screen.getByTestId(/cart/i, {});
    const favorites = screen.getByTestId(/favorites/i, {});
    const profile = screen.getByTestId(/profile/i, {});
    const burger = screen.getByTestId(/burger-menu/i, {});
    const categories = screen.getByTestId(/category/i, {});
    const nav = screen.getByTestId(/nav/i, {});
    const contact = screen.getByText(/contact:/i, { exact: true });
    expect(logo).toBeInTheDocument();
    expect(search).toBeInTheDocument();
    expect(cart).toBeInTheDocument();
    expect(favorites).toBeInTheDocument();
    expect(profile).toBeInTheDocument();
    expect(burger).toBeInTheDocument();
    expect(categories).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
  });

  it("checks search", async () => {
    renderWithProvidersAndRouter(<Header />);
    const input = screen.getByPlaceholderText(/Search here.../i, {
      exact: true,
    });
    await userEvent.type(input, "text");
    await waitFor(() => {
      expect(input).toHaveValue("text");
    });

    const searchSubmit = screen.getByTestId(/search-submit/i, {});
    await userEvent.click(searchSubmit); //should reset input field
    await waitFor(() => {
      expect(input).not.toHaveValue("text");
    });

    const openSearch = screen.getByTestId(/open-search/i, {});
    expect(openSearch).toBeInTheDocument();
    await userEvent.click(openSearch);
    const search = screen.getByTestId(/search-form/i, {});
    await waitFor(() => {
      expect(search).toHaveClass("visible");
    });

    const closeSearch = screen.getByTestId(/close-search/i, {});
    expect(closeSearch).toBeInTheDocument();
    await userEvent.click(closeSearch);
    await waitFor(() => {
      expect(search).not.toHaveClass("visible");
    });
  });
  it("checks drawer", async () => {
    renderWithProvidersAndRouter(<Header />);
    const burger = screen.getByTestId(/burger-menu/i, {});
    await userEvent.click(burger);
    const drawer = screen.getByTestId(/drawer/i, {});
    const overlay = screen.getByTestId(/overlay/i, {});
    await waitFor(() => {
      expect(drawer).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(overlay).toBeInTheDocument();
    });
  });
  it("checks category", async () => {
    renderWithProvidersAndRouter(<Header />);
    const categoryButton = screen.getByTestId(/category/i, {});
    const nav = screen.getByTestId(/nav/i, {});
    await userEvent.click(categoryButton);
    const categoryNav = screen.getByTestId(/category-nav/i, {});
    await waitFor(() => {
      expect(categoryNav).toBeInTheDocument();
    });
    await userEvent.click(nav);
    await waitFor(() => {
      expect(categoryNav).not.toBeInTheDocument();
    });
  });
});
