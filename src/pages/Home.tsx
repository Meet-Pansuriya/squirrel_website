import { Helmet } from "react-helmet";
import { Bolt, Gauge, Globe2, Shield, Sparkles, Target, TrendingUp } from "lucide-react";
import { HomeHero } from "../sections/Home/Hero/HomeHero";
import { ProductsGrid } from "../sections/Home/ProductsGrid/ProductsGrid";
import { WhySquirrel } from "../sections/Home/WhySquirrel/WhySquirrel";
import { FeaturedSpecs } from "../sections/Home/FeaturedSpecs/FeaturedSpecs";
import { Gallery } from "../sections/Home/Gallery/Gallery";
import { ContactLead } from "../sections/Home/ContactLead/ContactLead";
import type { Product, SpecRow, Stat } from "../lib/types";

const heroStats: Stat[] = [
  { label: "Installations", value: "2.4K+", icon: <TrendingUp size={20} /> },
  { label: "Uptime", value: "99.98%", icon: <Gauge size={20} /> },
  { label: "Service network", value: "45 countries", icon: <Globe2 size={20} /> },
];

const heroProducts = {
  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6I6ta3JozBvwgwgEffy69BHhuRboAyabOV7wcZ7PDzPcT6XOkHWp7pni6p-7JGdp5Qvi4GxD9b9iiGtiGSiehiEQcg8dqUJfXfDnp7d1q4bZaiO332Q-R-_12Zr-PAm63WWNguSrQ32X20AsOwCx__k5Wwu52nHOUiUuBLXolBqSztfSrebctAtbmKz678p9f3Rg2-n2DtmWByG_dkN6JhADv9YUD8dFWrCswNKY_8SloA3Je8VXLaAs2E386fe0V9UXeS9G7EDw",
  alt: "Squirrel JetX assembly inside a smart factory.",
  badge: "Next-gen",
  title: "JET X500 Modular Assembly",
  description:
    "A configurable robotic cell engineered for 24/7 throughput without sacrificing precision.",
  features: [
    {
      title: "Precision to 5 microns",
      description: "Closed-loop calibration keeps tolerances locked during continuous operation.",
      icon: <Target size={18} />,
    },
    {
      title: "Rapid swap tooling",
      description: "Reconfigure tasks in minutes with magnetic quick-change end effectors.",
      icon: <Sparkles size={18} />,
    },
    {
      title: "Predictive service",
      description: "Onboard diagnostics flag wear items 120 hours before downtime.",
      icon: <TrendingUp size={18} />,
    },
  ],
};

const featuredProducts: Array<
  Product & {
    description: string;
    metrics: Array<{ label: string }>;
    secondaryCtaLabel: string;
  }
