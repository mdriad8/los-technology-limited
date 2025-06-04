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
      "EMV Contact and Contactless cards supporting global payment networks like VISA, MasterCard, American Express, JCB, and China UnionPay.",
    image:
      "https://images.pexels.com/photos/8919570/pexels-photo-8919570.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/products/smart-banking-card",
  },
  {
    id: 2,
    title: "Digital Wallet Solutions",
    description:
      "Secure cloud-based digital wallets for contactless payments, loyalty programs, and P2P transfers across mobile platforms.",
    image:
      "https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/products/digital-wallet",
  },
  {
    id: 3,
    title: "Smart ID Card Solutions",
    description:
      "Multifunctional smart ID cards for national, health, pension, and financial identification with biometric integration.",
    image:
      "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/products/smart-id-card",
  },
  {
    id: 4,
    title: "Core Banking Solutions",
    description:
      "Enterprise-grade banking software enabling digital-first operations, transaction management, and compliance automation.",
    image:
      "https://images.pexels.com/photos/8085856/pexels-photo-8085856.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/products/core-banking",
  },
  {
    id: 5,
    title: "Digital Onboarding & eKYC",
    description:
      "AI-driven customer onboarding system with real-time document scanning, facial verification, and risk analysis.",
    image:
      "https://images.pexels.com/photos/7567464/pexels-photo-7567464.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/products/digital-onboarding",
  },
  {
    id: 6,
    title: "Secure POS Terminals",
    description:
      "Advanced Point-of-Sale devices with multi-payment support, inventory sync, and secure biometric customer verification.",
    image:
      "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/products/secure-pos",
  },
  {
    id: 7,
    title: "Financial Analytics Suite",
    description:
      "Real-time dashboards for banks and fintechs to monitor transactions, customer trends, fraud detection, and KPI tracking.",
    image:
      "https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/products/financial-analytics",
  },
  {
    id: 8,
    title: "Mobile Banking Framework",
    description:
      "A white-label mobile app toolkit offering funds transfer, loan applications, bill pay, and chatbot support.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/products/mobile-banking",
  },
  {
    id: 9,
    title: "Biometric Access Devices",
    description:
      "Hardware and software solution enabling secure access through fingerprint, facial recognition, or voice verification.",
    image:
      "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/products/biometric-access",
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
