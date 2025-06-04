import React from "react";
import { Shield, Cpu, BarChart4, Globe } from "lucide-react";

const expertiseAreas = [
  {
    id: 1,
    title: "Financial Security",
    description:
      "Our advanced security frameworks ensure the highest level of protection for financial data and transactions, employing multi-layered encryption, fraud detection, and compliance with global security standards.",
    icon: "Shield",
  },
  {
    id: 2,
    title: "Technology Innovation",
    description:
      "We leverage cutting-edge technologies including AI, machine learning, and blockchain to create transformative financial solutions that solve complex industry challenges and open new possibilities.",
    icon: "Cpu",
  },
  {
    id: 3,
    title: "Data Analytics",
    description:
      "Our data analytics capabilities enable financial institutions to transform raw data into actionable insights, optimizing business operations, risk management, and customer engagement strategies.",
    icon: "BarChart4",
  },
  {
    id: 4,
    title: "Global Financial Systems",
    description:
      "With experience spanning multiple markets and regulatory environments, we design and implement financial systems that operate seamlessly across borders while maintaining compliance.",
    icon: "Globe",
  },
];

const renderIcon = (iconName) => {
  switch (iconName) {
    case "Shield":
      return <Shield size={24} />;
    case "Cpu":
      return <Cpu size={24} />;
    case "BarChart4":
      return <BarChart4 size={24} />;
    case "Globe":
      return <Globe size={24} />;
    default:
      return null;
  }
};

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-muted">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">About LOS Technology</h1>
            <p className="paragraph text-xl">
              Pioneering the future of financial technology with innovative
              solutions that empower businesses and transform the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-6">Our Story</h2>
              <p className="paragraph mb-4">
                Founded in 2018, LOS Technology Limited emerged from a vision to
                bridge the gap between traditional financial systems and modern
                digital capabilities. Our founders, with backgrounds in both
                finance and technology, recognized the need for innovative
                solutions that could address the evolving challenges of the
                financial industry.
              </p>
              <p className="paragraph mb-4">
                What started as a small team of passionate innovators has grown
                into a global fintech leader, partnering with financial
                institutions, businesses, and technology providers across
                multiple markets.
              </p>
              <p className="paragraph">
                Today, LOS Technology stands at the forefront of financial
                innovation, continuously developing cutting-edge solutions that
                empower our clients to thrive in an increasingly digital world.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="LOS Technology Team"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-background p-10 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Our Mission
              </h3>
              <p className="paragraph">
                To empower financial institutions and businesses with innovative
                technology solutions that enhance operational efficiency,
                improve security, and deliver exceptional customer experiences.
              </p>
            </div>
            <div className="bg-background p-10 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                Our Vision
              </h3>
              <p className="paragraph">
                To be the global leader in financial technology, driving digital
                transformation and setting new standards for innovation,
                security, and user experience in the financial industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Areas of Expertise</h2>
            <p className="paragraph">
              Our specialized knowledge and capabilities that drive innovation
              and excellence in everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertiseAreas.map((area) => (
              <div
                key={area.id}
                className="bg-background p-8 rounded-lg shadow-md border border-border"
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <div className="text-primary">{renderIcon(area.icon)}</div>
                </div>
                <h3 className="text-xl font-bold mb-3">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Our Leadership Team</h2>
            <p className="paragraph">
              Meet the experienced professionals guiding our vision and
              strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-background rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Sarah Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Sarah Johnson</h3>
                <p className="text-primary font-medium mb-3">
                  Chief Executive Officer
                </p>
                <p className="text-muted-foreground text-sm">
                  Former VP at Global Financial Systems with 15+ years of
                  experience in fintech leadership.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-background rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Michael Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Michael Chen</h3>
                <p className="text-primary font-medium mb-3">
                  Chief Technology Officer
                </p>
                <p className="text-muted-foreground text-sm">
                  Pioneering technologist with background in secure financial
                  systems and blockchain architecture.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-background rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="Olivia Martinez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">Olivia Martinez</h3>
                <p className="text-primary font-medium mb-3">
                  Chief Financial Officer
                </p>
                <p className="text-muted-foreground text-sm">
                  Strategic financial leader with expertise in global markets
                  and investment strategies.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-background rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2381160/pexels-photo-2381160.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="David Patel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">David Patel</h3>
                <p className="text-primary font-medium mb-3">
                  Chief Product Officer
                </p>
                <p className="text-muted-foreground text-sm">
                  Product visionary focused on creating intuitive and powerful
                  financial technology solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
