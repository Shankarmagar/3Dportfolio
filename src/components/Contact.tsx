import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const contactInfo = [
    { icon: "📧", label: "Email", value: "shankar.ale@email.com", link: "mailto:shankar.ale@email.com" },
    { icon: "📱", label: "Phone", value: "+1 (555) 123-4567", link: "tel:+15551234567" },
    { icon: "📍", label: "Location", value: "San Francisco, CA", link: "#" },
    { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/shankar-ale", link: "https://linkedin.com/in/shankar-ale" },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully 🚀");
      setFormData({ from_name: "", from_email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Something went wrong 😢");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={textVariant()} className="text-center mb-12 sm:mb-16">
          <p className={styles.SectionSubText}>Get in touch</p>
          <h2 className={styles.SectionHeadText}>Contact</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div variants={fadeIn("right", "spring", 0.1, 0.75)} className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Let's work together</h3>
            <p className="text-gray-300">
              I'm always interested in new opportunities and exciting projects.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-2xl">{info.icon}</span>
                  <div>
                    <p className="text-white font-semibold">{info.label}</p>
                    <p className="text-gray-300 text-sm">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "spring", 0.2, 0.75)}
            className="bg-gray-800/50 rounded-xl p-6"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white"
              />

              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                required
                placeholder="Your email"
                className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white"
              />

              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white resize-none"
              />

              <motion.button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-500 text-white py-3 rounded-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
