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
    title: "Switching & Card Management Solutions",
    description:
      "Robust transaction routing and management platform supporting real-time payments, fraud detection, and multi-network compatibility including VISA, MasterCard, and local switches.",
    image:
      "https://images.pexels.com/photos/8919570/pexels-photo-8919570.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaLink: "/contact",
    category: "software",
  },
  {
    id: 2,
    title: "SMART Card Solutions for ID & Banking",
    description:
      "Highly secure chip-based cards for both identity and banking, supporting EMV, contactless usage, and integration with ATMs, POS, and mobile apps.",
    image:
      "https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaLink: "/contact",
    category: "hardware",
  },
  {
    id: 3,
    title: "Digital Wallet Solutions",
    description:
      "Secure and intuitive mobile wallet for multi-channel payments, international remittances, and loyalty integrations—ideal for the digital-first generation.",
    image:
      "https://images.pexels.com/photos/8085856/pexels-photo-8085856.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaLink: "/contact",
    category: "software",
  },
  {
    id: 4,
    title: "Host Card Emulation (HCE)",
    description:
      "Enables mobile-based contactless payments using NFC and secure cloud storage. Ideal for banks seeking low-cost card alternatives and frictionless customer UX.",
    image:
      "https://images.pexels.com/photos/8297452/pexels-photo-8297452.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaLink: "/contact",
    category: "software",
  },
  {
    id: 5,
    title: "Core Banking Solution (CBS)",
    description:
      "Scalable, modular banking infrastructure supporting real-time operations, multi-channel integration, compliance (AML/KYC), and robust reporting.",
    image:
      "https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaLink: "/contact",
    category: "software",
  },
  {
    id: 6,
    title: "Digital Onboarding & eKYC",
    description:
      "Remote onboarding system with biometric and document verification powered by AI for fast, compliant customer acquisition.",
    image:
      "https://images.pexels.com/photos/4386442/pexels-photo-4386442.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaLink: "/contact",
    category: "software",
  },
  {
    id: 7,
    title: "ISO & PCI-DSS Certification Consultancy",
    description:
      "Professional services for achieving global security certifications. Includes audits, roadmap development, and compliance support for finance & government sectors.",
    image:
      "https://images.pexels.com/photos/7567464/pexels-photo-7567464.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaLink: "/contact",
    category: "software",
  },
  {
    id: 8,
    title: "ICT Consultancy & System Integration",
    description:
      "Expert planning, project management, integration, and training services for ICT transformation across financial and government institutions.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaLink: "/contact",
    category: "software",
  },
  {
    id: 9,
    title: "Smart ID & Government Payment Solutions",
    description:
      "Consulting and implementation of digital ID systems and secure government payment infrastructure, enabling inclusive and efficient public services.",
    image:
      "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ctaLink: "/contact",
    category: "hardware",
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
