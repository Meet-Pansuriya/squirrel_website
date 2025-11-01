import { Helmet } from "react-helmet";
import { Cpu, ShieldCheck, Truck } from "lucide-react";
import { WhyOverview } from "../sections/Why/WhyOverview";

export const Why = () => {
  return (
    <>
      <Helmet>
        <title>Why Squirrel</title>
        <meta
          name="description"
          content="Discover what sets Squirrel industrial automation apart—precision, durability, and a partner-first mindset."
        />
      </Helmet>
      <WhyOverview
        hero={{
          title: "Engineered for reliability. Built to last.",
          description:
            "Industry leaders choose Squirrel for platforms that pair aerospace-grade precision with the rugged durability required on modern factory floors.",
          image: {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSorTdWRvjh7_saBczOykHs8I332IYn3_3b3g-gJlQzE_TGN3BBi4jn8ikFmGkYVa3XC3mQuThFkKBxjiTc9mpVnawTIvYu02-L7nCSJYSGjbW7Db-jEt0WoL4Ct4D0XFhb0sN-yWayEYB1VhdVN2vbT-e1MuX5uqtsGi1R35k96NgMbbj3ovurEaxUu6OptZQNe1Eb02ESodAE802CrelJZBfCKSBV8irGRFbqSMs1AA_fJa6RBi8XH4EaBsWBSyQ0YHFu6EW7A",
            alt: "Abstract industrial machine in motion.",
          },
          cta: { label: "Explore our products", href: "/products" },
        }}
        differentiators={{
          title: "Our core differentiators",
          description:
            "We blend high-tolerance engineering, adaptive control, and service-first partnerships to deliver dependable industrial automation.",
          features: [
            {
              icon: <ShieldCheck size={20} />,
              title: "Precision engineering",
              description: "Sub-micron repeatability with vibration dampening and smart calibration.",
            },
            {
              icon: <Cpu size={20} />,
              title: "Innovative technology",
              description: "Edge compute and AI-driven sensing keep every cycle optimized.",
            },
            {
              icon: <Truck size={20} />,
              title: "Rapid deployment",
              description: "Modular installs and standardized commissioning shrink go-live timelines.",
            },
          ],
        }}
        guarantees={[
          {
            eyebrow: "Quality assurance",
            title: "Every platform undergoes 400+ validation checks",
            description:
              "Each Squirrel system is stress-tested across temperature, vibration, and load scenarios so it arrives ready for production.",
            image: {
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC7x4Fub2DBn0EBLI1_F7R3-Ow7vKYT4OnCFlY7Y8vdkR0RmL717umaOGSxvlkKzt2TiLiyLvNNTg7o_Ezo8xYcQ98NGH_G9VloF0T0LRIsgLmVq8mystvmUAmMtdtwkO5As4PDyjOy4Mw6Y3qPIbSzYYf7-VuEPvtXOpdCOeJVicVgE1JtzIrpwaoOcQLyU_KEwjIlbfWZIe4sXxSxaedd16XrydaNmyImjZqEfE36-gdRo6yejF1ErDXFzUGkIyy9JNpQX5Ad8uo",
              alt: "Technician inspecting robotic equipment.",
            },
          },
          {
            eyebrow: "Global dealer network",
            title: "Support you can rely on anywhere",
            description:
              "Certified dealers and service centers across five continents keep parts moving and uptime high.",
            image: {
              src: "https://placeholder.pics/svg/600x400/111827-F59E0B/Network",
              alt: "World map showing Squirrel service locations.",
            },
            cta: { label: "Find a dealer", href: "/contact" },
          },
        ]}
        cta={{
          title: "Ready to elevate your operations?",
          description:
            "Connect with our specialists to design a solution tailored to your production goals.",
          button: { label: "Request a quote", href: "/contact" },
        }}
      />
    </>
  );
};

Why.displayName = "WhyPage";
