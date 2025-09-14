import React from "react";
import heroImage from "../../assets/grocery.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className="max-w-7xl  mx-auto mt-28">
      <section className="flex items-center justify-between lg:flex-row flex-col">
        <div className="flex-1 flex-col gap-4 justify-between">
          <div className="mb-3">
            <p
              className="text-lg py-2 px-5
                  text-orange-500  bg-orange-200 inline rounded-full text-center "
            >
              Export Best Quality...
            </p>
          </div>
          <p
            className="lg:text-6xl text-5xl font-bold leading-[1.1] lg:mb-3 mb-2
"
          >
            Tasty Organic <br /> <span className="text-orange-500">Fruits</span>{" "}
            & <span className="text-orange-500">Veggies</span> <br /> In Your
            City
          </p>
          <p className="text-gray-500 mb-3">
            Bred for a high content of beneficial substances. Our products are{" "}
            <br /> all fresh and healthy.
          </p>
          <Button btnContant='Shop Now'></Button>
        </div>

        <div className="flex-1 items-center justify-center">
          <img src={heroImage} alt="" />
        </div>
      </section>
    </section>
  );
};

export default Hero;