> = [
  {
    id: "jet-x500",
    name: "JET X500",
    series: "JET",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCPh1VID23gfbpf8QwUfW4mv4lvBRbsd2evdof8aPeN0VpwQb36jJTZK-P9arbq9jeLl_AF4yMeBT9aSPFPJC5O3N0BJ9Syl5jwT9ijZHljKG4bRFw-Rig7tfCBK8Pv7P8_QI3YVfOj1XOcz_slCgYn9mW_N-eLhpEMQ9zOv3u-jQdr40-ZUuJipao95B8Ty--GI3I-cLAh02mO7WuN3bPQlee6GCya--6uW-o35i1Yf70QSd-DG4u6FIrgQDdCGE9cZ1q9KFajdc",
    href: "/products/jet-x500",
    description: "Flagship multi-axis assembly system with autonomous calibration routines.",
    highlights: [
      "135 kg payload articulated arm",
      "Dynamic vision sensing at 240 fps",
      "Integrated clean-room sealing",
    ],
    metrics: [
      { label: "Cycle time: 8.5s" },
      { label: "Power: 480V / 30A" },
      { label: "Footprint: 2.2m²" },
    ],
    secondaryCtaLabel: "Download specs",
  },
  {
    id: "silent-rs500",
    name: "SILENT RS500",
    series: "SILENT",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCipxbS6ZMDQxFWQkGCjgUlZyIB7AsJBHvY1ZC4XXqHgFxykB01OgzN9uOPRThltTHM69KwnzP9K7fqBtiys8wv3ApiGeX5MjQTFgp0iHburnbPPHWan_ysuNmcFAgBV1AvfGritHHPJ93-ULMtlubX4mm9U4siF8T1f-3EleA6Dhhl0N6Ri4fDkH1qf9f2FNwSIBLMSuUVfQNF26Z2LAsazTemyjpo9HJdNZFdD40MUN-gSWeYbx3ArCG-humqTlmu0un9Qj54OQ",
    href: "/products/silent-rs500",
    description: "Whisper-quiet rotary screw compressor built for labs and light manufacturing.",
    highlights: ["Ultra low 58 dBA envelope", "200 CFM @ 125 PSIG", "Smart bleed-off reduction"],
    metrics: [
      { label: "Motor: 50 HP" },
      { label: "Inverter drive" },
      { label: "Service interval: 2,500 hrs" },
    ],
    secondaryCtaLabel: "Request pricing",
  },
  {
    id: "force-v90",
    name: "FORCE V90",
    series: "FORCE",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKQPI4WDvepc82DP76m-lKwgPesz5H5FX6h71lJYBM8xx5Euknt3LUzkAaU-fpE_N0q-m_oop8vhOyIlh3cEdf-O_rgblIhUFRgZayjvBSCtKbmv17i9t6o010-DAPGcf4r_c8lxhHfMUdR-PEM9rDk6hB7dUmvvr4MHJpxOg8r6ntAGTeVVaFXiRGPT5uB0OX-OkRuBULvb2ce9IOfRnhzXCxaHc489HEgt_BT0IHSeILKMxBWDDxEWU8sncBhO87H8eZkixWow",
    href: "/products/force-v90",
    description: "High-throughput palletizing cell optimized for harsh shift environments.",
    highlights: [
      "1800 units/hour throughput",
      "IP67 sealed drive modules",
      "Dual arm collaborative safety",
    ],
    metrics: [
      { label: "Payload: 90 kg" },
      { label: "Reach: 2.6 m" },
      { label: "Safety: ISO 10218" },
    ],
    secondaryCtaLabel: "See configurations",
  },
];

const featuredHighlights = [
  {
    title: "Adaptive servo core",
    description:
      "Hyper-responsive servo arrays adapt torque delivery to sub-millisecond load changes across multi-axis movements.",
  },
  {
    title: "Unified control plane",
    description:
      "Single-pane diagnostics and job orchestration for every Squirrel asset in your facility.",
  },
  {
    title: "Service-forward design",
    description:
      "Hot-swappable modules with guided AR workflows keep uptime above 99% across fleets.",
  },
];

const featuredSpecRows: SpecRow[] = [
  { label: "Model Number", value: "JET-X500" },
  { label: "Payload Capacity", value: "135 kg articulated dual arm" },
  { label: "Repeatability", value: "±0.005 mm" },
  { label: "Max Reach", value: "2.6 m" },
  { label: "Power Requirements", value: "480V / 30A / 3Φ" },
  { label: "Operating Temp.", value: "-10°C to 55°C" },
  { label: "Connectivity", value: "Profinet, Ethernet/IP, OPC-UA" },
  { label: "Compliance", value: "ISO 10218-1, ISO 13849-1 Cat 3" },
];

