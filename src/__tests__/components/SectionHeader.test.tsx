import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SectionHeader from "@/components/ui/SectionHeader";

describe("SectionHeader component", () => {
  it("renders label, title, and description", () => {
    render(
      <SectionHeader
        label="Test Label"
        title="Test Title"
        description="Test description text"
      />
    );
    expect(screen.getByText("Test Label")).toBeInTheDocument();
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test description text")).toBeInTheDocument();
  });

  it("renders title as h2", () => {
    render(
      <SectionHeader label="Label" title="My Title" description="Desc" />
    );
    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading).toHaveTextContent("My Title");
  });

  it("renders without description", () => {
    render(<SectionHeader label="Label" title="Title" />);
    expect(screen.getByText("Title")).toBeInTheDocument();
  });
});
