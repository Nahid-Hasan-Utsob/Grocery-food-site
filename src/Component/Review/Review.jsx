import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Header from "../Header/Header";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Customer1 from "../../assets/customer1.jpg";
import Customer2 from "../../assets/customer2.jpg";
import Customer3 from "../../assets/customer3.jpg";
import Customer4 from "../../assets/customer4.jpg";
import Customer5 from "../../assets/customer5.jpg";
import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <section className="max-w-[1400px] mx-auto">
      <div className="mt-20">
        <Header HFText="Customers" HBText="Saying"></Header>
      </div>

      <div className="flex justify-end py-5 gap-x-3">
        <button className="text-2xl text-zinc-800 rounded-lg w-11 h-11 flex bg-gradient-to-b hover:from-orange-500 hover:text-white cursor-pointer custom-next">
          <IoIosArrowBack></IoIosArrowBack>
        </button>
        <button className="text-2xl text-zinc-800 rounded-lg w-11 h-11 flex bg-gradient-to-b hover:from-orange-500 hover:text-white cursor-pointer custom-prev">
          <IoIosArrowForward></IoIosArrowForward>
        </button>
      </div>

      <Swiper
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 20 },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {review.map((item) => {
          return (
            <SwiperSlide className="p-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full  bg-red-400 outline-2 outline-offset-4 overflow-hidden">
                  <img src={item.image} alt="" />
                </div>
                <div>
                  <h5 className="text-xl font-bold">{item.name}</h5>
                  <p className="text-zinc-600">{item.profession}</p>
                  <span className="flex gap-1 text-yellow-500 text-xl ">
                    {Array.from({ length: item.rating }, (_, index) => (
                        <FaStar></FaStar>
                    ))}
                  </span>
                </div>
              </div>
              <div className="mt-10 min-h-[15vh]">
                <p className="text-zinc-600">{item.para}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Review;

const review = [
  {
    id: 1,
    name: "Emily Johnson",
    profession: "Food Blogger",
    rating: 5,
    image: Customer1,
    para: "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh, and the delivery is super fast. I love the user-friendly interface and variety of organic options!",
  },
  {
    id: 2,
    name: "David Smith",
    profession: "Chef",
    rating: 3,
    image: Customer2,
    para: "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables, herbs, and pantry staples. Highly recommended!",
  },
  {
    id: 3,
    name: "Alya Zahra",
    profession: "Model",
    rating: 4,
    image: Customer3,
    para: " Shopping online with FreshBasket has saved me so much time. I trust them for my familys weekly groceries—always fresh, affordable, and reliable.",
  },
  {
    id: 4,
    name: "Carlos Mendes",
    profession: "Fitness Coach",
    rating: 3,
    image: Customer4,
    para: "I appreciate the selection of healthy foods and clean-label products. FreshBasket has been a great partner in my wellness journey!",
  },
  {
    id: 5,
    name: "Natcha Phongchai",
    profession: "Nutritionist",
    rating: 2,
    image: Customer5,
    para: "FreshBasket offers high-quality groceries at reasonable prices. Their organic section is impressive, and their customer service is top-notch.",
  },
];
