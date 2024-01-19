import MaxWidthWrapper from '@/components/wrapper/MaxWidthWrapper';
import React from 'react';
import MapComponent from '@/components/map/Map';

const Page = () => {
  // Custom location for Kathmandu, Nepal
  const kathmanduLocation: [number, number] = [27.7172, 85.324];

  return (
    <>
      <MaxWidthWrapper>
        <MapComponent
          zoom={15}
          onSelectLocation={(location) => console.log('Selected Location:', location)}
          center={kathmanduLocation}
        />
      </MaxWidthWrapper>
    </>
  );
};

export default Page;
