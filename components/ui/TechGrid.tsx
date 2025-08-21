// components/ui/TechGrid.tsx
'use client';

import React from 'react';

// Memoizamos para optimizar.
const TechGrid = React.memo(function TechGrid() {
  return (
    // La opacidad ahora es un poco mayor para que el efecto sea visible
    <div className="absolute inset-0 opacity-10 pointer-events-none">
      {/* Este único div generará toda la grilla y la animación */}
      <div className="absolute inset-0 tech-grid-background" />
    </div>
  );
});

export default TechGrid;