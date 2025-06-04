import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  ArrowRight,
  BarChart4,
  PencilRuler,
  Server,
  Shield,
  Smartphone,
  Wallet,
} from "lucide-react";

const offerings = [
  {
    id: 1,
    title: "SecurePay Gateway",
    description:
      "A comprehensive payment processing solution with advanced fraud detection capabilities, multi-currency support, and seamless integration options. Designed for businesses of all sizes, from small retailers to enterprise corporations.",
    image:
      "https://images.pexels.com/photos/8919570/pexels-photo-8919570.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaLink: "/contact",
    category: "software",
  },
  {
    id: 2,
    title: "BankingOS Platform",
    description:
      "Core banking infrastructure that enables financial institutions to modernize their systems with cloud-native architecture, modular components, and API-first design. Supports full banking operations with reduced complexity.",
    image:
      "https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaLink: "/contact",
    category: "software",
  },
  {
    id: 3,
    title: "FinancialAI Analytics",
    description:
      "Machine learning platform specifically designed for financial data analysis, offering predictive analytics, risk assessment, customer behavior insights, and automated reporting with customizable dashboards.",
    image:
      "https://images.pexels.com/photos/7567464/pexels-photo-7567464.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaLink: "/contact",
    category: "software",
  },
  {
    id: 4,
    title: "Digital Wallet System",
    description:
      "White-label digital wallet platform that financial institutions and businesses can customize and deploy with their own branding. Features include secure payments, loyalty programs, and user management.",
    image:
      "https://images.pexels.com/photos/8085856/pexels-photo-8085856.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaLink: "/contact",
    category: "software",
  },
  {
    id: 5,
    title: "SmartPOS Terminal",
    description:
      "Next-generation point-of-sale hardware solution with integrated software, enabling seamless transactions, inventory management, and customer relationship tools in a sleek, user-friendly device.",
    image:
      "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaLink: "/contact",
    category: "hardware",
  },
  {
    id: 6,
    title: "Biometric Authentication Device",
    description:
      "Advanced hardware solution for secure identity verification using multiple biometric factors including fingerprint, facial recognition, and voice authentication for high-security financial environments.",
    image:
      "https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaLink: "/contact",
    category: "hardware",
  },
  {
    id: 7,
    title: "Secure Banking Kiosk",
    description:
      "Self-service banking kiosk with full transaction capabilities, account management, and customer service features. Designed for branch transformation and expanding service footprint without staffing increases.",
    image:
      "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaLink: "/contact",
    category: "hardware",
  },
  {
    id: 8,
    title: "Mobile Banking Suite",
    description:
      "Comprehensive mobile banking application framework that can be customized and deployed quickly, offering full banking functionality, personal finance management, and integrated support channels.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaLink: "/contact",
    category: "software",
  },
];

const OfferingsPage = () => {
  const [category, setCategory] = useState(null);
  const [filteredOfferings, setFilteredOfferings] = useState(offerings);

  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryParam = params.get("category");
    setCategory(categoryParam);

    if (categoryParam) {
      setFilteredOfferings(
        offerings.filter((offering) => offering.category === categoryParam)
      );
    } else {
      setFilteredOfferings(offerings);
    }
  }, [location.search]);

  const renderIcon = (title) => {
    switch (true) {
      case title.includes("Pay") || title.includes("POS"):
        return <Wallet className="text-primary" size={24} />;
      case title.includes("Banking"):
        return <Server className="text-primary" size={24} />;
      case title.includes("AI") || title.includes("Analytics"):
        return <BarChart4 className="text-primary" size={24} />;
      case title.includes("Mobile"):
        return <Smartphone className="text-primary" size={24} />;
      case title.includes("Biometric") || title.includes("Secure"):
        return <Shield className="text-primary" size={24} />;
      default:
        return <PencilRuler className="text-primary" size={24} />;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-muted">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Our Offerings</h1>
            <p className="paragraph text-xl">
              Discover our comprehensive range of fintech solutions designed to
              transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                setCategory(null);
                setFilteredOfferings(offerings);
                window.history.pushState({}, "", "/offerings");
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                category === null
                  ? "bg-primary text-white"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              All Offerings
            </button>
            <button
              onClick={() => {
                setCategory("software");
                setFilteredOfferings(
                  offerings.filter(
                    (offering) => offering.category === "software"
                  )
                );
                window.history.pushState(
                  {},
                  "",
                  "/offerings?category=software"
                );
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                category === "software"
                  ? "bg-primary text-white"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              Software Products
            </button>
            <button
              onClick={() => {
                setCategory("hardware");
                setFilteredOfferings(
                  offerings.filter(
                    (offering) => offering.category === "hardware"
                  )
                );
                window.history.pushState(
                  {},
                  "",
                  "/offerings?category=hardware"
                );
              }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                category === "hardware"
                  ? "bg-primary text-white"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              Hardware Products
            </button>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOfferings.map((offering) => (
              <div
                key={offering.id}
                className="bg-background rounded-lg overflow-hidden shadow-md border border-border flex flex-col h-full transition-all hover:shadow-lg"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    {renderIcon(offering.title)}
                    <span className="text-xs font-medium uppercase tracking-wider text-primary">
                      {offering.category === "software"
                        ? "Software"
                        : "Hardware"}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{offering.title}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    {offering.description}
                  </p>
                  <a
                    href={offering.ctaLink}
                    className="button-outline self-start"
                  >
                    Request Details
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredOfferings.length === 0 && (
            <div className="text-center py-16">
              <p className="paragraph text-lg">
                No offerings found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Integration & Customization */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-6">Custom Solutions & Integration</h2>
              <p className="paragraph mb-4">
                Beyond our standard offerings, LOS Technology specializes in
                developing custom fintech solutions tailored to your specific
                business requirements. Our team of experts works closely with
                you to understand your unique challenges and create innovative
                technology solutions that address them effectively.
              </p>
              <p className="paragraph mb-4">
                We also provide comprehensive integration services to ensure our
                products work seamlessly with your existing systems and
                workflows. Our API-first approach and flexible architecture make
                integration straightforward and efficient.
              </p>
              <a href="/contact" className="button-primary inline-flex mt-4">
                Discuss Your Requirements
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Custom Solution Development"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferingsPage;
