import React from 'react';

export interface IconProps {
  size?: number;
  height?: number;
  color?: string;
  fill?: string;
  className?: string;
}

export interface Menus {
  menu_name: string;
  href: string;
  icon?: string;
  parent_menu?: string;
  can_edit?: boolean;
}
