/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import {
  Map,
  Marker,
  NavigationControl,
  ScaleControl,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MapGL = () => {
  const [token, setToken] = useState(
    "pk.eyJ1IjoiY2V0aHJlYWQiLCJhIjoiY2xuZXFpemlzMGVtYzJrcGtzdG5pM2QzZSJ9.W6Wqg5NzMAp_zr-XM4hw-Q",
  );
  const [mapStyle, setMapstyle] = useState(
    "mapbox://styles/cethread/clnet40br07rt01p76iakdav0",
  );
  const viewport = {
    initialViewState: {
      longitude: -73.935242,
      latitude: 40.73061,
      zoom: 15,
    },
    width: "100vw",
    height: "600px",
    mapStyle,
  };

  return (
    <Map
      initialViewStateLon={viewport.initialViewState.longitude}
      initialViewStateLat={viewport.initialViewState.latitude}
      initialViewStateZoom={viewport.initialViewState.zoom}
      width={viewport.width}
      height={viewport.height}
      mapStyle={mapStyle}
      mapboxAccessToken={token}
    >
      <Marker
        longitude={viewport.initialViewState.longitude}
        latitude={viewport.initialViewState.latitude}
        anchor="bottom"
      >
        <i
          className="fa-solid fa-location-dot fs-1"
          style={{ color: "#ffffff" }}
        />
        ;
      </Marker>
      <NavigationControl />
      <ScaleControl />
      <FullscreenControl />
      <GeolocateControl />
    </Map>
  );
};
export default MapGL;
