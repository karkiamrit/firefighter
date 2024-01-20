'use client';
import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const CsvToJsonExample = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://firms.modaps.eosdis.nasa.gov/api/area/csv/e36981f1005b53395d698a4ce0bc4e6f/VIIRS_SNPP_NRT/world/1'
        );

        const csv = await response.text();

        Papa.parse(csv, {
          header: true,
          dynamicTyping: true,
          complete: (result:any) => {
            // Extracting only latitude, longitude, and confidence
            const extractedData = result.data.filter((item:any) => item.confidence !== 'n').map((item:any) => ({
              latitude: item.latitude,
              longitude: item.longitude,
              confidence: item.confidence,
            }));
            setJsonData(extractedData);
          },
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return JSON.stringify(jsonData, null, 2)
    
};

export default CsvToJsonExample;
