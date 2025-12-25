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
    { icon: "📧", label: "Email", value: "shankaralemagar91@gmail.com", link: "mailto:shankaralemagar91@email.com" },
    { icon: "📱", label: "Phone", value: "+1 (347) 955 6785", link: "tel:+13479556785" },
    { icon: "📍", label: "Location", value: "Queens, NY", link: "#" },
    { icon: "💼", label: "LinkedIn", value: "linkedin profile", link: "https://www.linkedin.com/in/shankar-magar-725b671b7/" },
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
  <div className="py-16 bg-[#0a0a0a]">
    <div className="max-w-6xl mx-auto px-4">
      <motion.div
        variants={textVariant()}
        className="text-center mb-16"
      >
        <p className={styles.SectionSubText}>Get in touch</p>
        <h2 className={styles.SectionHeadText}>Contact</h2>
      </motion.div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center">
        
        {/* LEFT RED CONTACT CARD */}
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 0.75)}
          className="lg:col-span-5 bg-blue-600/20 text-white rounded-2xl p-8 lg:p-10 shadow-xl z-10"
        >
          <h3 className="text-2xl font-bold mb-8">Contact Us</h3>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex items-start gap-4 hover:opacity-90 transition"
              >
                <span className="text-xl">{info.icon}</span>
                <div>
                  <p className="font-semibold">{info.label}</p>
                  <p className="text-sm opacity-90">{info.value}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT WHITE FORM CARD */}
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          className="lg:col-span-7 bg-[#0c131f] dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-xl
                     lg:-ml-20 mt-10 lg:mt-0"
        >
          <h3 className="text-2xl font-bold text-white mb-2 lg:ml-30">
            Get in Touch
          </h3>
          <p className="text-white/70 mb-8 lg:ml-30">
            Feel free to drop us a line below!
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 lg:ml-30">
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-600/20 text-blue-300"
            />

            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                         focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-600/20 text-blue-300"
            />

            <textarea
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none
                         focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-600/20 text-blue-300"
            />

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3
                         rounded-full font-semibold disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  </div>
);
};

export default SectionWrapper(Contact, "contact");
