import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Contain } from "./BasicLayout.styled";

const BasicLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Contain>{children}</Contain>
      <Footer />
    </>
  );
};

export default BasicLayout;
