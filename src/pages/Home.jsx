import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import Banner from "../layouts/Banner";
import FlashDeal from "../layouts/FlashDeal";
import Bestseller from "../layouts/Bestseller";
import MostPopular from "../layouts/MostPopular";

const Home = () => {
  return (
    <>
      <Banner />
      <FlashDeal />
      <Bestseller />
      <MostPopular/>
    </>
  );
};

export default Home;
