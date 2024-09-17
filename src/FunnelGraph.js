import React from 'react';
import { Row, Col, Typography } from 'antd';
import { blue } from '@ant-design/colors';

const { Title } = Typography;

// Function to calculate the conversion factor for each step
const getConversionFactor = (currentStep, previousStep) => {
  return currentStep / previousStep;
};

// Funnel data
const funnelData = [
  { label: 'Sessions', count: 1731 },
  { label: 'Product Views', count: 1131 },
  { label: 'Checkouts', count: 531 },
  { label: 'Purchases', count: 331 },
];


const previousHeight = 100;

// Funnel Graph component
function FunnelGraph() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f2f5', borderRadius: '10px' }}>
      <Title level={3}>Funnel Details</Title>
      <Row>
        {funnelData.map((step, index) => {
          // If it's the first step, conversion is always 100%
          const previousCount = index === 0 ? step.count : funnelData[index - 1].count;
          const conversionFactor = getConversionFactor(step.count, previousCount) * 100;
          funnelData[index].start = index === 0 ? 100 : funnelData[index-1].end;
          funnelData[index].end = (conversionFactor * funnelData[index].start) / 100;
          console.log(funnelData)
          const getColor = (index) => {
          //  const colors = ['#0050b3', '#096dd9', '#1890ff', '#40a9ff'];
            const colors = ['#003DB2', '#1777FF', '#4095FF', '#69B0FE']
          return colors[index];
          };

          return (
            <Col key={index} style={{ textAlign: 'center' }}>
              <div style={{display: 'inline',  marginRight: '10px' /* Adjust spacing between texts if needed */}}>
              {/* Render the funnel step label */}
              <Title level={5}>{step.label}</Title>
              {/* Render the total count */}
              <div>{step.count.toLocaleString()}</div>
              {/* Render the relative conversion factor */}
              {index == 0 && <div style={{margin:'0px'}}>hello</div>}
              {index > 0 && <div>({conversionFactor.toFixed(1)}%)</div>}
              </div>
              {/* Render the tapered rectangle based on conversion factor */}
              {index == 0 && <div style={{
                  height: `${funnelData[index].start}px`, /* This will be the width of the trapezoid */
                  background: getColor(index),
                  clipPath: `polygon(0 0, ${funnelData[index].end}% 0, ${funnelData[index].start}% 100%, 0 100%)`, 
                  transition: 'all 0.3s ease',  // Smooth animation when updating
              }}></div>}
              { index > 0 && < div
                style={{
                  width: '100px',
                  background: getColor(index),
                  height: `${funnelData[index].start}px`,
                  borderRightColor: getColor(index) ,
                  borderLeftColor: getColor(index) ,
                  borderLeft: `${funnelData[index].end}px solid` + getColor(index),
                  borderTop: '-10px solid transparent', /* Border at the top to create the trapezoid shape */
                  borderBottom: '-10px solid transparent', /* Larger left border to simulate a slant */
                }}
              ></div>}
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default FunnelGraph;
