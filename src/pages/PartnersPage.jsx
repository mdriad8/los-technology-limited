import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

const partners = [
  {
    id: 1,
    name: "Global Finance Group",
    logo: "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "Strategic partnership delivering advanced payment solutions to corporate clients across North America and Europe.",
  },
  {
    id: 2,
    name: "Tech Innovations Inc.",
    logo: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "Collaborative technology development focusing on AI-powered financial analytics and predictive modeling.",
  },
  {
    id: 3,
    name: "NextGen Banking",
    logo: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "Implementation partner for our core banking platform, serving financial institutions in emerging markets.",
  },
  {
    id: 4,
    name: "Secure Payments Alliance",
    logo: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "Industry consortium working to establish security standards and best practices in digital payments.",
  },
  {
    id: 5,
    name: "Digital Finance Academy",
    logo: "https://images.pexels.com/photos/8636626/pexels-photo-8636626.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "Educational partnership providing training and certification in financial technology implementation.",
  },
  {
    id: 6,
    name: "Retail Solutions Network",
    logo: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1600",
    description:
      "Distribution partner for our SmartPOS hardware solutions across retail and hospitality sectors.",
  },
];

const PartnersPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-muted">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="heading-1 mb-6">Our Partners & Affiliations</h1>
            <p className="paragraph text-xl">
              Strategic collaborations that enhance our capabilities and expand
              our reach in the global fintech ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Strategic Partners</h2>
            <p className="paragraph">
              We collaborate with leading organizations to deliver innovative
              financial technology solutions and drive industry transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-background rounded-lg overflow-hidden shadow-md border border-border flex flex-col h-full"
              >
                <div className="h-48 overflow-hidden bg-muted flex items-center justify-center p-6">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-3">{partner.name}</h3>
                  <p className="text-muted-foreground flex-grow">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Programs */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-2 mb-6">Partnership Programs</h2>
              <p className="paragraph mb-6">
                LOS Technology offers several structured partnership programs
                designed to create mutual value and drive innovation in
                financial technology. Our collaborative approach ensures that
                each partnership is tailored to leverage the unique strengths of
                both organizations.
              </p>
              <div className="space-y-4">
                {[
                  "Technology Integration Partners",
                  "Solution Implementation Partners",
                  "Channel Distribution Partners",
                  "Research & Innovation Partners",
                ].map((title, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-primary/10 rounded-full p-1 mt-0.5">
                      <Check className="text-primary" size={18} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{title}</h3>
                      <p className="text-muted-foreground">
                        {title === "Technology Integration Partners" &&
                          "For software and hardware providers looking to integrate with our platforms."}
                        {title === "Solution Implementation Partners" &&
                          "For consulting and implementation firms specializing in fintech deployment."}
                        {title === "Channel Distribution Partners" &&
                          "For organizations with established client networks in financial services."}
                        {title === "Research & Innovation Partners" &&
                          "For academic and research institutions advancing fintech capabilities."}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <a href="/contact" className="button-primary">
                  Explore Partnership Opportunities
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Partnership Meeting"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Affiliations */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-2 mb-4">Industry Affiliations</h2>
            <p className="paragraph">
              LOS Technology actively participates in industry associations and
              standards bodies to contribute to the advancement of financial
              technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Global Fintech Association",
                img: "https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1600",
                desc: "Active member contributing to policy development and industry standards for financial technology.",
              },
              {
                title: "Payment Security Council",
                img: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1600",
                desc: "Founding member focused on establishing security standards for digital payment technologies.",
              },
              {
                title: "Blockchain Consortium",
                img: "https://images.pexels.com/photos/8636626/pexels-photo-8636626.jpeg?auto=compress&cs=tinysrgb&w=1600",
                desc: "Technical committee member working on interoperability standards for distributed ledger technologies.",
              },
            ].map((aff, i) => (
              <div
                key={i}
                className="bg-background p-8 rounded-lg shadow-md border border-border text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img
                    src={aff.img}
                    alt={aff.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{aff.title}</h3>
                <p className="text-muted-foreground">{aff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Become a Partner
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Join our partner ecosystem to unlock new opportunities, expand
              your capabilities, and deliver innovative financial technology
              solutions to your clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary hover:bg-white/90 font-medium px-6 py-3 rounded-md transition-all inline-flex items-center justify-center gap-2"
              >
                Apply for Partnership
                <ArrowRight size={18} />
              </a>
              <a
                href="/contact"
                className="border border-white text-white hover:bg-white/10 font-medium px-6 py-3 rounded-md transition-all inline-flex items-center justify-center gap-2"
              >
                Request Partnership Information
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnersPage;
