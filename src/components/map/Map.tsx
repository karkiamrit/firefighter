'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from 'react-leaflet';
import { DivIcon, Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import toast, { Toaster } from 'react-hot-toast';
import { cn } from '@/lib/utils';

interface MapProps {
  zoom: number;
  onSelectLocation: (location: [number, number]) => void;
  center?: [number, number];
}

// const customIcon = new Icon({
//   iconUrl: '/marker.png',
//   iconSize: [30, 31], // size of the icon
//   iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
//   popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
//   shadowSize: [41, 41], // size of the shadow
// });

const fire = [
  {
    latitude: 26.8065,
    longitude: 87.2846,
  },
  {
    latitude: 26.8065,
    longitude: 87.2451,
  },
  {
    latitude: 26.8065,
    longitude: 87.11,
  },
  {
    latitude: 26.8065,
    longitude: 87.4456,
  },
];

const predictedfirezone = [
  {
    latitude: 26.8065,
    longitude: 87.2846,
  },
  {
    latitude: 26.8065,
    longitude: 87.889,
  },
];

const MapComponent: React.FC<MapProps> = ({
  zoom,
  onSelectLocation,
  center,
}) => {
  const [markerPosition, setMarkerPosition] = useState<[number, number]>([
    0, 0,
  ]);
  const [locationError, setLocationError] = useState(false);
  const toastShownRef = useRef(false);
  const [customIcon, setCustomIcon] = useState<Icon | undefined>(undefined);
  const [flameIcon, setFlameIcon] = useState<Icon | undefined>(undefined);
  

  const CustomMarker = ({ position, size }: any) => (
    <Marker
      position={position}
      icon={
        new DivIcon({
          className: 'custom-div',
          html: `<div style=" width: 150px; height: 150px; background-color: rgba(255, 0, 0, 0.3); border-radius: 50%; "></div>`,
        })
      }
      
    />
    
  );


  useEffect(() => {
    if (center && center[0] !== 0 && center[1] !== 0) {
      setMarkerPosition(center);
      onSelectLocation(center);
    } else {
      if (typeof window !== 'undefined') {
        console.log(markerPosition);
        setCustomIcon(
          new Icon({
            iconUrl: '/marker.png',
            iconSize: [30, 31], // size of the icon
            iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
            popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
            shadowSize: [41, 41], // size of the shadow
          }),
        );
        setFlameIcon(
          new Icon({
            iconUrl: '/flame.png',
            iconSize: [30, 31], // size of the icon
            iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
            popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
            shadowSize: [41, 41], // size of the shadow
          }),
        );
      }
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude: lat, longitude: lon } = position.coords;
            console.log(lat, lon);
            setMarkerPosition([lat, lon]);
            onSelectLocation([lat, lon]);
            setLocationError(false);
          },
          (error) => {
            if (!locationError && !toastShownRef.current) {
              setLocationError(true);
              toast('Please enable your location first');
              toastShownRef.current = true;
            }
          },
        );
      } else {
        if (!locationError && !toastShownRef.current) {
          setLocationError(true);
          toast('Geolocation is not supported by this browser.');
          toastShownRef.current = true;
        }
      }
    }
  }, [onSelectLocation, center, locationError]);

  const ChangeView = () => {
    const map = useMap();
    map.setView(markerPosition, zoom);
    return null;
  };
  

  return (
    <div className="flex flex-col">
      <Toaster position="top-center" reverseOrder={false} />
      <MapContainer
        center={center || markerPosition}
        zoom={zoom}
        className="h-[400px] w-[100%] rounded-2xl relative"
      >
        
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {fire.map((item, index) => (
          <Marker
            key={index}
            position={[item.latitude, item.longitude]}
            icon={flameIcon}
          />
        ))}

        {predictedfirezone.map((item, index) => (
          <CustomMarker
            key={index}
            position={[item.latitude, item.longitude]}
           
          />
        ))}
        {/* <Marker position={markerPosition} icon={customIcon } />*/}
        {customIcon && <Marker position={markerPosition} icon={customIcon} />}
        {/* <HandleClick /> */}
        <ChangeView />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
