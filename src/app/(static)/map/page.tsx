// Page.js
import MaxWidthWrapper from '@/components/wrapper/MaxWidthWrapper';
import React from 'react';
import MapComponent from '@/components/map/Map';

const Page = () => {
  const handleLocationSelection = (event:any) => {
    const { lat, lng } = event.latlng;
    console.log('Selected Location:', [lat, lng]);
    // You can perform further actions with the selected location
  };

  return (
    <MaxWidthWrapper>
      <MapComponent
        zoom={15}
        onSelectLocation={handleLocationSelection}
        center={[27.7172, 85.324]}
      />
    </MaxWidthWrapper>
  );
};

export default Page;
