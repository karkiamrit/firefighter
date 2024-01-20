// Page.js (React Frontend)
'use client'
import React, { useEffect } from 'react';

function Page() {
  useEffect(() => {
    // Redirect to the Flask route
    window.location.href = 'http://127.0.0.1:5000/predict';
  }, []);

  // This component doesn't render anything because it's intended to redirect

  return null;
}

export default Page;
