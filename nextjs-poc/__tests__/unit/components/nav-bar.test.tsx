import NavBar from "@/components/nav-bar";
import { NAV_LINKS } from "@/constants/nav-bar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("NavBar Component", () => {
  const renderComponent = () => {
    render(<NavBar />);
  };

  it("should render navbar link with correct href", () => {
    renderComponent();

    NAV_LINKS.forEach(({ href, label }) => {
      const navItem = screen.getByRole("link", { name: label });

      expect(navItem).toBeDefined();
      expect(navItem).toHaveAttribute("href", href);
    });
  });

  it("should render correct number of nav links", () => {
    renderComponent();

    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(NAV_LINKS.length);
  });
});
