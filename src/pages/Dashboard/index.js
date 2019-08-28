import React from 'react';

function Dashboard() {
  const handleNavToggle = () => {};
  return (
    <div id="admin-dash-content">
      <nav id="admin-side-nav">
        <div className="admin-side-nav-header">
          <div className="admin-nav-logo">
            Boiler <span>|>late</span>
          </div>
          <i className="mdi mdi-menu-open" onClick={handleNavToggle} />
        </div>
        <div className="admin-side-nav-menu">
          <ul className="admin-nav-menu-item">
            <li>
              <i className="mdi mdi-view-dashboard" />
              <span>Dashboard</span>
            </li>
            <li>
              <i className="mdi mdi-account-group" />
              <span>Manage Users</span>
            </li>
            <li>
              <i className="mdi mdi-chart-timeline-variant" />
              <span>Analytics</span>
            </li>
            <li>
              <i className="mdi mdi-wrench" />
              <span>Settings</span>
            </li>
          </ul>
        </div>
      </nav>
      <main id="admin-main-page">
        <header className="admin-nav-header" />
        <nav className="admin-main-title">
          <p>Dashboard</p>
        </nav>
      </main>
    </div>
  );
}

export default Dashboard;
