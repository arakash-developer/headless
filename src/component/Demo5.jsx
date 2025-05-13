import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';

const { Step } = Steps;

const App = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: 'User Info',
      content: 'This is the content for the first step: User Info.',
    },
    {
      title: 'Create Account',
      content: 'This is the content for the second step: Create Account.',
    },
  ];

  const items = steps.map(item => ({
    key: item.title,
    title: item.title,
    status:
      current === steps.indexOf(item)
        ? 'process'
        : current > steps.indexOf(item)
        ? 'finish'
        : 'wait',
  }));

  // Progress line style (with red color)
  const progressBarStyle = {
    width: '100%',
    height: '4px',
    backgroundColor: 'red', // Red progress line color
    position: 'relative',
    display: 'flex',
    justifyContent: 'center', // Centering the line horizontally
    alignItems: 'center', // Centering the line vertically
  };

  // Circle style for the steps
  const circleStyle = (isActive) => ({
    width: isActive ? '25px' : '20px', // Active circle is larger
    height: isActive ? '25px' : '20px', // Active circle is larger
    borderRadius: '50%',
    backgroundColor: 'red', // Red circle color
    position: 'absolute',
    top: '-8px',
  });

  return (
    <>
      <h2>Create your Account</h2>
      {/* Red Progress Line with Circles on Both Sides */}
      <div style={progressBarStyle}>
        {/* Left Circle */}
        <div
          style={{
            ...circleStyle(current === 0),
            left: '0%', // Position the first circle at the left side
          }}
        ></div>

        {/* Right Circle (Active Circle) */}
        <div
          style={{
            ...circleStyle(current === 1),
            right: '0%', // Position the second circle at the right side
          }}
        ></div>
      </div>

      {/* Steps component with custom red line under each step title */}
      <div style={{ marginTop: 20, display: 'flex', justifyContent: 'space-between' }}>
        {steps.map((step, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: current === index ? 'bold' : 'normal' }}>
              {step.title}
            </div>
            {/* Red line under the text */}
            {current >= index && (
              <div
                style={{
                  width: '30px',
                  height: '3px',
                  backgroundColor: 'red',
                  margin: '5px auto',
                }}
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Step Descriptions Box */}
      <div
        style={{
          marginTop: '20px',
          padding: '20px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          backgroundColor: '#f7f7f7',
        }}
      >
        {steps[current].content}
      </div>

      <div style={{ marginTop: 24 }}>
        {/* Left-Aligned Buttons */}
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          {current > 0 && (
            <Button style={{ marginRight: 8 }} onClick={prev}>
              Previous
            </Button>
          )}
          {current < steps.length - 1 ? (
            <Button type="primary" onClick={next}>
              Next
            </Button>
          ) : (
            <Button
              type="primary"
              onClick={() => message.success('Processing complete!')}
            >
              Done
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
