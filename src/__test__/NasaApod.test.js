import { render, waitFor, screen } from "@testing-library/react";
import NasaApod from "../components/NasaApod";

global.fetch = jest.fn().mockResolvedValue({
  json: () =>
    Promise.resolve({
      title: "Test Title",
      date: "2024-05-04",
      explanation: "Test Explanation",
      media_type: "image",
      url: "https://example.com/image.jpg",
    }),
});

describe("NasaApod Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without errors", () => {
    render(<NasaApod />);
  });

  it("displays loader while loading", async () => {
    render(<NasaApod />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.queryByTestId("loader")).not.toBeInTheDocument()
    );
  });

  it("renders fetched data correctly", async () => {
    render(<NasaApod />);
    await waitFor(() =>
      expect(screen.getByText("Test Title")).toBeInTheDocument()
    );
    expect(screen.getByText("2024-05-04")).toBeInTheDocument();
    expect(screen.getByText("Test Explanation")).toBeInTheDocument();
    expect(screen.getByAltText("Test Title")).toBeInTheDocument();
  });

  it("handles error gracefully", async () => {
    // Mocking the fetch call to simulate an error
    global.fetch.mockRejectedValueOnce(new Error("Network Error"));

    render(<NasaApod />);
    await waitFor(() =>
      expect(screen.getByText("No data!!!")).toBeInTheDocument()
    );
  });
});
