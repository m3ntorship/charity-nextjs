// import Header from "../Header";
import { Footer } from "../Footer";

const Layout = ({ children, footerData }) => {
  return (
    <>
      {/* <Header /> */}
      {children}
      <Footer data={footerData} />
    </>
  );
};

export default Layout;
