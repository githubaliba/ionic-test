import { GoogleMap } from "@capacitor/google-maps";
import { useEffect, useRef } from "react";

const MyMap: React.FC = () => {
  const mapRef = useRef<HTMLElement>();
  let newMap: GoogleMap;

  async function createMap() {
    if (!mapRef.current) return;

    newMap = await GoogleMap.create({
      id: "my-cool-map",
      element: mapRef.current,
      apiKey: "AIzaSyB8TJ61oyZ89DCGqn-HDx01iwTIRHq1U9c",
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      },
    });
  }

  useEffect(() => {
    createMap();
  }, []);

  return (
    <div className="component-wrapper">
      <capacitor-google-map
        ref={mapRef}
        style={{
          display: "inline-block",
          width: 2000,
          height: 800,
          maxWidth: "100%",
          minWidth: "100%",
          maxHeight: "35rem",
          minHeight: "25rem",
        }}
      ></capacitor-google-map>

      {/* <button onClick={createMap}>Create Map</button> */}
    </div>
  );
};

export default MyMap;
