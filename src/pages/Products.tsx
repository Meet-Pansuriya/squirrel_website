import { Helmet } from "react-helmet";
import { ArrowRight } from "lucide-react";
import { Container } from "../components/Container/Container";
import { Button } from "../components/Button/Button";
import { CategoryGrid } from "../sections/Products/CategoryGrid/CategoryGrid";
import styles from "./Products.module.css";

const categoryData = [
  {
    title: "JET Series Robotics",
    description: "High-precision modular robots for assembly, inspection, and finishing lines.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtg3aLqlMzAwlQfZ075w5CLMZgZHz6i2nTKVSIa1rOCJ0IpQcaq1eIthA0mC1M-lJ2Z68InWxuq2ILan7SR0BgHf9kCw6emxsv4O8B9f9nqangCMPCLG0IGvJm1vtZW2z9WHIif9mcQoY8z1S6VKaWFFTRMBHHlMvRwDNb6xsQ6iMYk8ZpzVWcwZ9xTcsBaSiGJ1z6j_4dnpSMz0opU5-S08rOfeI5Hdv-3gVXu9I5oJPHjax_BUyGhxbVYbFU6S-ETd9X5ijKTs4",
      alt: "Jet series robotic cell with dual arms.",
    },
    highlights: ["Payloads up to 180 kg", "±0.005 mm repeatability", "Integrated AI vision"],
    href: "/products/jet-x500",
  },
  {
    title: "SILENT Air Systems",
    description: "Ultra-quiet, high-efficiency compressed air platforms for critical environments.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX0a0XsyfYv4QwOpiiKyfycWrAHKAJrJklHKMp8quctX9FvIr43DASY44vC_oYet7-pwaqtyW6AxRAsRjd0EAPSb61yia_mOSHIFo5GgoUHwXFD5dVxxvqLBOfTWPv7pb4Pf2h6F-nGu-dPM_QRpmpwDxntvB4Cij6IptC37H6Cvd47V8Ujm0a_R4_i6WfDDzplEVpv7z5P0RnMCb6JKl7yt5ARWBI6oC0HXypbISDLq21JMUnlbrElu75Xv6iYtLgC05YBqsrcA",
      alt: "Silent series compressor in studio lighting.",
    },
    highlights: ["Noise floor <60 dBA", "Smart variable speed drives", "Predictive maintenance AI"],
    href: "/products/silent-rs500",
  },
  {
    title: "SPIDER Material Handling",
    description: "Autonomous mobile robots orchestrated for just-in-time material flow.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBvB1w6Bidmpd6IcRJ8ZK5RX2Iwf0liK_I8aUw3M6iZF5PdRg4WnIf_8SWwfOAPdZMByqkNvWSNoBClQopgYIWRJUk2hlUbXtYoNQ-rQMpmx5s3OVhR8WjeGQX7ynPqLAdTBndLqMZO6QmzPJ-XjM7HKM4JXgmlCwhdCB66xWe-QIaIyCtHQTZbyc6FzOUdlUp-dL9L4euTVDYIaC4vtIJZILX480tPR0IQLm-WvGreZoQBfseRROeC4bnnVMgIUTJSX-yeR5fATw",
      alt: "Spider series autonomous material handling robot.",
    },
    highlights: ["Fleet orchestration intelligence", "Dynamic obstacle avoidance", "Safety rated LIDAR"],
    href: "/products",
  },
  {
    title: "FORCE Heavy Industry",
    description: "Ruggedized automation for metals, energy, and composite fabrication.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdfez087gQdfBQJaR3UL5fKfm0tfQdMQQtG_37uBKes8lRVHSu0Lr9tFh9CI0A9LMf2oS1axoK8tQsaOnEEB8J5WWpf-y_PGaQG0ZP7c5o5pGeFYNUeUYEuoKr3O3-FaPT7TziipoNQF_RIqqnWl-BpI4jMq-yBo7PVO36I_MiPse2bHIq9OjUBtPKgpxB8Z6EoIXQPHACu5n9CbfjZBqNEQdogXi4VRF2Q6trRWkhtfQoSJENMNNupUsTxHIoSVJzeN__kubQEw",
      alt: "Force series gantry robot operating in heavy industry plant.",
    },
    highlights: ["IP67 enclosures", "High heat compatible cabling", "Redundant safety architecture"],
    href: "/products",
  },
  {
    title: "EDGE Analytics",
    description: "Real-time industrial analytics platform powering predictive operations.",
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA8AhVZX9y0nKMBALmA-7yiYv9ZVIgGcwQFn8NWzzUtt5gu1C0u5ugAUfeSyAgICPKWHx9cJb6pwu1mYIPjI83ot2VpcJp6D-y0-41sHnD81ML9FcgBytjSyFRrVu-RnbPGO5_2fFdw-K8a2O-Z_t6FEZ2w0t-B17x51caZobXGIoeXWu2MCBnBh4K6Uw9CTjUpWjBhAU0OjG-fN0beU31bRBxOZG_A40WerzVz-NiMbKLOxOgyXh5hOLBX1hZhiPrb6CWOWXn94g",
      alt: "Industrial analytics dashboard in use.",
    },
    highlights: ["Unified OT/IT data model", "Adaptive anomaly detection", "Mobile-ready dashboards"],
    href: "/why",
  },
  {
    title: "Field Services",
    description: "Global service network keeping mission-critical operations online.",
    image: {
      src: "https://placeholder.pics/svg/600x400/1F2937-F59E0B/Service",
      alt: "Service technician inspecting industrial equipment.",
    },
    highlights: ["24/7 global response", "Certified spare kits", "Lifecycle performance programs"],
    href: "/contact",
  },
];

