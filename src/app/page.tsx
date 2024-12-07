import HomePage from "../app/Home/page";
import Categories from "./Categories/page";
import Category from "./category/page";
import Featured from "./Featured/page";
import Products from "./Products/page";
import Sale from "./Sale/page";
import Selling from "./Selling/page";
import Offer from "./Three/page";
export default function Home() {
  return (
   <>
   <HomePage/>
   <Sale/>
   <Categories/>
   <Selling/>
   <Category/>
   <Products/>
   <Featured/>
   <Offer/>
   </>
  );
}
