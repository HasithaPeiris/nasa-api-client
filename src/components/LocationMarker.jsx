import WhatshotIcon from "@mui/icons-material/Whatshot";
import { useState } from "react";

const LocationMarker = ({ lat, lng, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`transform ${
        isHovered ? "scale-125" : ""
      } transition-transform duration-300 ease-in-out`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <WhatshotIcon className="text-2xl text-orange-500" />
    </div>
  );
};

export default LocationMarker;
