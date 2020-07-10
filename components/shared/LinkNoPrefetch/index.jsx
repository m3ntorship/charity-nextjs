import React from 'react';
import Link from 'next/link';

const LinkNoPrefetch = ({ children, ...props }) => {
  return <Link {...props}>{children}</Link>;
};

export default LinkNoPrefetch;
