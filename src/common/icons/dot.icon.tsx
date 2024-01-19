import React from 'react';
import { IconProps } from '@/common/interface/global';

const DotIcon = ({ size, color, className, height }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || '48'}
      height={height || '48'}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color || 'currentColor'}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-dot"
    >
      <circle cx="12.1" cy="12.1" r="1" />
    </svg>
  );
};

export default DotIcon;