const galleryItems = [
  {
    title: "Robotic Assembly Lines",
    description: "Lights-out robotic assembly delivering unmatched precision.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuASPNC1eCYNoY566_ylb9sIPdViUKAs5IzBC-07D_on5bjYb9R0gHlaHhvn40jUA9Pcl1dSADn8qxCIihX_PvVDI2Rt6ToKDsCOwkIao7Hu49algVHVzEnDnPV6HEAVn8tWHaAJAmnZ7tKzRTiGnJogEGHv3zFr2EPRUmun06WuRpEikxaRXsZ7NHZOyAeOLXU60-jXkH66mQ464A1kl-F107MlAkSe6ugPMDsRClQTIwU0ENbwN1Ccr3hLnxZRnmxZrP1lboy1vA",
      alt: "Robotic assembly cells with luminous lighting.",
    },
    tag: "Featured",
    href: "/products/jet-x500",
  },
  {
    title: "Hydraulic Powertrain Cells",
    description: "Precision machining across critical aerospace castings.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOZFoF5COzFBCWKx3JcoPRGYT45ft2zzvZE8QFr_l7r-Rx1TgrXjKhkHTyiRxaqRsyjFvc5dl2EqFpHzaZz_F_OZSBsYuBNvoQM2TeiVhrrB3sAYmVZayHRI67CdCw7vsjGAsvIpY4SRpxQVDwj8dCizRSzWSCrhZ2Z_VFIj63q9rRjew8ah7KiSe4d9lQI36DGnrR32qc9cDnTgauzWeuz2Fl0LhnRT4kqlVzDG2gwo-qC2R-sHgO8pD6QR8rqN_o9ZBV4bjQjw",
      alt: "Macro shot of precision machining piston assembly.",
    },
    href: "/products",
  },
  {
    title: "Autonomous Logistics",
    description: "Vision-guided AMRs orchestrated via Squirrel PathOS.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnTH3oytlSM_2gAd7Ju26BNtM5RvP7hrEtkBsnepfKVXs-dbWSP86R3JyIE6kSLEsp-FrRhwdeu66oJh84C677BG0Uuy90BNLQi88TsnkjdYGKnMGjy7iM_ZvRnII5P3lc8u9BZl788JDFqwPI2vara948gBuMZ_df456dLgtz2W_TwKIrovEPWY7ZbQzH7FqXi0qIuLGcTSxI0ohvFBc5d6Ady-Zh_mf5nGXusy1TXMtO-8_LxGF3U4XAetspxyUQWYqKQhR03Q",
      alt: "High-speed AMR navigating warehouse environment.",
    },
    href: "/why",
  },
];

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Squirrel Industrial Automation</title>
        <meta
          name="description"
          content="Automated industrial systems engineered for continuous uptime and precision."
        />
      </Helmet>
      <HomeHero
        kicker="Industrial automation redefined"
        title="Build a smarter, safer production engine."
        description="Squirrel systems blend modular robotics, adaptive sensing, and predictive maintenance to keep your lines producing without compromise."
        primaryCta={{ label: "Explore solutions", href: "/products" }}
        secondaryCta={{ label: "Download catalog", href: "/products" }}
        stats={heroStats}
        media={heroProducts}
      />
      <ProductsGrid
        eyebrow="Solutions"
        title="Engineered for your critical workflows"
        description="Every platform is calibrated to deliver measurable gains across throughput, uptime, and operator safety from day one."
        products={featuredProducts}
      />
      <WhySquirrel
        eyebrow="Why Squirrel"
        title="Industrial strength with smart control"
        description="Designed to thrive in harsh, high-throughput environments without sacrificing flexibility or safety."
        features={[
          {
            icon: <Target size={20} />,
            title: "Unrivaled precision",
            description: "Closed-loop feedback delivers repeatability even in extreme conditions.",
          },
          {
            icon: <Shield size={20} />,
            title: "Built for endurance",
            description: "IP-rated enclosures and redundant systems keep uptime maximized.",
          },
          {
            icon: <Bolt size={20} />,
            title: "Peak efficiency",
            description: "Energy-aware automation orchestrates resources without impacting output.",
          },
        ]}
      />
      <FeaturedSpecs
        eyebrow="Featured platform"
        title="JET X500 specification snapshot"
        description="Our flagship modular assembly cell combines adaptable robotics with predictive intelligence."
        highlights={featuredHighlights}
        specs={featuredSpecRows}
        cta={{ label: "View complete specification", href: "/products/jet-x500" }}
        image={{
          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1wreoVPPodYAVgWXsjIjcUGa2NUFWvhkYRSdBB2TaF_PBevW6t_4CACbOZ83ey9iZrcpxF787QriuqmpjJ6tvI4mhRT8V2SzbFcEaG-z9V1jac-1QePL8P-8OMGu8eMOX8ZTC3lZei0rgibbEKst0xs3WvnOFfX-NNYdmJQsm0SpdX5nCIDjIfSyq286vly9b4llmqcFEJFBMXKnjOK_IYCM9R9tW53PR9Kf5o4fq8jMvfXOW9jKLOqjMGl1317zYZEHpVPgdMQ",
          alt: "Dual-arm Jet series cell inside production environment.",
        }}
      />
      <Gallery
        eyebrow="In the field"
        title="Projects delivering measurable impact"
        description="From aerospace to energy, Squirrel platforms accelerate production while elevating safety standards."
        items={galleryItems}
      />
      <ContactLead
        title="Ready to accelerate throughput?"
        description="Share your challenges and our engineering team will blueprint a solution within 48 hours."
        buttonLabel="Talk to an expert"
        placeholder="you@company.com"
        hint="We’ll follow up with a tailored ROI model."
      />
    </>
  );
};

Home.displayName = "HomePage";
