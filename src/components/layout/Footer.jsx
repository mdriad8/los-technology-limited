import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">LOS Technology Limited</h3>
            <p className="text-primary-foreground/80">
              Innovative fintech solutions driving the future of digital
              finance.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/offerings"
                  className="text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  Our Offerings
                </Link>
              </li>
              <li>
                <Link
                  to="/investments"
                  className="text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  Investments
                </Link>
              </li>
              <li>
                <Link
                  to="/partners"
                  className="text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/offerings?category=software"
                  className="text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  Software Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/offerings?category=hardware"
                  className="text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  Hardware Products
                </Link>
              </li>
              <li>
                <Link
                  to="/offerings"
                  className="text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  Enterprise Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/offerings"
                  className="text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  Financial Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4" id="footer-contact">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/80">
                 260/B, Tejgaon I/A, Dhaka - 1208, Bangladesh
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <a
                  href="tel:+8801713482055"
                  className="text-primary-foreground/80 hover:text-primary transition-colors"
                >
                 +880 1713-482055
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <a
                  href="mailto:info@lostechnology.com"
                  className="text-primary-foreground/80 hover:text-primary transition-colors"
                >
                  info@lostechnology.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/80 text-sm">
            &copy; {currentYear} LOS Technology Limited. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              to="/privacy-policy"
              className="text-primary-foreground/80 hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-primary-foreground/80 hover:text-primary text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
