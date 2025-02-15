import React from 'react';

const MenuIcon = ({ color, size }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 16 16'
      fill={color}
    >
      <path d='M16 5H0V4h16v1zm0 8H0v-1h16v1zm0-4.008H0V8h16v.992z' />
    </svg>
  );
};

export default MenuIcon;
