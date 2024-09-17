
import React from 'react';
import { Row, Col, Typography } from 'antd';
import { blue } from '@ant-design/colors';


const FunnelStep = ({ label, value, conversionRate, previousConversionRate, height, color }) => {
  // Clip-path for trapezoid shape
 // const trapezoidStyle = {
  //   width: '100%', // Always 100% width, but visually tapered with clip-path
  //   height: `${height}px`, // Height based on the previous step
  //   backgroundColor: color, // Color from Ant Design palette
  //   clipPath: `polygon(0 0, ${conversionRate * 100}% 0, 100% 100%, 0% 100%)`, // Creates tapered trapezoid
  //   transition: 'all 0.3s ease' // Smooth animation
  // };

  const rectangleStyle = {
    width: '100%',               // Full width before scaling
    height: `${height}px`,        // Height based on the previous step
    backgroundColor: color,       // Color from Ant Design palette
    transform: `scaleX(${conversionRate})`, // Scale the width based on the conversion rate
    transformOrigin: 'left',      // Scale from the left-hand side
    transition: 'all 0.3s ease'   // Smooth animation for scaling
  };

  const trapezoidStyle = {
    width: '100%',  // Full width, but visually tapered with clip-path
    height: `${height}px`,  // Dynamic height based on previous step
    backgroundColor: color,  // Color from Ant Design or your palette
    clipPath: `polygon(0 0, ${conversionRate * 100}% 0, ${previousConversionRate * 100}% 100%, 0 100%)`, 
    transition: 'all 0.3s ease',  // Smooth animation when updating
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <div>{label}</div>
      <div>{value}</div>
      <div>{(conversionRate * 100).toFixed(1)}%</div>
      <div style={trapezoidStyle}></div>
    </div>
  );
};

  export default FunnelStep;
  