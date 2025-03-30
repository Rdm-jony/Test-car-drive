import Banner from "@/components/Home/Banner";
import FeaturedCars from "@/components/Home/FeaturedCars";
import Make from "@/components/Home/Make";
import Choose from "@/components/Home/Choose";
import Body from "@/components/Home/Body";


export default async function Home() {

  return (
    <div className="flex flex-col pt-20">

      <Banner></Banner>
      <FeaturedCars></FeaturedCars>
      <Make></Make>
      <Choose></Choose>
      <Body></Body>
    </div>
  );
}