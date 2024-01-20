// Page.js
"use client"
import MaxWidthWrapper from '@/components/wrapper/MaxWidthWrapper';
import React,{useState} from 'react';
// import MapComponent from '@/components/map/Map';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('@/components/map/Map'), { ssr: false });

const Page = () => {
  const [selectedLocation, setSelectedLocation] = useState<[number, number]>([
    0,0
  ]);

  const handleLocationSelect = (location: [number, number]) => {
    setSelectedLocation(location);
  };

  return (
    <MaxWidthWrapper>
       <MapComponent
        zoom={15}
        onSelectLocation={handleLocationSelect}
        center={selectedLocation}
      />
    </MaxWidthWrapper>
  );
};

export default Page;
