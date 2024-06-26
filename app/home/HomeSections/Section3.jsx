import Link from "next/link";
import products from "../../../data/json/product.json";
import ProductsMaker from "../../Components/ProductsMaker";

function Section3() {
  return (
    <section className="flex flex-col items-center w-full  gap-[2.5vw]">
      <div>
        <h2>
          CHOOSE YOUR <span className="text-primary">WATER</span>
        </h2>
        <p className="text-[0.833vw] text-center">Bottles We Deliver</p>
      </div>
      <ProductsMaker
        products={products}
        styles={"flex items-center justify-center w-full gap-[3vw]"}
      ></ProductsMaker>{" "}
      {/* Pass products as props */}
      <Link
        href="/shop"
        className="group relative w-[9.375vw] h-[2.604vw] flex items-center justify-center text-white rounded-full"
      >
        <p className="absolute inset-0 rounded-full -z-[1] bg-gradient-to-br from-secondary to-primary group-hover:opacity-0 transition-all ease-linear duration-[0.3s]"></p>
        <p className="transition-all ease-linear duration-[0.3s] group-hover:text-primary hover:border-primary border-transparent border-[0.0625vw] group-hover:border-[0.0625vw] w-full h-full rounded-full flex justify-center items-center">
          All Products
        </p>
      </Link>
    </section>
  );
}

export default Section3;
