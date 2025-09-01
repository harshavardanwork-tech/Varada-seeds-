import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Varada Seeds Logo"
    >
      {/* Blue Circle */}
      <circle cx="50" cy="50" r="48" fill="none" stroke="#004689" strokeWidth="2.5" />
      
      {/* Central plant/pot symbol in green */}
      <g fill="currentColor">
        {/* Pot Base */}
        <path d="M 38 60 L 62 60 L 58 75 L 42 75 Z" />
        <rect x="40" y="62" width="20" height="2" />
        <rect x="40" y="68" width="20" height="2" />

        {/* Plant Leaves */}
        <path d="M 50 32 C 65 35, 70 45, 65 55 C 60 58, 55 58, 50 60 Z" />
        <path d="M 50 32 C 35 35, 30 45, 35 55 C 40 58, 45 58, 50 60 Z" />
        {/* Top part of plant */}
        <path d="M 50 25 L 53 35 L 47 35 Z" />
      </g>
      
      {/* Wreath */}
      <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        {/* Stems */}
        <path d="M 40 85 C 10 70, 10 30, 45 20" />
        <path d="M 60 85 C 90 70, 90 30, 55 20" />
        
        {/* Leaves - Left side */}
        <path d="M 40 23 L 35 28" />
        <path d="M 33 30 L 28 35" />
        <path d="M 28 40 L 23 45" />
        <path d="M 23 50 L 18 55" />
        <path d="M 22 60 L 18 65" />
        <path d="M 25 70 L 22 75" />
        <path d="M 30 78 L 28 83" />

        {/* Leaves - Right side */}
        <path d="M 60 23 L 65 28" />
        <path d="M 67 30 L 72 35" />
        <path d="M 72 40 L 77 45" />
        <path d="M 77 50 L 82 55" />
        <path d="M 78 60 L 82 65" />
        <path d="M 75 70 L 78 75" />
        <path d="M 70 78 L 72 83" />
      </g>
    </svg>
  );
};

export default Logo;