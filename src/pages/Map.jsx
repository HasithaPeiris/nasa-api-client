import GoogleMapReact from "google-map-react";
import { LocationMarker, Loader, LocationInfo } from "../components";
import { useState, useEffect } from "react";

const Map = () => {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [LocationInformation, setLocationInfo] = useState(null);

  const defaultProps = {
    center: {
      lat: 42.3265,
      lng: -122.8756,
    },
    zoom: 6,
  };

  const markers = eventData.map((ev, index) => {
    if (ev.categories[0].id === 8) {
      return (
        <LocationMarker
          key={index}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      );
    }
    return null;
  });

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();

    console.log(eventData);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-screen-lg mx-auto mb-24">
      <h1 className="text-3xl text-white font-bold text-center py-12">
        Wild Fire Tracker
      </h1>
      <div className="flex items-start justify-center">
        <div className="mb-4">
          <div className="map border-2 border-secondary">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyCOC4T-hDe_ui5WgcYVS9Ib070TwGDdbJI",
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              {markers}
            </GoogleMapReact>
            {LocationInformation && <LocationInfo info={LocationInformation} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
