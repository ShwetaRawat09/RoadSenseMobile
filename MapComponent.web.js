import React from 'react';
import { View, Text } from 'react-native';
import { Map as MapIcon } from 'lucide-react-native';

export default function MapComponent({ roads }) {
  return (
    <View style={{ flex: 1, backgroundColor: '#2d3436', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <MapIcon color="#ffffff" size={48} strokeWidth={1} />
      <Text style={{ color: 'white', fontWeight: 'bold', marginTop: 10, textAlign: 'center' }}>
        Map View Active on Mobile Devices
      </Text>
      <Text style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12, marginTop: 5 }}>
        Displaying {roads.length} active segments in telemetry log
      </Text>
    </View>
  );
}
