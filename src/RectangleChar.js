// RectangleChart.js
import React from 'react';

const RectangleChart = ({ numRectangles = 5, initialHeight = 100, heightConversionFactor = 0.5 }) => {
  const rectangles = [];

  let currentHeight = initialHeight;
  let currentY = 0;

  for (let i = 0; i < numRectangles; i++) {
    rectangles.push(
      <div
        key={i}
        style={{
          position: 'absolute',
          bottom: currentY,
          width: '100px',
          height: `${currentHeight}px`,
          backgroundColor: 'lightblue',
          border: '1px solid black',
        }}
      />
    );

    // Update positions for the next rectangle
    currentY += currentHeight;
    currentHeight *= heightConversionFactor;
  }

  return (
    <div style={{ position: 'relative', width: '120px', height: `${initialHeight}px` }}>
      {rectangles}
    </div>
  );
};

export default RectangleChart;
