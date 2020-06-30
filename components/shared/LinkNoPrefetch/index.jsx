import Link from 'next/link';

const LinkNoPrefetch = ({ children, ...props }) => {
  return (
    <Link prefetch={false} {...props}>
      {children}
    </Link>
  );
};

export default LinkNoPrefetch;
