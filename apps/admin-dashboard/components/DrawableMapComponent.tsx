"use client";

import { useCallback } from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import {
  MapContainer,
  TileLayer,
  FeatureGroup,
  Polygon,
  Tooltip,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import L from "leaflet";

// Fix Leaflet default marker icons in Next.js
const DEFAULT_ICON = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DEFAULT_ICON;

// Existing example zones (read-only reference)
const existingZones = [
  {
    id: "zoneA",
    name: "Arboretum Barat",
    coords: [
      [-3.46, -62.21],
      [-3.46, -62.19],
      [-3.48, -62.18],
      [-3.48, -62.20],
    ] as [number, number][],
    color: "#10b981",
  },
  {
    id: "zoneB",
    name: "Lab Iklim Mikro B",
    coords: [
      [-3.43, -62.16],
      [-3.44, -62.14],
      [-3.46, -62.15],
      [-3.45, -62.17],
    ] as [number, number][],
    color: "#8b5cf6",
  },
];

// Calculate geodesic area in hectares from latlngs
function calcAreaHa(latlngs: L.LatLng[]): number {
  const R = 6378137; // Earth radius in meters
  let area = 0;
  const n = latlngs.length;
  for (let i = 0; i < n; i++) {
    const j = (i + 1) % n;
    const xi = (latlngs[i].lng * Math.PI) / 180;
    const yi = (latlngs[i].lat * Math.PI) / 180;
    const xj = (latlngs[j].lng * Math.PI) / 180;
    const yj = (latlngs[j].lat * Math.PI) / 180;
    area += (xj - xi) * (2 + Math.sin(yi) + Math.sin(yj));
  }
  area = Math.abs((area * R * R) / 2);
  return area / 10000; // m² → Ha
}

// Format centroid
function calcCentroid(latlngs: L.LatLng[]): string {
  const lat = latlngs.reduce((s, p) => s + p.lat, 0) / latlngs.length;
  const lng = latlngs.reduce((s, p) => s + p.lng, 0) / latlngs.length;
  return `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
}

interface Props {
  category: "makro" | "mikro";
  onAreaDrawn: (areaHa: number, coordsStr: string) => void;
}

export default function DrawableMapComponent({ category, onAreaDrawn }: Props) {
  const polygonColor = category === "makro" ? "#10b981" : "#8b5cf6";

  const handleCreated = useCallback(
    (e: any) => {
      const layer = e.layer as L.Polygon;
      const latlngs = layer.getLatLngs()[0] as L.LatLng[];
      const areaHa = calcAreaHa(latlngs);
      const centroid = calcCentroid(latlngs);
      onAreaDrawn(areaHa, centroid);

      // Style the drawn polygon to match chosen category
      layer.setStyle({
        color: polygonColor,
        fillColor: polygonColor,
        fillOpacity: 0.2,
        weight: 3,
      });
    },
    [onAreaDrawn, polygonColor]
  );

  const handleDeleted = useCallback(() => {
    onAreaDrawn(0, "");
  }, [onAreaDrawn]);

  return (
    <MapContainer
      center={[-3.45, -62.18]}
      zoom={13}
      scrollWheelZoom
      style={{ height: "100%", width: "100%" }}
      className="h-full w-full"
    >
      {/* Satellite-style tile layer */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />

      {/* Street name overlay */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution=""
        opacity={0.3}
      />

      {/* Existing reference zones (read-only) */}
      {existingZones.map((zone) => (
        <Polygon
          key={zone.id}
          positions={zone.coords}
          pathOptions={{
            color: zone.color,
            fillColor: zone.color,
            fillOpacity: 0.15,
            weight: 2,
            dashArray: "6 4",
          }}
        >
          <Tooltip
            direction="center"
            permanent
            className="bg-transparent border-none shadow-none font-bold text-xs"
          >
            {zone.name}
          </Tooltip>
        </Polygon>
      ))}

      {/* Drawing tools */}
      <FeatureGroup>
        <EditControl
          position="topleft"
          onCreated={handleCreated}
          onDeleted={handleDeleted}
          draw={{
            polygon: {
              allowIntersection: false,
              showArea: true,
              shapeOptions: {
                color: polygonColor,
                fillColor: polygonColor,
                fillOpacity: 0.2,
                weight: 3,
              },
            },
            rectangle: false,
            circle: false,
            circlemarker: false,
            marker: false,
            polyline: false,
          }}
          edit={{
            remove: true,
          }}
        />
      </FeatureGroup>
    </MapContainer>
  );
}
