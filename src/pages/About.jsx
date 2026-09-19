import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaGraduationCap, FaBriefcase, FaTrophy, FaChartLine } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(circle at top, #0d0d0d, #000)",
        color: "white",
        padding: "3rem 1rem",
      }}
    >
      {/* --- About Me Container --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        style={{
          width: "100%",
          maxWidth: "1100px",
          textAlign: "left",
          marginTop: "1rem",
          lineHeight: 1.8,
          background: "rgba(255,255,255,0.04)",
          padding: "3rem 3.5rem",
          borderRadius: "18px",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* --- Header --- */}
        <h2
          style={{
            fontSize: "1.9rem",
            marginBottom: "1.2rem",
            background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          About Me
        </h2>

        {/* --- Description --- */}
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.85)",
            marginBottom: "1rem",
          }}
        >
          I am currently pursuing a <strong>B.Tech in Artificial Intelligence and Data Science</strong> at <strong>Sanjivani University, Kopargaon</strong>. I previously completed a <strong>Diploma in Artificial Intelligence and Machine Learning</strong> with <strong>91.29%</strong>.
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)", marginBottom: "1rem" }}>
          My interests include <strong>Artificial Intelligence</strong>, <strong>Machine Learning</strong>, <strong>Data Science</strong>, <strong>Data Analytics</strong>, <strong>Python</strong> and <strong>Generative AI</strong>. I enjoy working on practical technology projects and exploring how AI can be applied to real-world problems.
        </p>

        <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.8)" }}>
          I also have an interest in <strong>Cybersecurity</strong> and AI-based security solutions.
        </p>

        {/* --- Education Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Education
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* --- Education Card 1: B.Tech (CURRENT) --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(0,255,200,0.25)",
                boxShadow: "0 0 15px rgba(0,255,200,0.08)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaUniversity size={40} color="var(--accent)" />
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
                  <h4
                    style={{
                      color: "var(--accent)",
                      marginBottom: "0.2rem",
                      fontSize: "1.25rem",
                    }}
                  >
                    B.Tech – Artificial Intelligence and Data Science
                  </h4>
                  <span
                    style={{
                      background: "rgba(0,255,200,0.15)",
                      color: "var(--accent)",
                      border: "1px solid var(--accent)",
                      padding: "2px 10px",
                      borderRadius: "12px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                    }}
                  >
                    CURRENT EDUCATION
                  </span>
                </div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>Sanjivani University, Kopargaon</strong>
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)", margin: "2px 0" }}>
                  Currently Pursuing • Direct Admission to Second Year
                </p>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>2026 – 2028</p>
              </div>
            </motion.div>

            {/* --- Education Card 2: Diploma (PREVIOUS) --- */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "center",
                gap: "1.2rem",
              }}
            >
              <FaGraduationCap size={40} color="var(--accent-2)" />
              <div>
                <h4
                  style={{
                    color: "var(--accent-2)",
                    marginBottom: "0.2rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Diploma – Artificial Intelligence and Machine Learning
                </h4>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    marginBottom: "0.2rem",
                  }}
                >
                  <strong>D. Y. Patil Educational Campus, Ambi, Pune</strong> (MSBTE)
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)", margin: "2px 0" }}>
                  Percentage: <strong>91.29%</strong> • Completed
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Academic Performance Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Academic Performance
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.2rem",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <FaChartLine size={32} color="var(--accent)" />
              <div>
                <div style={{ color: "#aaa", fontSize: "0.9rem" }}>Diploma – Artificial Intelligence & Machine Learning</div>
                <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--accent)", marginTop: 4 }}>
                  91.29%
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <FaGraduationCap size={32} color="var(--accent-2)" />
              <div>
                <div style={{ color: "#aaa", fontSize: "0.9rem" }}>Final Semester Marks</div>
                <div style={{ fontSize: "1rem", fontWeight: 600, color: "#ccc", marginTop: 4 }}>
                  [FINAL SEMESTER MARKS – TO BE UPDATED]
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Experience Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Experience
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.2rem",
            }}
          >
            {/* Experience 1 */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "flex-start",
                gap: "1.2rem",
              }}
            >
              <FaBriefcase size={36} color="var(--accent)" style={{ marginTop: 4 }} />
              <div>
                <h4
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.3rem",
                    fontSize: "1.25rem",
                  }}
                >
                  Cyber Security Analysis Intern
                </h4>
                <p style={{ color: "rgba(255,255,255,0.9)", fontWeight: 500, marginBottom: "0.2rem" }}>
                  HummingByte Technology, Nashik
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem" }}>
                  Gained hands-on experience in cybersecurity analysis, security monitoring fundamentals, and threat assessment.
                </p>
              </div>
            </motion.div>

            {/* Experience 2 */}
            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 25px rgba(0,255,200,0.15)",
              }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "1.5rem 2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 0 15px rgba(0,255,200,0.05)",
                display: "flex",
                alignItems: "flex-start",
                gap: "1.2rem",
              }}
            >
              <FaBriefcase size={36} color="var(--accent-2)" style={{ marginTop: 4 }} />
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
                  <h4
                    style={{
                      color: "var(--accent-2)",
                      marginBottom: "0.3rem",
                      fontSize: "1.25rem",
                    }}
                  >
                    System Engineer
                  </h4>
                  <span style={{ fontSize: "0.85rem", color: "var(--accent-2)", fontWeight: 600 }}>
                    Nov 2025 – Feb 2026
                  </span>
                </div>
                <p style={{ color: "rgba(255,255,255,0.9)", fontWeight: 500, marginBottom: "0.2rem" }}>
                  Fencer Services Pvt. Ltd., Pune • <strong>Client Site:</strong> Ador Welding, Chinchwad
                </p>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  Provided IT support and troubleshooting for hardware, software, and network issues. Managed Windows/Linux systems, LAN/Wi-Fi, routers, switches, endpoint security, and maintenance.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* --- Achievements Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          style={{ marginTop: "3rem" }}
        >
          <h3
            style={{
              fontSize: "1.6rem",
              marginBottom: "1.5rem",
              background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Achievements
          </h3>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            {[
              {
                title: "4th Rank – Innovative Idea Presentation",
                detail: "Technical Event 2024-25 • Pimpri Chinchwad Polytechnic (28 February 2025)",
              },
              {
                title: "State-Level Project Competition Participant",
                detail: "TECHNOTSAV-2K26 • Siddhant College of Engineering (In association with MTC Group, 16 February 2026)",
              },
              {
                title: "Research Publication in IRJET",
                detail: 'AutoDefenceX: Autonomous Cyber Security Monitoring Tool using Swarm Intelligence — IRJET Vol 13, Issue 03, March 2026',
              },
              {
                title: "Cyber Security Analysis Internship",
                detail: "HummingByte Technology, Nashik",
              },
              {
                title: "Head of Social Media Team",
                detail: "D. Y. Patil Polytechnic, Pune — Leading the creative media, digital outreach & college event coverage",
              },
              {
                title: "System Engineer at Client Site",
                detail: "Fencer Services Pvt. Ltd. • Client Site: Ador Welding, Chinchwad",
              },
            ].map((ach, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.01, x: 5 }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "12px",
                  padding: "1.2rem 1.6rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <FaTrophy size={22} color="var(--accent)" />
                <div>
                  <h4 style={{ color: "#fff", fontSize: "1.05rem", marginBottom: 2 }}>{ach.title}</h4>
                  <p style={{ color: "#aaa", fontSize: "0.9rem", margin: 0 }}>{ach.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
