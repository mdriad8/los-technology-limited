import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "../../utils/cn";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOfferingsOpen, setIsOfferingsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsOfferingsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleOfferings = () => setIsOfferingsOpen(!isOfferingsOpen);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Offerings",
      path: "/offerings",
      hasSubmenu: true,
      submenu: [
        { name: "Software Products", path: "/offerings?category=software" },
        { name: "Hardware Products", path: "/offerings?category=hardware" },
      ],
    },
    { name: "Investments", path: "/investments" },
    { name: "Partners", path: "/partners" },
  ];

  const isActive = (path) => {
    if (path === "/") return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-primary font-bold text-2xl">
            LOS Technology Limited
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.hasSubmenu ? (
                <button
                  onClick={() =>
                    item.path === "/offerings" && toggleOfferings()
                  }
                  className={cn(
                    "flex items-center gap-1 text-base font-medium transition-colors",
                    isActive(item.path)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  )}
                >
                  {item.name}
                  <ChevronDown size={16} />
                </button>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    "text-base font-medium transition-colors",
                    isActive(item.path)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  )}
                >
                  {item.name}
                </Link>
              )}

              {item.hasSubmenu && (
                <div className="absolute left-0 top-full hidden group-hover:block min-w-[200px] bg-white rounded-md shadow-lg p-2 animate-fade-in">
                  {item.submenu?.map((subitem) => (
                    <Link
                      key={subitem.name}
                      to={subitem.path}
                      className="block px-4 py-2 text-sm rounded-md hover:bg-muted transition-colors"
                    >
                      {subitem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/contact" className="button-primary">
            Contact Us
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[60px] bg-white z-40 animate-fade-in">
          <nav className="container flex flex-col py-8 gap-4">
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col">
                {item.hasSubmenu ? (
                  <>
                    <button
                      onClick={() =>
                        item.path === "/offerings" && toggleOfferings()
                      }
                      className={cn(
                        "flex items-center justify-between py-2 text-lg font-medium",
                        isActive(item.path) ? "text-primary" : "text-foreground"
                      )}
                    >
                      {item.name}
                      <ChevronDown
                        size={20}
                        className={cn(
                          "transition-transform",
                          isOfferingsOpen && "rotate-180"
                        )}
                      />
                    </button>
                    {isOfferingsOpen && (
                      <div className="ml-4 border-l-2 border-muted pl-4 space-y-2 py-2">
                        {item.submenu?.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.path}
                            className="block py-2 text-foreground/80 hover:text-primary"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={cn(
                      "py-2 text-lg font-medium",
                      isActive(item.path) ? "text-primary" : "text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/contact" className="button-primary mt-4 self-start">
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
