import { Helmet } from "react-helmet";
import { Award, Building2, Factory, Globe2 } from "lucide-react";
import { AboutOverview } from "../sections/About/AboutOverview";
import type { Stat } from "../lib/types";

const aboutStats: Stat[] = [
  { label: "Global facilities", value: "12", icon: <Factory size={18} /> },
  { label: "Industry partners", value: "320+", icon: <Globe2 size={18} /> },
  { label: "Years innovating", value: "27", icon: <Building2 size={18} /> },
  { label: "Active patents", value: "150+", icon: <Award size={18} /> },
];

const timeline = [
  {
    year: "1997",
    title: "Squirrel founded",
    description:
      "Established with a mission to build industrial equipment that delivers aerospace-level precision.",
  },
  {
    year: "2008",
    title: "First modular robotic cell",
    description:
      "Introduced the JET platform, enabling configurable assembly lines that reduce commissioning by 40%.",
  },
  {
    year: "2016",
    title: "Global service network",
    description:
      "Expanded to 45 countries with certified service centers and remote diagnostic coverage.",
  },
  {
    year: "2023",
    title: "Launch of PathOS Edge",
    description:
      "Unified analytics platform powering predictive maintenance across Squirrel fleets worldwide.",
  },
];

const mission = {
  title: "Engineering the future of resilient manufacturing",
  description:
    "We design automation ecosystems that unlock measurable gains in safety, sustainability, and speed for advanced manufacturers.",
  pillars: [
    {
      title: "Innovation at speed",
      description:
        "Cross-functional R&D teams ship validated product improvements every quarter, informed by customer telemetry.",
    },
    {
      title: "Partnership mindset",
      description:
        "From discovery to lifecycle service, we collaborate with your teams to meet ambitious production targets.",
    },
    {
      title: "Sustainable footprint",
      description:
        "Energy-optimized systems and refurbishment programs extend asset life while lowering operating emissions.",
    },
  ],
};

const team = [
  {
    name: "John D. Erickson",
    role: "Chief Executive Officer",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKerT4Qkh58jEdWj_qh-YdAvGkN0-lWvk46H_LIhNa36HvjETclW2DrqSuNNeOmYz933T0iXa0YF0FqklGnlaAiDfsvJAl4ONR1uSISlAoPtKzSMo_CFogMNDLKvKX32ONQUvIFCVKaoT4jSOXbnHHrpeKWfZzrS_RrC4WBqKsRDEHra79zZ5IpiDNHwRql2MVYHCkOgas3xdpfpkB2QWdqZX_ruE4GDvowpbsASoZwCBQuFjtGsKq_TbCHzCD7CtDIJNu-OFQxw",
  },
  {
    name: "Maria Sanchez",
    role: "Chief Technology Officer",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA350ojr2FBDbknZDHT5BYI59I1oROPd_fUADwFtQT_pAbS6ZpgG8MUgTBv9Z6w1XMd_PYvJF29xUU8gZLFzUp-UxRNmsIdZUMBHlW0FrJWTiZW2dxXPqBoNO9mh8A3IpdvkbHkWD9vHf33NTkvNtEWWa1MM-ri2aUvOVdCUcWmnlMB-Ctl4vKsqoOFafmN1PxvfR98eqHsY1RiNZqPcMDR2WNWn7394aXm2emJWEGODJGSng1VftHnTeskZSSEYlRM_isHeQoZjA",
  },
  {
    name: "David Chen",
    role: "Head of Operations",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCOhe5pFOKp5CN0AbnAb-EcxMQ-ZVR3ED2rWHaAJb27bps2bxdhPCBtdMg69NQ0IvRahGZWiUR47HSBnqwc0q96fDDWvJQ4GeoVTbG8zpGmUxkYnUCbsiafGeTd-9M-fpY2Om7W_u2at-vtqjDJoaDEIjtcL8MU4fE30NC9pooNm2J8K4sea0QAZ79hZNgVWtf8uRLQzyTrnmgyu7stvI41jgPkaWqltQbBB4qHG_xnn6MFTlPDciedm6YRyzhNhXtaVNFtEpeSTA",
  },
  {
    name: "Emily Carter",
    role: "VP of Global Sales",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQbFT0nROUOrKQ9IVm038ZT6q1BGCZPHAyYf8nK7-71Y8gxoqFgEctO9HpLayAtecNkB-v267vAQ--715AsO2TimAUSA_Ky-bByLWBZJ0kE090gRtVJzgVfJ7Dq9BFpN_8mwFGkckmluyL7V3AMgzxpoQ5KU6Lbtp9ULP42QDfbcP8s-jY2crlCGFN7HMf6sG12tihGlJxqIZev0WT8LmvNdqFVrzMk_QkWNpM2oasqbtivoajnIPa9oxfehiAOQdRL8PHBDAFVw",
  },
];

export const About = () => {
  return (
    <>
      <Helmet>
        <title>About Squirrel Industrial</title>
        <meta
          name="description"
          content="Learn how Squirrel builds resilient industrial automation for the world’s most demanding manufacturers."
        />
      </Helmet>
      <AboutOverview
        hero={{
          title: "Engineering the future of industry",
          subtitle:
            "From precision robotics to predictive analytics, Squirrel builds resilient manufacturing ecosystems.",
          image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB4E3afLNi2thS_Q9UIHWTdjwO62nImx7h6DhaYk3s_2LG7I6o_w88GepbgyNbqclq4I_cohj1JEXAkSZKa9AuzGFNkqy2lUuGHrJ29CMS7mGzQjR8UfbXbD-2OfuErRvWef-SbpUmo7dAKCI_AZuQXpPk6jBzSshCo406Qxyla0AJPjzEQzWfMs0Y8k6X5bPzQI-FEJ8XqIqNqPMOLXBvhCsXwt8FsN5akcY1cVbD2WvaQj9MBLXalJL71Tx69HRx3qnEpueEdYw",
        }}
        mission={mission}
        stats={aboutStats}
        timeline={timeline}
        team={team}
        cta={{
          title: "Join the team shaping resilient manufacturing",
          description:
            "We’re hiring across engineering, field service, and product. Bring your curiosity and build solutions that matter.",
          primaryCta: { label: "View open roles", href: "#" },
          secondaryCta: { label: "Partner with us", href: "/contact" },
        }}
      />
    </>
  );
};

About.displayName = "AboutPage";
