
import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface DeliveryPoint {
  id: number;
  name: string;
  position: [number, number]; // [lat, lng]
  time: string;
  order: string;
}

interface LeafletMapProps {
  deliveryPoints: DeliveryPoint[];
}

const LeafletMap: React.FC<LeafletMapProps> = ({ deliveryPoints }) => {
  // Fix for default icons in Leaflet with webpack/vite
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    });
  }, []);

  // Lyon bakery position (starting point)
  const bakeryPosition: [number, number] = [45.7602, 4.8320];
  
  // Bakery icon
  const bakeryIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/3081/3081967.png',
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [0, -35],
  });

  // Delivery point icon
  const deliveryIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2776/2776067.png',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });
  
  // Create route path (bakery -> all points -> bakery)
  const routePath = [
    bakeryPosition,
    ...deliveryPoints.map(point => point.position),
    bakeryPosition
  ];

  return (
    <MapContainer 
      center={bakeryPosition} 
      zoom={14} 
      style={{ height: "100%", width: "100%", borderBottomLeftRadius: "0.5rem", borderBottomRightRadius: "0.5rem" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Bakery Marker */}
      <Marker position={bakeryPosition} icon={bakeryIcon}>
        <Popup>
          <div className="font-medium">Boulangerie Martin</div>
          <div className="text-sm">Point de départ</div>
        </Popup>
      </Marker>

      {/* Delivery Points Markers */}
      {deliveryPoints.map((point) => (
        <Marker key={point.id} position={point.position} icon={deliveryIcon}>
          <Popup>
            <div className="font-medium">{point.name}</div>
            <div className="text-sm">{point.time}</div>
            <div className="text-sm">{point.order}</div>
          </Popup>
        </Marker>
      ))}

      {/* Route Line */}
      <Polyline 
        positions={routePath} 
        pathOptions={{ color: '#8B4513', weight: 4, dashArray: '10, 10', opacity: 0.7 }} 
      />
    </MapContainer>
  );
};

export default LeafletMap;
