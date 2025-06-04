import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const heroSlides = [
  {
    id: 1,
    title: "Next Generation Fintech Solutions",
    description:
      "Accelerate your financial transformation with our innovative technology platforms",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaText: "Explore Solutions",
    ctaLink: "/offerings",
  },
  {
    id: 2,
    title: "Secure Payment Processing",
    description:
      "Enterprise-grade payment infrastructure with advanced security features",
    image:
      "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaText: "Learn More",
    ctaLink: "/offerings?category=software",
  },
  {
    id: 3,
    title: "Blockchain Technologies",
    description:
      "Leveraging distributed ledger technology for transparent and secure transactions",
    image:
      "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaText: "Discover Blockchain",
    ctaLink: "/offerings?category=software",
  },
  {
    id: 4,
    title: "Smart Banking Solutions",
    description:
      "Revolutionizing banking with AI-powered analytics and personalized experiences",
    image:
      "https://images.pexels.com/photos/7873611/pexels-photo-7873611.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaText: "View Banking Products",
    ctaLink: "/offerings?category=software",
  },
  {
    id: 5,
    title: "Investment Opportunities",
    description: "Partner with us to shape the future of financial technology",
    image:
      "https://images.pexels.com/photos/7876299/pexels-photo-7876299.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaText: "Invest With Us",
    ctaLink: "/investments",
  },
];

const HeroSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect="fade"
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="h-full w-full"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full">
            <div className="absolute inset-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative h-full w-full flex items-center">
              <div className="container">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="max-w-3xl"
                >
                  <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="heading-1 text-white mb-6"
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-white/90 mb-8"
                  >
                    {slide.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <Link to={slide.ctaLink} className="button-primary">
                      {slide.ctaText}
                      <ArrowRight size={18} />
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-10 left-0 right-0 z-20 container">
        <div className="flex items-center space-x-3">
          {heroSlides.map((_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: activeIndex === index ? 1 : 0.8,
                opacity: 1,
                width: activeIndex === index ? "2.5rem" : "1.25rem",
              }}
              transition={{ duration: 0.3 }}
              className={cn(
                "h-1 rounded-full bg-white transition-all duration-300",
                activeIndex === index ? "bg-white" : "bg-white/50"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
