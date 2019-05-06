import React from 'react';

const Footer = props => {
  return (
    <div style={{margin: '0 auto', textAlign: 'center', padding: '6rem 0 3rem'}}>
      ShirtMate &copy;{new Date().getFullYear()}
    </div>
  );
};

export default Footer;