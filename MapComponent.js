import React from 'react';
import MapView, { Circle } from 'react-native-maps';

export default function MapComponent({ roads }) {
  return (
    <MapView
      style={{ flex: 1 }}
      initialRegion={{
        latitude: 13.0827,
        longitude: 80.2707,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      {roads.map((road, index) => (
        <Circle
          key={index}
          center={{ latitude: road.lat, longitude: road.lon }}
          radius={300}
          fillColor={road.health_score < 50 ? "rgba(231, 76, 60, 0.6)" : "rgba(46, 204, 113, 0.6)"}
          strokeColor="white"
        />
      ))}
    </MapView>
  );
}
