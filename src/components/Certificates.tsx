import { motion } from "framer-motion"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"
import { styles } from "../style"
import { ExternalLink, Award } from "lucide-react";

const Certificates = () => {

const dummyCertifications = [
  {
    id: 1,
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
    id: 2,
    title: "Intermediate iOS App Development",
    issuer: "Codepath",
    issue_date: "2023-10-15",
    expiry_date: null,
    credential_id: "63054",
    credential_url: "https://aws.amazon.com/verification?id=aws-123",
    description:
      "Validated knowledge of cloud fundamentals, architecture best practices, and AWS core services.",
  },
  {
    id: 3,
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
    <div>
         <motion.div variants={textVariant()} className="text-center mb-12 sm:mb-16">
          <p className={styles.SectionSubText}>My Certificates</p>
          <h2 className={styles.SectionHeadText}>Certification</h2>
        </motion.div>

        <div className="container mx-auto max-w-4xl">
        <div className="flex items-center gap-3 mb-12 justify-center">
          <Award className="w-8 h-8 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
        </div>

        {isLoading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card border-border">
                <div>
                  <div className="h-6 w-3/4 mb-2" />
                  <div className="h-4 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : certifications && certifications.length > 0 ? (
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-card border-border hover:card-glow transition-all duration-300 hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="text-xl mb-2 flex items-center gap-2">
                        {cert.title}
                        {cert.credential_url && (
                          <a
                            href={cert.credential_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>

                      <p className="text-primary font-medium mb-2">{cert.issuer}</p>

                      <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span>
                          Issued: {format(new Date(cert.issue_date), "MMM yyyy")}
                        </span>

                        {cert.expiry_date && (
                          <>
                            <span>•</span>
                            <span>
                              Expires:{" "}
                              {format(new Date(cert.expiry_date), "MMM yyyy")}
                            </span>
                          </>
                        )}

                        {cert.credential_id && (
                          <>
                            <span>•</span>
                            <span>ID: {cert.credential_id}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {cert.description && (
                  <div>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No certifications to display yet. Add some from your backend!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SectionWrapper(Certificates, "certificates")