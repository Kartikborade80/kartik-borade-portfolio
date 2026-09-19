import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Resume() {
  const [activeResume, setActiveResume] = useState("new");
  return (
    <section className="container" style={{ padding: "60px 0" }}>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: "#0b0b0b",
          borderRadius: 16,
          padding: "40px 30px",
          color: "#e5e5e5",
          boxShadow: "0 0 25px rgba(0, 153, 255, 0.1)",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 28, color: "#00b4ff", marginBottom: 12 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          style={{ color: "#aaa", marginBottom: 25 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 20,
            background: "rgba(255,255,255,0.03)",
            padding: "24px 20px",
            borderRadius: 12,
          }}
        >
          <div>
            <h3 style={{ fontSize: 24, color: "#00b4ff", marginBottom: 4 }}>
              👨‍💻 KARTIK BORADE
            </h3>
            <p style={{ marginTop: 6, fontSize: 16, color: "#fff", fontWeight: 600 }}>
              B.Tech Artificial Intelligence and Data Science Student
            </p>
            <p style={{ margin: "2px 0", fontSize: 14, color: "#00b4ff" }}>
              Sanjivani University, Kopargaon
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#ccc" }}>
              Previously completed Diploma in Artificial Intelligence and Machine Learning with 91.29%.
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              📍 Talegaon, Pune, Maharashtra
            </p>
            <p style={{ margin: "4px 0", fontSize: 14, color: "#aaa" }}>
              ✉️ kartikborade8010@gmail.com | 📞 +91 8010374800
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              background: "linear-gradient(135deg, #00b4ff44, #0b0b0b)",
              borderRadius: 12,
              padding: "14px 20px",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 420,
              fontSize: 14,
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              Motivated B.Tech Artificial Intelligence and Data Science student at Sanjivani University, Kopargaon, with a strong foundation in Artificial Intelligence, Machine Learning, Data Science, Python and Data Analytics. Previously completed a Diploma in Artificial Intelligence and Machine Learning with 91.29%. Interested in building practical AI and data-driven solutions and exploring Generative AI and Cybersecurity.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section with Border Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            marginTop: 35,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            🎓 Education
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8 }}>
            <li style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                <strong>B.Tech – Artificial Intelligence and Data Science</strong> — Sanjivani University, Kopargaon, 2026–2028
                <span style={{ background: "rgba(0,180,255,0.2)", color: "#00b4ff", padding: "2px 8px", borderRadius: 6, fontSize: 12 }}>
                  CURRENT
                </span>
              </div>
              <span style={{ color: "#aaa" }}>Currently Pursuing • Direct Admission to Second Year</span>
            </li>
            <li>
              <strong>Diploma – Artificial Intelligence and Machine Learning</strong> — D. Y. Patil Educational Campus, Ambi, Pune (MSBTE) <br />
              <span style={{ color: "#aaa" }}>Percentage: <strong>91.29%</strong> • Completed</span>
            </li>
          </ul>
        </motion.div>

        {/* Academic Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={{
            marginTop: 25,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 12 }}>
            📊 Academic Performance
          </h4>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
            <div style={{ background: "rgba(255,255,255,0.04)", padding: "12px 16px", borderRadius: 8 }}>
              <div style={{ color: "#aaa", fontSize: 13 }}>Diploma – Artificial Intelligence & Machine Learning</div>
              <div style={{ color: "#00b4ff", fontWeight: 700, fontSize: 18, marginTop: 4 }}>91.29%</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.04)", padding: "12px 16px", borderRadius: 8 }}>
              <div style={{ color: "#aaa", fontSize: 13 }}>Final Semester Marks</div>
              <div style={{ color: "#ccc", fontWeight: 600, fontSize: 14, marginTop: 4 }}>[FINAL SEMESTER MARKS – TO BE UPDATED]</div>
            </div>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          style={{
            marginTop: 35,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 14 }}>
            💼 Experience
          </h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <strong style={{ fontSize: 16, color: "#fff" }}>Cyber Security Analysis Intern</strong>
              <div style={{ color: "#00b4ff", fontSize: 14, margin: "2px 0" }}>HummingByte Technology, Nashik</div>
              <p style={{ color: "#aaa", fontSize: 13, margin: "4px 0" }}>
                Hands-on cybersecurity analysis, threat monitoring fundamentals, and vulnerability review.
              </p>
            </div>
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 6 }}>
                <strong style={{ fontSize: 16, color: "#fff" }}>System Engineer</strong>
                <span style={{ fontSize: 13, color: "#00b4ff" }}>Nov 2025 – Feb 2026</span>
              </div>
              <div style={{ color: "#00b4ff", fontSize: 14, margin: "2px 0" }}>
                Fencer Services Pvt. Ltd., Pune • <span style={{ color: "#ccc" }}>Client Site: Ador Welding, Chinchwad</span>
              </div>
              <ul style={{ color: "#aaa", fontSize: 13, margin: "8px 0 0 18px", padding: 0, lineHeight: 1.6 }}>
                <li>Provided IT support and system troubleshooting for hardware, software, and network issues.</li>
                <li>Managed Windows/Linux systems, LAN/Wi-Fi, IP configuration, routers, and switches.</li>
                <li>Assisted with endpoint security, firewall, user access, and system maintenance.</li>
                <li>Used Nmap and Wireshark for basic network assessment and monitoring.</li>
                <li>Maintained incident documentation and technical support records.</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: 35,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 14 }}>🚀 Projects</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10 }}>
                <strong style={{ fontSize: 16, color: "#fff" }}>
                  AutoDefenceX – Autonomous Cyber Security Monitoring Tool using Swarm Intelligence
                </strong>
                <span style={{ fontSize: 12, background: "rgba(0,180,255,0.15)", color: "#00b4ff", padding: "3px 8px", borderRadius: 6 }}>
                  Research Published
                </span>
              </div>
              <p style={{ color: "#aaa", fontSize: 13, margin: "6px 0", lineHeight: 1.6 }}>
                Autonomous cybersecurity monitoring tool utilizing swarm intelligence, machine learning, and proactive threat detection.
              </p>
              <div style={{ color: "#00b4ff", fontSize: 12, background: "rgba(255,255,255,0.02)", padding: "8px 12px", borderRadius: 6, margin: "8px 0" }}>
                📄 <strong>IRJET Publication:</strong> International Research Journal of Engineering and Technology (IRJET) • Volume 13 | Issue 03 | March 2026 | Paper ID: 22
              </div>
              <div style={{ marginTop: 10 }}>
                <motion.a
                  href="https://github.com/Kartikborade80/AutoDefenceX_Tools"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(0,180,255,0.15)",
                    border: "1px solid #00b4ff",
                    color: "#00b4ff",
                    padding: "6px 14px",
                    borderRadius: 6,
                    fontSize: 13,
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  💻 GitHub Repository
                </motion.a>
              </div>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 10 }}>
                <strong style={{ fontSize: 16, color: "#fff" }}>Campus Resource Booking System</strong>
              </div>
              <p style={{ color: "#aaa", fontSize: 13, margin: "6px 0", lineHeight: 1.6 }}>
                Campus resource and facility scheduling and booking platform to streamline institutional reservation management.
              </p>
              <div style={{ marginTop: 10 }}>
                <motion.a
                  href="https://github.com/Kartikborade80/campus-resource-booking"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    background: "rgba(0,180,255,0.15)",
                    border: "1px solid #00b4ff",
                    color: "#00b4ff",
                    padding: "6px 14px",
                    borderRadius: 6,
                    fontSize: 13,
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  💻 GitHub Repository
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          style={{ marginTop: 35 }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 14 }}>⚙️ Skills</h4>
          
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              {
                category: "AI & Machine Learning",
                skills: ["Artificial Intelligence", "Machine Learning", "Predictive Analytics", "Model Training", "Model Evaluation"],
              },
              {
                category: "Data Science & Analytics",
                skills: ["Data Analysis", "Data Cleaning", "EDA", "Data Visualization", "Statistical Analysis"],
              },
              {
                category: "Programming & Libraries",
                skills: ["Python", "OOP", "Problem Solving", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
              },
              {
                category: "Database & Generative AI",
                skills: ["SQL", "MySQL", "Generative AI", "LLM Fundamentals", "Prompt Engineering"],
              },
              {
                category: "Tools & Additional Interest",
                skills: ["Git", "GitHub", "Jupyter Notebook", "Google Colab", "VS Code", "Cybersecurity (Interest)"],
              },
            ].map((group) => (
              <div key={group.category} style={{ background: "rgba(255,255,255,0.02)", padding: "12px 16px", borderRadius: 10 }}>
                <div style={{ color: "#00b4ff", fontSize: 13, fontWeight: 600, marginBottom: 8 }}>{group.category}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {group.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.06, backgroundColor: "rgba(0,180,255,0.25)" }}
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        padding: "4px 10px",
                        borderRadius: 6,
                        fontSize: 12,
                        color: "#ccc",
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          style={{
            marginTop: 35,
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 12,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <h4 style={{ fontSize: 20, color: "#00b4ff", marginBottom: 14 }}>🏆 Achievements</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, lineHeight: 1.8, fontSize: 14, color: "#ccc" }}>
            <li style={{ marginBottom: 8 }}>
              • <strong>4th Rank</strong> – Innovative Idea Presentation, Technical Event 2024-25, Pimpri Chinchwad Polytechnic (28 Feb 2025)
            </li>
            <li style={{ marginBottom: 8 }}>
              • <strong>State-Level Project Competition</strong> – TECHNOTSAV-2K26, Siddhant College of Engineering
            </li>
            <li style={{ marginBottom: 8 }}>
              • <strong>Research Publication</strong> – AutoDefenceX, IRJET (Volume 13 | Issue 03 | March 2026)
            </li>
            <li style={{ marginBottom: 8 }}>
              • <strong>Cyber Security Analysis Internship</strong> – HummingByte Technology, Nashik
            </li>
            <li style={{ marginBottom: 8 }}>
              • <strong>Head of Social Media Team</strong> – D. Y. Patil Polytechnic, Pune (Media coverage & event documentation)
            </li>
            <li>
              • <strong>System Engineer</strong> – Fencer Services Pvt. Ltd. (Client Site: Ador Welding, Chinchwad)
            </li>
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            marginTop: 40,
          }}
        >
          {[
            { name: "💻 GitHub", link: "https://github.com/Kartikborade80" },
            { name: "💼 LinkedIn", link: "https://www.linkedin.com/in/kartikborade/" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
              style={{
                color: "#ccc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 500,
              }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* Resume Switcher & Download Bar */}
        <div
          style={{
            marginTop: 45,
            padding: "16px 20px",
            background: "rgba(255,255,255,0.03)",
            borderRadius: 12,
            border: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          {/* Toggle Tabs */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button
              onClick={() => setActiveResume("new")}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: activeResume === "new" ? "#00b4ff" : "rgba(255,255,255,0.08)",
                color: "#fff",
                fontWeight: 600,
                fontSize: 14,
                transition: "0.3s",
                display: "flex",
                alignItems: "center",
                gap: 6,
                boxShadow: activeResume === "new" ? "0 0 15px rgba(0,180,255,0.4)" : "none",
              }}
            >
              📄 Latest Resume (B.Tech AI & DS)
            </button>
            <button
              onClick={() => setActiveResume("older")}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: activeResume === "older" ? "#00b4ff" : "rgba(255,255,255,0.08)",
                color: "#fff",
                fontWeight: 600,
                fontSize: 14,
                transition: "0.3s",
                display: "flex",
                alignItems: "center",
                gap: 6,
                boxShadow: activeResume === "older" ? "0 0 15px rgba(0,180,255,0.4)" : "none",
              }}
            >
              📜 Previous Resume (Diploma AI & ML)
            </button>
          </div>

          {/* Download Buttons for Both */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <motion.a
              href="/resume.pdf"
              download="Kartik_Borade_Latest_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "#00b4ff",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 500,
                fontSize: 13,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              ⬇️ Download Latest (B.Tech)
            </motion.a>
            <motion.a
              href="/resume_previous.pdf"
              download="Kartik_Borade_Previous_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#eee",
                padding: "8px 16px",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 500,
                fontSize: 13,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              ⬇️ Download Previous (Diploma)
            </motion.a>
          </div>
        </div>

        {/* PDF Viewer */}
        <motion.div
          key={activeResume}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            marginTop: 20,
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <iframe
            src={activeResume === "new" ? "/resume.pdf" : "/resume_previous.pdf"}
            title={activeResume === "new" ? "Kartik Borade Latest Resume" : "Kartik Borade Previous Resume"}
            style={{
              width: "100%",
              height: "750px",
              border: "none",
              background: "#111",
            }}
          />
        </motion.div>


      </motion.div>
    </section>
  );
}
