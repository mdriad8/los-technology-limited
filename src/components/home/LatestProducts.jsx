import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const latestProducts = [
  {
    id: 1,
    title: "Smart Banking Card",
    description:
      "EMV Contact and Contactless cards supporting VISA, MasterCard, American Express, JCB, and China UnionPay.",
    image:
      "https://images.pexels.com/photos/8919570/pexels-photo-8919570.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/products/smart-banking-card",
  },
  {
    id: 2,
    title: "Digital Wallet Solutions",
    description:
      "Secure digital storage for cards and payments with contactless capabilities and multi-device support.",
    image:
      "https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/products/digital-wallet",
  },
  {
    id: 3,
    title: "Smart ID Card Solutions",
    description:
      "IC chip-based ID cards for national ID, farmers, pension, and health identification needs.",
    image:
      "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/products/smart-id-card",
  },
  {
    id: 4,
    title: "Core Banking Solutions",
    description:
      "Comprehensive platform for managing financial operations, transactions, and digital banking.",
    image:
      "https://images.pexels.com/photos/8085856/pexels-photo-8085856.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/products/core-banking",
  },
  {
    id: 5,
    title: "Digital Onboarding & eKYC",
    description:
      "Streamlined customer registration with integrated identity verification and biometric recognition.",
    image:
      "https://images.pexels.com/photos/7567464/pexels-photo-7567464.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/products/digital-onboarding",
  },
];

const LatestProducts = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10"
        >
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="heading-2 mb-2"
            >
              Latest Solutions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="paragraph"
            >
              Discover our innovative fintech solutions
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center space-x-3 mt-4 md:mt-0"
          >
            <button
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="p-2 rounded-full border border-muted-foreground/30 hover:border-primary/70 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="p-2 rounded-full border border-muted-foreground/30 hover:border-primary/70 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        </motion.div>

        <Swiper
          ref={swiperRef}
          spaceBetween={24}
          slidesPerView={1}
          modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          {latestProducts.map((product) => (
            <SwiperSlide key={product.id} className="h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-background rounded-lg overflow-hidden shadow-md h-full flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {product.description}
                  </p>
                  <Link
                    to={product.link}
                    className="text-primary font-medium flex items-center group"
                  >
                    Learn More
                    <ArrowRight
                      size={16}
                      className="ml-1 transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <Link to="/products" className="button-outline">
            View All Solutions
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestProducts;
