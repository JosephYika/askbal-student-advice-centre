import React from 'react';

/**
 * CubeText Component - 3D animated text effect
 * 
 * PURPOSE: Creates a 3D cube animation effect for text characters
 * CONNECTS TO: Hero component for "2025" display
 * STYLES: Relies on CSS animations defined in index.css
 * 
 * ANIMATION TECHNIQUE:
 * - Each character becomes a 3D cube with 6 faces
 * - Uses CSS transform3d for hardware acceleration
 * - Staggered animation delays for wave effect
 * - DMU burgundy color scheme with gradients
 */

interface CubeTextProps {
  text: string;        // Text to display as 3D cubes
  className?: string;  // Additional CSS classes
}

const CubeText: React.FC<CubeTextProps> = ({ text, className = '' }) => {
  return (
    // Main container for the 3D text effect
    <div className={`cube-text-container ${className}`}>
      <div className="cube-text">
        {/* Split text into individual characters for animation */}
        {text.split('').map((char, index) => (
          <div
            key={index}
            className="cube-char"
            style={{
              '--j': index,                          // CSS variable for character position
              animationDelay: `${index * 0.15}s`   // Staggered animation timing
            } as React.CSSProperties}
          >
            {/* Create 6 faces for each character cube */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="cube-face"
                style={{
                  '--i': i  // CSS variable for face positioning
                } as React.CSSProperties}
              >
                {char}  {/* Display character on each face */}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CubeText;