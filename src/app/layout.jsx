import React from 'react';
import NextLayout from './container/layout'
const Layout = (Children) => {
  return (
    <div>
      <NextLayout>{Children}</NextLayout>
    </div>
  );
}

export default Layout;
