import { render, waitFor, screen } from "@testing-library/react";
import Map from "../components/Map";

// Mocking the fetch call to simulate a successful response
global.fetch = jest.fn().mockResolvedValue({
  json: () =>
    Promise.resolve({
      events: [
        {
          id: "1",
          title: "Test Wildfire",
          categories: [{ id: 8 }],
          geometries: [{ coordinates: [-122.8756, 42.3265] }],
        },
      ],
    }),
});

describe("Map Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without errors", () => {
    render(<Map />);
  });

  it("displays loader while loading", async () => {
    render(<Map />);
    expect(screen.getByTestId("loader")).toBeInTheDocument();
    await waitFor(() =>
      expect(screen.queryByTestId("loader")).not.toBeInTheDocument()
    );
  });

  it("renders fetched data correctly", async () => {
    render(<Map />);
    await waitFor(() =>
      expect(screen.getByText("Wild Fire Tracker")).toBeInTheDocument()
    );
    expect(screen.getByTestId("google-map")).toBeInTheDocument();
  });

  it("creates markers correctly based on event data", async () => {
    render(<Map />);
    await waitFor(() =>
      expect(screen.getByTestId("google-map")).toBeInTheDocument()
    );
    expect(screen.getByTestId("location-marker")).toBeInTheDocument();
  });

  it("displays location information when marker is clicked", async () => {
    render(<Map />);
    await waitFor(() =>
      expect(screen.getByTestId("google-map")).toBeInTheDocument()
    );

    // Click on the marker
    const marker = screen.getByTestId("location-marker");
    marker.click();

    expect(screen.getByTestId("location-info")).toBeInTheDocument();
  });
});
