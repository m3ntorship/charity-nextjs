import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <ul className="flex w-full text-center justify-center">
            <Link href="/">
              <a>
                <li className="mr-6">Home</li>
              </a>
            </Link>
            <Link href="/about">
              <a>
                <li className="mr-6">About</li>
              </a>
            </Link>
            <Link href="/blog">
              <a>
                <li className="mr-6">Blog page</li>
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <li className="mr-6">contact</li>
              </a>
            </Link>
          </ul>
        </nav>
      </header>
      <main className="p-12 text-center">{children}</main>
      <footer className="bg-red-500 p-10">
        <h1 className="text-center ">footer content</h1>
      </footer>
    </>
  );
};

export default Layout;
