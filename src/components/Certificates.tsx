import { motion } from "framer-motion"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"
import { ExternalLink, Award } from "lucide-react";
import { format } from "date-fns";

const Certificates = () => {

const dummyCertifications = [
   {
    id: 1,
    title: "Software Development",
    issuer: "Year Up United",
    issue_date: "2024-10-25",
    expiry_date: null,
    credential_id: "2448-GYM9-SHRS",
    credential_url: "https://www.freecodecamp.org/certification/fcc70c05c73-294e-4665-a62f-fe1aec3b3144/responsive-web-design",
    description:
      "Completed 300+ hours of coursework in responsive design, JavaScript, and CSS.",
  },
  {
    id: 2,
    title: "Machine Learning Foundation",
    issuer: "Cornell University",
    issue_date: "2023-09-12",
    expiry_date: null,
    credential_id: "",
    credential_url: "https://www.freecodecamp.org/certification/fcc70c05c73-294e-4665-a62f-fe1aec3b3144/responsive-web-design",
    description:
      "Completed 300+ hours of coursework in responsive design, JavaScript, and CSS.",
  },
  {
    id: 3,
    title: "Responsive Web design V8",
    issuer: "freeCodeCamp",
    issue_date: "2022-08-13",
    expiry_date: null,
    credential_id: "FCC-123456789",
    credential_url: "https://www.freecodecamp.org/certification/fcc70c05c73-294e-4665-a62f-fe1aec3b3144/responsive-web-design",
    description:
      "Completed 300+ hours of coursework in responsive design, JavaScript, and CSS.",
  },
  {
    id: 4,
    title: "Intermediate iOS App Development",
    issuer: "Codepath",
    issue_date: "2023-10-15",
    expiry_date: null,
    credential_id: "63054",
    credential_url: "https://github.com/Shankarmagar/personal-web-portfolio/blob/main/personal-web-portfolio/src/assets/images/iOSCertificate.png",
    description:
      "Hands-on projects focused on iOS app development, user interface design, and mobile app architecture.",
  },
  {
    id: 5,
    title: "Intermediate Android App Development",
    issuer: "CodePath",
    issue_date: "2023-10-15",
    expiry_date: null,
    credential_id: "63054",
    credential_url: "https://github.com/Shankarmagar/personal-web-portfolio/blob/main/personal-web-portfolio/src/assets/images/AndroidCertificate.png",
    description:
      "Hands-on projects focused on user research, wireframing, prototyping, and usability testing.",
  },
];
  // Dummy loading simulation — set false to always show data
  const isLoading = false;

  const certifications = dummyCertifications;
  return (
    <div className="m-2 bg-black dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={textVariant()} className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Award className="w-8 h-8 text-blue-600" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Licenses & <span className="text-blue-600">Certifications</span>
            </h2>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </motion.div>

        {isLoading ? (
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="animate-pulse">
                  <div className="h-6 bg-gray-700 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-700 rounded w-1/2 mb-2"></div>
                  <div className="h-4 bg-gray-700 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        ) : certifications && certifications.length > 0 ? (
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0c131f] dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700"
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold text-white flex-1">
                        {cert.title}
                      </h3>
                      {cert.credential_url && (
                        <a
                          href={cert.credential_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors p-1"
                          title="View Certificate"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>

                    <p className="text-blue-400 font-semibold mb-3 text-lg">
                      {cert.issuer}
                    </p>

                    <div className="flex flex-wrap gap-3 text-sm text-gray-400 mb-4">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        Issued: {format(new Date(cert.issue_date), "MMM yyyy")}
                      </span>

                      {cert.expiry_date && (
                        <>
                          <span className="text-gray-600">•</span>
                          <span className="flex items-center gap-1">
                            <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                            Expires: {format(new Date(cert.expiry_date), "MMM yyyy")}
                          </span>
                        </>
                      )}

                      {cert.credential_id && (
                        <>
                          <span className="text-gray-600">•</span>
                          <span className="font-mono text-xs bg-gray-700 px-2 py-1 rounded">
                            ID: {cert.credential_id}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {cert.description && (
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <p className="text-gray-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
              <Award className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">
                No certifications to display yet. Add some from your backend!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SectionWrapper(Certificates, "certificates")