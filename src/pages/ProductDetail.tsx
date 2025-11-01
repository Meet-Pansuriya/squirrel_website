import { Helmet } from "react-helmet";
import { Bolt, Gauge, Volume2, Wrench } from "lucide-react";
import { ProductHero } from "../sections/PDP/ProductHero/ProductHero";
import { SpecSummary } from "../sections/PDP/SpecSummary/SpecSummary";
import { SpecTableBlock } from "../sections/PDP/SpecTableBlock/SpecTableBlock";
import { Downloads } from "../sections/PDP/Downloads/Downloads";
import { CTA } from "../sections/PDP/CTA/CTA";
import type { SpecRow, Stat } from "../lib/types";

const specStats: Stat[] = [
  { label: "Motor Power", value: "7.5 HP", icon: <Bolt size={18} /> },
  { label: "Max Pressure", value: "175 PSI", icon: <Gauge size={18} /> },
  { label: "Tank Size", value: "80 Gal vertical", icon: <Volume2 size={18} /> },
  { label: "Maintenance", value: "Every 2,000 hrs", icon: <Wrench size={18} /> },
];

const specRows: SpecRow[] = [
  { label: "Model Number", value: "X-AC500" },
  { label: "Motor HP (Running)", value: "7.5 HP" },
  { label: "Tank Configuration", value: "80 Gallon Vertical" },
  { label: "Max Operating Pressure", value: "175 PSI" },
  { label: "CFM @ 90 PSI", value: "25.3" },
  { label: "CFM @ 175 PSI", value: "23.8" },
  { label: "Voltage / Phase", value: "230V / 3 Phase" },
  { label: "Dimensions (L x W x H)", value: '40" × 32" × 78"' },
  { label: "Weight", value: "650 lbs" },
  { label: "Noise Level", value: "68 dBA at 1m" },
  { label: "Compressor Type", value: "Two-stage cast-iron pump" },
  { label: "Warranty", value: "5 years premium coverage" },
];

const downloads = [
  {
    name: "JET X500 full specification sheet",
    description: "Dimensional drawings, electrical diagrams, and maintenance intervals.",
    size: "4.2 MB PDF",
    href: "#",
  },
  {
    name: "Installation & commissioning checklist",
    description: "Pre-flight checklist to minimize startup time on day one.",
    size: "1.1 MB PDF",
    href: "#",
  },
  {
    name: "Lifecycle service program overview",
    description: "Detailed preventive care schedule with consumable kits.",
    size: "850 kB PDF",
    href: "#",
  },
];

export const ProductDetail = () => {
  return (
    <>
      <Helmet>
        <title>JET X500 Product Detail</title>
        <meta
          name="description"
          content="Technical specifications and resources for the Squirrel JET X500 modular assembly cell."
        />
      </Helmet>
      <ProductHero
        kicker="JET Series"
        title="JET X500 Modular Assembly Cell"
        description="The JET X500 delivers dual-arm collaborative robotics with adaptive servo control, enabling rapid product changeovers without sacrificing precision."
        primaryCta={{ label: "Request a quote", href: "/contact" }}
        secondaryCta={{ label: "Download brochure", href: "#" }}
        highlights={[
          {
            title: "High-efficiency motor",
            description: "Optimized torque curve produces 15% lower energy consumption.",
            icon: <Bolt size={18} />,
          },
          {
            title: "Low-noise operation",
            description: "Acoustic dampening keeps production floor levels below 70 dBA.",
            icon: <Volume2 size={18} />,
          },
          {
            title: "Service ready",
            description: "Modular pump access enables one-person servicing in under 20 minutes.",
            icon: <Wrench size={18} />,
          },
        ]}
        media={{
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuEmxN6ZVEq3DJWl_Rpice6HHwbPZPmGZjJNke2cOZ7XIMDcnKe-ApqrzDT5H3zc85Axt6bVamIOx8hgIKTnt5K5az7I4eExV6TL4Zc7g3bJvyc5Ud25M2coxTwGHbBQRL2ja65YEuFzadYuJP7uC_YhJfwFYEyl-dD-ci3lNQtA8gIm9cvyksHSQQlMaNRDs8Y2WXRUnGv_e1kAfnkWdx9xIDspILH7Mn4DJYRrIchc6aj-P1aY8OK-RcyTpUi8F73Hd-0vI62eWdMg",
          alt: "Squirrel JET X500 compressor inside production facility.",
        }}
      />
      <SpecSummary
        eyebrow="Performance snapshot"
        title="Engineered for heavy-duty uptime"
        description="Built with a cast-iron pump, balanced flywheel, and smart control electronics to sustain peak performance in harsh industrial environments."
        stats={specStats}
      />
      <SpecTableBlock
        eyebrow="Technical specification"
        title="Core electrical & mechanical details"
        description="Reference dimensions, electrical requirements, and operational envelopes for system integrators and facility planners."
        specs={specRows}
        notes={[
          "Optional low-temperature package extends operation down to -20°C.",
          "Certified for CE, UL, and CSA markets. Documentation available upon request.",
        ]}
        cta={{ label: "Talk with an applications engineer", href: "/contact" }}
      />
      <Downloads
        title="Download technical resources"
        description="Everything you need to model, install, and maintain the JET X500 in your facility."
        items={downloads}
      />
      <CTA
        title="Schedule a live demo"
        description="See the JET X500 in action with a tailored run using your own part geometry and process requirements."
        primaryCta={{ label: "Book a demo", href: "/contact" }}
        secondaryCta={{ label: "Share requirements", href: "/contact" }}
      />
    </>
  );
};

ProductDetail.displayName = "ProductDetailPage";
