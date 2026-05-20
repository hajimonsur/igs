import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaSchool } from "react-icons/fa";

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <header className="  py-5" ref={ref}>
      {/* bg-light */}
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
        {/* Left Side Content */}
        <motion.div
          className="text-center text-lg-start mb-4 mb-lg-0"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
          whileInView={{
            y: [0, -10],
            transition: { type: "spring", stiffness: 100, damping: 10 },
          }}
        >
          <h1 className="display-5 fw-bold text-primary mb-3">
            Iponri Grammar School
          </h1>
          <p className="lead text-secondary mb-4">
            Empowering Students for a Brighter Tomorrow with strong Academic,
            Moral and Religious Values.
          </p>
          <motion.a
            href="#contact"
            className="btn btn-primary btn-lg mt-3 shadow-sm"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaSchool className="me-2" /> Enroll Now
          </motion.a>
        </motion.div>

        {/* Right Side Image (Hidden on Mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
          whileInView={{
            y: [0, -10],
            transition: { type: "spring", stiffness: 100, damping: 10 },
          }}
          className="mt-4 mt-lg-0 d-none d-lg-block" // Image hidden on mobile
        >
          <img
            src="NEWIGSLOGO.png"
            alt="School Students"
            className="img-fluid"
            style={{
              maxHeight: "300px", // Reduced maxHeight for mobile
              objectFit: "contain", // Changed to contain to make image scale nicely
            }}
          />
        </motion.div>
      </div>
    </header>
  );
}

export default HeroSection;