const filterOptions = ["All products", "Robotics", "Air systems", "Material handling", "Software"];

export const Products = () => {
  return (
    <>
      <Helmet>
        <title>Squirrel Product Portfolio</title>
        <meta
          name="description"
          content="Explore Squirrel's modular robotics, material handling, and analytics solutions."
        />
      </Helmet>
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <div>
              <h1 className={styles.title}>Engineered for peak performance.</h1>
              <p className={styles.subtitle}>
                Discover platforms purpose-built for aerospace, energy, mobility, and advanced
                manufacturing. Each system is calibrated to deliver measurable efficiency from day
                one.
              </p>
              <div className={styles.filters} role="tablist" aria-label="Product categories">
                {filterOptions.map((filter, index) => (
                  <button
                    key={filter}
                    type="button"
                    className={`${styles.filterButton} ${index === 0 ? styles.active : ""}`}
                    aria-pressed={index === 0}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <figure className={styles.heroImage}>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd6XgvepyGSn6BVd3t7iCL9M8GoUHMeN1-CJj86MB0gqJ7fhVlEt9YDocKgdAJr5DcdbpO6QMctS_G7G3ngZJKleg5hFYXht2n1KPJsCTlfWd3O20LUqcdLI3nzC7CxPybzQuxCnWQ9QBL8i4lf9_uibW47E3YBq4xXevL8BUMdCKoxRr13W6IQ0V4uCAnho9pC1D9gL4pifmn1rsme0rKOEUrW9Dn6wssv2ObSztpkfvZdajOYSMTl6r4tTIZh-y7-IMoJTi-Bg"
                alt="Collage of Squirrel industrial platforms."
              />
            </figure>
          </div>
        </Container>
      </section>
      <CategoryGrid
        title="Platforms built for complex environments"
        description="Browse by product pillar and find the configuration that meets your throughput, footprint, and compliance targets."
        categories={categoryData}
      />
      <section className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <div>
              <h2 className={styles.title}>Need a tailored configuration?</h2>
              <p className={styles.subtitle}>
                Our engineering team designs turnkey cells for brownfield and greenfield
                environments. Share your layout and we’ll model integration in under a week.
              </p>
              <Button as="a" href="/contact">
                Start a project
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

Products.displayName = "ProductsPage";
