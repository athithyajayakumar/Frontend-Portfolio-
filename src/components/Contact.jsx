import { useState } from "react";
import { contactInfo, socialLinks } from "../data/portfolioData";
import {
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("http://localhost:5000/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Failed to send message");
      }
    } catch (error) {
      setStatus("Server error. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: contactInfo.phone,
      href: `tel:${contactInfo.phone.replace(/\s+/g, "")}`,
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: contactInfo.email,
      href: `mailto:${contactInfo.email}`,
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: contactInfo.location,
      href: "#",
    },
  ];

  const socialItems = [
    { icon: <FaLinkedinIn />, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: <FaGithub />, href: socialLinks.github, label: "GitHub" },
    { icon: <FaGlobe />, href: socialLinks.portfolio, label: "Portfolio" },
  ];

  return (
    <section
      id="contact"
      className="border-t border-[#d4a017]/20 bg-[#0a0a0a] px-6 py-24 lg:px-16"
    >
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <div className="mb-3 flex items-center gap-3 font-mono text-[12px] uppercase tracking-[0.3em] text-[#cc0000]">
            <span className="inline-block h-px w-8 bg-[#cc0000]"></span>
            Get In Touch
          </div>

          <h2 className="font-['Playfair_Display'] text-4xl font-black leading-tight text-[#f5f0e8] md:text-5xl">
            Let's Build Something
            <br />
            <span className="text-[#d4a017]">Remarkable</span>
          </h2>

          <p className="mt-6 max-w-xl text-[17px] leading-8 text-[#f5f0e8]/60">
            I'm actively seeking data analyst opportunities. Whether you have a
            role, a project, or just want to talk data — my inbox is always open.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 transition hover:translate-x-1.5"
              >
                <div className="flex h-11 w-11 items-center justify-center border border-[#cc0000]/30 bg-[#cc0000]/10 text-lg text-[#f5f0e8] transition hover:bg-[#cc0000]">
                  {item.icon}
                </div>

                <div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8c8c84]">
                    {item.label}
                  </div>
                  <div className="text-[16px] font-semibold text-[#f5f0e8]">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex gap-4">
            {socialItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center border border-[#d4a017]/20 bg-[#d4a017]/10 text-[#d4a017] transition hover:-translate-y-1 hover:bg-[#d4a017] hover:text-[#050505]"
                title={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="border border-[#d4a017]/20 bg-[#111111] p-8">
          <div className="mb-6 font-['Playfair_Display'] text-2xl font-bold text-[#d4a017]">
            Send Me a Message
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-[#d4a017]/15 bg-[#0b0b0b] px-4 py-3 text-[15px] text-[#f5f0e8] outline-none placeholder:text-[#f5f0e8]/45 focus:border-[#d4a017]"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-[#d4a017]/15 bg-[#0b0b0b] px-4 py-3 text-[15px] text-[#f5f0e8] outline-none placeholder:text-[#f5f0e8]/45 focus:border-[#d4a017]"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border border-[#d4a017]/15 bg-[#0b0b0b] px-4 py-3 text-[15px] text-[#f5f0e8] outline-none placeholder:text-[#f5f0e8]/45 focus:border-[#d4a017]"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full resize-none border border-[#d4a017]/15 bg-[#0b0b0b] px-4 py-3 text-[15px] text-[#f5f0e8] outline-none placeholder:text-[#f5f0e8]/45 focus:border-[#d4a017]"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-br from-[#cc0000] to-[#8b0000] px-8 py-3 font-['Rajdhani'] text-[13px] font-bold uppercase tracking-[0.22em] text-white shadow-[0_4px_24px_rgba(204,0,0,0.35)] transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Me a Message →"}
            </button>

            {status && (
              <p className="pt-2 text-sm text-[#d4a017]">{status}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;