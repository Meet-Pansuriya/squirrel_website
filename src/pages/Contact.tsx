import { Helmet } from "react-helmet";
import { ContactSection } from "../sections/Contact/ContactSection";

const contactCards = [
  {
    title: "Direct line",
    value: "+1 (800) 555-0199",
    description: "Available Monday through Friday, 9am – 7pm EST for urgent operational support.",
    action: { label: "Call now", href: "tel:+18005550199" },
  },
  {
    title: "Enterprise sales",
    value: "sales@squirrel.co",
    description: "Share your throughput goals and our solutions team will respond within one business day.",
    action: { label: "Email sales", href: "mailto:sales@squirrel.co" },
  },
  {
    title: "Field service",
    value: "service@squirrel.co",
    description: "24/7 access to certified technicians, replacement parts, and remote diagnostics.",
    action: { label: "Log a ticket", href: "mailto:service@squirrel.co" },
  },
];

export const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Squirrel</title>
        <meta
          name="description"
          content="Get in touch with Squirrel’s automation experts for sales inquiries, technical support, or partnership opportunities."
        />
      </Helmet>
      <ContactSection
        title="Let’s build your next production advantage"
        description="Tell us about your operations and we’ll align the right robotics, control, and service experts for a tailored consultation."
        info={contactCards}
        mapEmbedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.711109312683!2d-118.2436849847898!3d34.05223498060699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1678886474135!5m2!1sen!2sus"
      />
    </>
  );
};

Contact.displayName = "ContactPage";
