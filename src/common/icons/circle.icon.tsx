import { IconProps } from '@/common/interface/global';

const CircleIcon = ({ size, color, fill, className, height }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      fill={fill || 'none'}
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-circle"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
};
export default CircleIcon;
