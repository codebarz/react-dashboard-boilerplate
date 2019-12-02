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
    padding: '10px',
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
        <p class="admin-main-card-label">Site Summary</p>
        <Card styles={userSummaryStyle}>
          <Card styles={singleSummaryStyle}>
            <img
              className="summaryCardImg"
              src="/assets/images/group.svg"
              alt="Users"
            ></img>
            <p className="adminSummaryTitle">Users</p>
            <p className="adminSummaryCount">2k users in total</p>
          </Card>
          <Card styles={singleSummaryStyle}>
            <img
              className="summaryCardImg"
              src="/assets/images/leaves.svg"
              alt="Vendors"
            ></img>
            <p className="adminSummaryTitle">Affiliates</p>
            <p className="adminSummaryCount">2M affiliates</p>
          </Card>
        </Card>
        <Card styles={userSummaryStyle}>
          <Card styles={singleSummaryStyle}>
            <img
              className="summaryCardImg"
              src="/assets/images/greentrees.svg"
              alt="Buyers"
            ></img>
            <p className="adminSummaryTitle">Trees</p>
            <p className="adminSummaryCount">3.5M tress available</p>
          </Card>
          <Card styles={singleSummaryStyle}>
            <img
              className="summaryCardImg"
              src="/assets/images/shopping-bag.svg"
              alt="Orders"
            ></img>
            <p className="adminSummaryTitle">Orders</p>
            <p className="adminSummaryCount">1k orders in total</p>
          </Card>
        </Card>
      </Card>
      <Card styles={parentCardStyle}>
        <p class="admin-main-card-label">Growth Chart</p>
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
        <p class="admin-main-card-label">Recent Activities</p>
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
