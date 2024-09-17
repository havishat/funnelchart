import FunnelStep from './FunnelStep'
import React from 'react';
import { Row, Col, Typography } from 'antd';
import { blue } from '@ant-design/colors';

import { theme } from 'antd';

//const colors = [blue[5], blue[4], blue[3], blue[2]]; // Gradually lighter blues


  const Funnel = () => {
    const baseHeight = 100;  // Starting height for the first step
  const funnelData = [
    { label: "Sessions", value: 1731, conversionRate: 1 },
    { label: "Product Views", value: 1131, conversionRate: 1131 / 1731 },
    { label: "Checkouts", value: 531, conversionRate: 531 / 1131 },
    { label: "Purchases", value: 331, conversionRate: 331 / 531 },
  ];

  /***
   * 1) lefts side 100 and right side 100
   * 2) lefts side 100 and right side 100 * conversionRate (1131 / 1731)
   * 3) left side 100 * conversionRate (1131 / 1731) and right side is 100 * conversionRate (1131 / 1731) * conversionRate: 531 / 1131 
   * 4) 100 * conversionRate (1131 / 1731) * conversionRate: 531 / 1131  and right side is
   */

  const colors = ['#1890ff', '#40a9ff', '#69c0ff', '#91d5ff'];  // Example blue shades

  return (
    <div>
      {funnelData.map((step, index) => {
        const height = index === 0
          ? baseHeight
          : baseHeight * funnelData[index - 1].conversionRate;  // Adjust height based on the previous step

        const previousConversionRate = index === 0
          ? 1  // For the first step, there is no previous step, so use 1 (full width)
          : funnelData[index - 1].conversionRate;

        return (
          <FunnelStep
            key={step.label}
            label={step.label}
            value={step.value}
            conversionRate={step.conversionRate}
            previousConversionRate={previousConversionRate}
            height={height}
            color={colors[index]}
          />
        );
      })}
    </div>
  );
  };
  
  export default Funnel;
  