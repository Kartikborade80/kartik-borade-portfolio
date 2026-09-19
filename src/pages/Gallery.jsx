import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "./Gallery.css";

const IMAGES = {
  college: [
    {
      id: 1,
      caption: "Head of Social Media Team — Leading the media, coverage, and creative team at D. Y. Patil Polytechnic, Pune 📸",
      photos: ["/gallery/social_media_team.jpg"],
    },
    {
      id: 2,
      caption: "Final Year AI & ML Project Report Submission at D. Y. Patil Polytechnic Campus, Ambi, Pune 🎓",
      photos: ["/gallery/college_project.jpg"],
    },
  ],
  travel: [
    {
      id: 3,
      caption: "Spiritual journey and serene architecture at Prem Mandir, Vrindavan 🛕✨",
      photos: ["/gallery/vrindavan.jpg"],
    },
    {
      id: 4,
      caption: "Monsoon trek across Maharashtra's historic forts and misty peaks ⛰️🌫️",
      photos: ["/gallery/fort_trek.jpg", "/gallery/misty_hills.jpg"],
    },
    {
      id: 5,
      caption: "Coastal expedition and sea fort exploration 🌊🏰",
      photos: ["/gallery/beach_fort.jpg"],
    },
  ],
  events: [
    {
      id: 6,
      caption: "Technical events, state-level project competitions & hackathon presentations 🏆💡",
      photos: ["/certs/technotsav.jpg", "/certs/pimpri-chinchwad.jpeg"],
    },
  ],
};

// ✨ Animation Variants
const pageVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ✨ Tab Switching Animations
const tabContentVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -30, scale: 0.98, transition: { duration: 0.4 } },
};

export default function Gallery() {
  const [tab, setTab] = useState("college");
  const [zoom, setZoom] = useState({ img: null, post: null, index: 0 });

  const openZoom = (post, index) =>
    setZoom({ img: post.photos[index], post, index });

  const closeZoom = () => setZoom({ img: null, post: null, index: 0 });

  const nextImage = () => {
    if (!zoom.post) return;
    const nextIndex = (zoom.index + 1) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[nextIndex], index: nextIndex });
  };

  const prevImage = () => {
    if (!zoom.post) return;
    const prevIndex =
      (zoom.index - 1 + zoom.post.photos.length) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[prevIndex], index: prevIndex });
  };

  return (
    <motion.section
      className="gallery-container"
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* 🌟 Title */}
      <motion.h2 className="gallery-title" variants={childVariants}>
        Gallery
      </motion.h2>

      {/* 🧭 Tabs */}
      <motion.div className="tab-buttons" variants={childVariants}>
        {["college", "travel", "events"].map((type) => (
          <motion.button
            key={type}
            className={`tab ${tab === type ? "active" : ""}`}
            onClick={() => setTab(type)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {type === "college"
              ? "College & Leadership"
              : type === "travel"
              ? "Travel & Expeditions"
              : "Events & Competitions"}
          </motion.button>
        ))}
      </motion.div>

      {/* 🖼️ Posts with Animation on Tab Switch */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab} // Important for AnimatePresence to detect tab change
          className="post-feed"
          variants={tabContentVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {IMAGES[tab].map((post) => (
            <motion.div
              key={post.id}
              className="post-card"
              variants={childVariants}
              whileHover={{ y: -4 }}
            >
              <p className="caption">{post.caption}</p>
              {post.photos && post.photos.length > 0 ? (
                <div
                  className={`photo-grid ${
                    post.photos.length > 1 ? "multi" : "single"
                  }`}
                >
                  {post.photos.map((src, i) => (
                    <motion.div
                      key={i}
                      className="photo-item"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 250 }}
                      onClick={() => openZoom(post, i)}
                    >
                      <img src={src} alt="gallery" />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div
                  style={{
                    padding: "36px 20px",
                    textAlign: "center",
                    background: "rgba(255,255,255,0.02)",
                    borderRadius: "12px",
                    border: "1px dashed rgba(0,255,255,0.18)",
                    color: "#888",
                    fontSize: "14px",
                    marginTop: "10px",
                  }}
                >
                  📷 Photos to be updated — awaiting image uploads
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* 🔍 Zoom Overlay */}
      <AnimatePresence>
        {zoom.img && (
          <motion.div
            className="zoom-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(6px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              key={zoom.img}
              src={zoom.img}
              alt="zoom"
              className="zoom-img"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {zoom.post?.photos.length > 1 && (
              <>
                <button className="nav-btn left" onClick={prevImage}>
                  <ChevronLeft size={32} />
                </button>
                <button className="nav-btn right" onClick={nextImage}>
                  <ChevronRight size={32} />
                </button>
              </>
            )}
            <button className="close-btn" onClick={closeZoom}>
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
