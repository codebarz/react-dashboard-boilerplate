import React from 'react';

//Components
import Card from '../Card';

function AnalyticsSummary() {
  const parentCardStyle = {
    display: 'flex',
    background: '#fff',
    margin: '10px auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '95%',
    borderRadius: '4px',
    flexDirection: 'column',
    flex: '0 0 31%',
  };

  const userSummaryStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    margin: '10px 0',
  };

  const singleSummaryStyle = {
    boxShadow: '0px 1px 15px 1px rgba(69, 65, 78, 0.06)',
    flex: '0 0 37%',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    background: '#fff',
  };

  return (
    <>
      <Card styles={parentCardStyle}>
        <Card styles={userSummaryStyle}>
          <Card styles={singleSummaryStyle}></Card>
          <Card styles={singleSummaryStyle}></Card>
        </Card>
        <Card styles={userSummaryStyle}>
          <Card styles={singleSummaryStyle}></Card>
          <Card styles={singleSummaryStyle}></Card>
        </Card>
      </Card>
      <Card styles={parentCardStyle}>
        <Card styles={userSummaryStyle}>
          <Card styles={singleSummaryStyle}></Card>
          <Card styles={singleSummaryStyle}></Card>
        </Card>
        <Card styles={userSummaryStyle}>
          <Card styles={singleSummaryStyle}></Card>
          <Card styles={singleSummaryStyle}></Card>
        </Card>
      </Card>
      <Card styles={parentCardStyle}>
        <Card styles={userSummaryStyle}>
          <Card styles={singleSummaryStyle}></Card>
          <Card styles={singleSummaryStyle}></Card>
        </Card>
        <Card styles={userSummaryStyle}>
          <Card styles={singleSummaryStyle}></Card>
          <Card styles={singleSummaryStyle}></Card>
        </Card>
      </Card>
    </>
  );
}

export default AnalyticsSummary;
