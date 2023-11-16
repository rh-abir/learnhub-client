import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
import Header from "../components/shared/header/Header";
import Container from "../components/utils/Container";

const Main = () => {
  return (
    <Container>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </Container>
  );
};

export default Main;
