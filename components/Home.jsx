import Banner from "./Home/Banner";
import FeaturedCars from "./Home/FeaturedCars";


export default async function Home() {

  return (
    <div className="flex flex-col pt-20">

      <Banner></Banner>
      <FeaturedCars></FeaturedCars>

    </div>
  );
}