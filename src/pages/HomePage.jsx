import React from "react";
import { motion } from "framer-motion";
import HeroSlider from "../components/home/HeroSlider";
import LatestProducts from "../components/home/LatestProducts";
import { Link } from "react-router-dom";
import { ArrowRight, Award, TrendingUp, Zap, Users } from "lucide-react";

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

const HomePage = () => {
  return (
    <>
      <HeroSlider />

      {/* Product Showcase */}
      <LatestProducts />

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="heading-2 mb-4"
            >
              Transforming Finance with Technology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="paragraph"
            >
              LOS Technology Limited is a leading fintech company delivering
              innovative solutions that drive digital transformation in the
              financial sector.
            </motion.p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Feature 1 */}
            <motion.div
              variants={item}
              className="bg-background p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-muted-foreground">
                Our team of industry veterans brings decades of experience in
                finance and technology.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              variants={item}
              className="bg-background p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Innovative Solutions</h3>
              <p className="text-muted-foreground">
                Cutting-edge technologies that keep our clients ahead in a
                rapidly evolving market.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              variants={item}
              className="bg-background p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Implementation</h3>
              <p className="text-muted-foreground">
                Rapid deployment and integration for minimal disruption to your
                business operations.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              variants={item}
              className="bg-background p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Partners</h3>
              <p className="text-muted-foreground">
                Strategic partnerships with leading financial institutions and
                technology providers.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Link to="/about" className="button-primary">
              Learn More About Us
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16 flex items-center">
                <div className="text-white">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-3xl md:text-4xl font-bold mb-4"
                  >
                    Ready to transform your financial operations?
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-white/90 text-lg mb-6"
                  >
                    Schedule a consultation with our experts to discover how our
                    solutions can benefit your business.
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <Link
                      to="#footer-contact"
                      className="bg-white text-primary hover:bg-white/90 font-medium px-6 py-3 rounded-md transition-all inline-flex items-center gap-2"
                    >
                      Contact Us
                      <ArrowRight size={18} />
                    </Link>
                  </motion.div>
                </div>
              </div>
              <div className="hidden lg:block relative h-full min-h-[400px]">
                <motion.img
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Financial Consultation"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
