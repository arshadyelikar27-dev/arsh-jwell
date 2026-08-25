import React from 'react';

export const NoiseOverlay: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[40] bg-noise opacity-30 mix-blend-overlay"
      aria-hidden="true"
    />
  );
};
