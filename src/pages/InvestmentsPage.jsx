import React from "react";
import { ArrowRight, TrendingUp, Shield, Globe, Award } from "lucide-react";

const investmentOpportunities = [
  {
    id: 1,
    title: "Growth Equity Investment",
    description:
      "Strategic investment in LOS Technology's expansion into new markets and development of next-generation fintech products. This opportunity offers significant growth potential as we scale our operations globally.",
    image:
      "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1600",
    metrics: [
      { label: "Target Raise", value: "$25M" },
      { label: "Stage", value: "Series B" },
      { label: "Expected ROI", value: "3.5x in 5 years" },
    ],
  },
  {
    id: 2,
    title: "Product Development Fund",
    description:
      "Investment focused on accelerating our R&D pipeline and bringing innovative financial technology products to market faster. This fund supports our dedicated research teams working on breakthrough technologies.",
    image:
      "https://images.pexels.com/photos/8297507/pexels-photo-8297507.jpeg?auto=compress&cs=tinysrgb&w=1600",
    metrics: [
      { label: "Target Raise", value: "$12M" },
      { label: "Product Pipeline", value: "4 Products" },
      { label: "Market Launch", value: "Q3 2025" },
    ],
  },
  {
    id: 3,
    title: "Strategic Acquisition Fund",
    description:
      "Capital allocation for strategic acquisitions of complementary fintech startups and technology platforms to expand our product offering and technical capabilities.",
    image:
      "https://images.pexels.com/photos/5849577/pexels-photo-5849577.jpeg?auto=compress&cs=tinysrgb&w=1600",
    metrics: [
      { label: "Target Raise", value: "$40M" },
      { label: "Acquisition Targets", value: "2-3 Companies" },
      { label: "Timeline", value: "18-24 Months" },
    ],
  },
];

const InvestmentsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Investment Opportunities</h1>
            <p className="text-xl text-white/90 mb-8">
              Partner with LOS Technology to shape the future of financial
              technology and capture significant growth opportunities in this
              rapidly evolving market.
            </p>
            <a
              href="/contact"
              className="bg-white text-primary hover:bg-white/90 font-medium px-6 py-3 rounded-md transition-all inline-flex items-center gap-2"
            >
              Connect With Our Investment Team
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Why Invest With Us</h2>
            <p className="paragraph">
              LOS Technology offers compelling investment opportunities backed
              by strong fundamentals, innovative technology, and a clear vision
              for growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Market Growth</h3>
              <p className="text-muted-foreground">
                Operating in the fintech sector with projected CAGR of 23.4%
                through 2030, positioning us for sustained growth.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
              <p className="text-muted-foreground">
                Consistent year-over-year growth with successful product
                launches and strong client retention rates.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Shield className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Proprietary Technology</h3>
              <p className="text-muted-foreground">
                Portfolio of patented technologies and unique IP that create
                significant competitive advantages.
              </p>
            </div>

            <div className="bg-background p-6 rounded-lg shadow-md border border-border">
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Globe className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Global Expansion</h3>
              <p className="text-muted-foreground">
                Strategic expansion into high-growth markets across Asia, Latin
                America, and the Middle East.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Current Investment Opportunities</h2>
            <p className="paragraph">
              Explore our carefully structured investment options designed to
              deliver attractive returns while advancing financial innovation.
            </p>
          </div>

          <div className="space-y-12">
            {investmentOpportunities.map((opportunity, index) => (
              <div
                key={opportunity.id}
                className="bg-background rounded-lg overflow-hidden shadow-md border border-border"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-4 h-full">
                    <img
                      src={opportunity.image}
                      alt={opportunity.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-8 p-8">
                    <h3 className="text-2xl font-bold mb-3">
                      {opportunity.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {opportunity.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {opportunity.metrics.map((metric, i) => (
                        <div key={i} className="bg-muted p-4 rounded-lg">
                          <p className="text-sm text-muted-foreground">
                            {metric.label}
                          </p>
                          <p className="text-xl font-bold text-primary">
                            {metric.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <a href="/contact" className="button-primary">
                      Request Investment Details
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Process */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Our Investment Process</h2>
            <p className="paragraph">
              A straightforward and transparent approach to partnering with LOS
              Technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((step) => (
              <div className="relative" key={step}>
                <div className="bg-background p-6 rounded-lg shadow-md border border-border h-full">
                  <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mb-4">
                    {step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {
                      [
                        "Initial Consultation",
                        "Due Diligence",
                        "Investment Terms",
                        "Ongoing Partnership",
                      ][step - 1]
                    }
                  </h3>
                  <p className="text-muted-foreground">
                    {
                      [
                        "Meet with our investment team to discuss your interests, goals, and explore our current opportunities.",
                        "Access detailed information about our technology, business model, financials, and growth plans.",
                        "Review and finalize investment terms, structure, and expectations for partnership.",
                        "Regular updates, transparent reporting, and collaborative approach to maximizing growth and returns.",
                      ][step - 1]
                    }
                  </p>
                </div>
                {step < 4 && (
                  <div
                    className="hidden lg:block absolute top-1/2 left-full -translate-y-1/2 w-16 h-1 bg-primary/30"
                    style={{ width: "calc(100% - 3rem)" }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a href="/contact" className="button-primary">
              Start the Investment Process
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default InvestmentsPage;
