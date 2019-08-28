import React from 'react';

function PageHead(props) {
  return (
    <nav className="admin-main-title">
      <p>{props.title}</p>
    </nav>
  );
}

export default PageHead;
