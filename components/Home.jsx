import Banner from "@/components/Home/Banner";
import FeaturedCars from "@/components/Home/FeaturedCars";
import Make from "@/components/Home/Make";


export default async function Home() {

  return (
    <div className="flex flex-col pt-20">

      <Banner></Banner>
      <FeaturedCars></FeaturedCars>
      <Make></Make>

    </div>
  );
}