import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const BasicLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default BasicLayout;
