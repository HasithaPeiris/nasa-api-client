import React, { useEffect, useState } from "react";
import { Loader } from "../components";

const nasaApi = import.meta.env.VITE_NASA_API_KEY;

const NasaApod = () => {
  const [photoData, setPhotoData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${nasaApi}`
        );
        const data = await res.json();
        setPhotoData(data);
        setLoading(false);
      } catch (err) {
        console.log(err.message);
        alert("No data!!!");
      }
    }
  }, []);

  if (loading) {
    return <Loader data-testid="loader" />;
  }

  return (
    <div className="max-w-screen-lg mx-auto mb-24 px-5">
      <h1 className="text-3xl text-white font-bold text-center py-12">
        Astronomy Picture of the Day
      </h1>
      <div className="flex items-start justify-center">
        {photoData && (
          <div className="flex flex-col gap-5">
            {photoData.media_type === "image" ? (
              <img
                className="w-full rounded-lg border-2 border-secondary"
                src={photoData.url}
                alt={photoData.title}
              />
            ) : (
              <iframe
                className="w-full rounded-lg border-2 border-secondary"
                title="space-video"
                src={photoData.url}
                frameBorder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
              />
            )}

            <div className="px-6 py-4 bg-primary-dark border-2 border-secondary rounded-lg text-left">
              <div className="font-bold text-xl mb-2 text-white">
                {photoData.title}
              </div>
              <p className="text-gray-400 text-base mb-2">{photoData.date}</p>
              <p className="text-gray-300 text-base">{photoData.explanation}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NasaApod;
