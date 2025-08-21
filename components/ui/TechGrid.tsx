// components/ui/TechGrid.tsx
'use client';

import React, { useState, useEffect } from 'react';

// No es necesario memoizarlo de esta forma para este caso específico
export default function TechGrid() {
    // 1. Creamos un estado para almacenar los delays
    const [delays, setDelays] = useState<number[]>([]);

    // 2. Usamos useEffect para generar los delays aleatorios SOLO en el cliente
    useEffect(() => {
        // Esta función se ejecuta únicamente después de que el componente se monta en el navegador
        const generatedDelays = Array.from({ length: 144 }, () => Math.random() * 4);
        setDelays(generatedDelays);
    }, []); // El array vacío [] asegura que esto se ejecute solo una vez

    return (
        <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full grid grid-cols-12 gap-4">
                {Array.from({ length: 144 }).map((_, i) => (
                    <div
                        key={i}
                        className="border border-white opacity-0 animate-grid-pulse"
                        style={{
                            // 3. Usamos los delays del estado. Si el estado está vacío (en el servidor), no se aplica ningún delay.
                            animationDelay: delays[i] ? `${delays[i]}s` : '0s',
                        }}
                    />
                ))}
            </div>
        </div>
    );
}