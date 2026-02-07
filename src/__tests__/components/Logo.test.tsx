import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Logo from "@/components/ui/Logo";

describe("Logo component", () => {
  it("renders <Shawon/> text", () => {
    render(<Logo />);
    expect(screen.getByText("<")).toBeInTheDocument();
    expect(screen.getByText("Shawon")).toBeInTheDocument();
    expect(screen.getByText("/")).toBeInTheDocument();
    expect(screen.getByText(">")).toBeInTheDocument();
  });

  it("renders with default size", () => {
    const { container } = render(<Logo />);
    const nameSpan = container.querySelector(".text-base");
    expect(nameSpan).toBeInTheDocument();
  });

  it("renders with small size", () => {
    const { container } = render(<Logo size="sm" />);
    const nameSpan = container.querySelector(".text-sm");
    expect(nameSpan).toBeInTheDocument();
  });

  it("has accent-colored brackets", () => {
    render(<Logo />);
    const openBracket = screen.getByText("<");
    const closeBracket = screen.getByText(">");
    expect(openBracket.className).toContain("text-accent");
    expect(closeBracket.className).toContain("text-accent");
  });
});
