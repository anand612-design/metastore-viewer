import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaDatabase, FaChartBar, FaHistory, FaSearch } from "react-icons/fa";
import Lottie from "lottie-react";
import MetadataViewer from "../components/MetadataViewer";

// Import a Lottie animation JSON (you can download one from lottiefiles.com, e.g., a data visualization animation)
import dataAnimation from "../assets/data-visualition.json"; // Placeholder: You'll need to add this file

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Handle dark mode toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Feature data for cards
  const features = [
    {
      icon: <FaDatabase className="text-4xl text-midnight-blue dark:text-frost-white" />,
      title: "Browse Schema & Metadata",
      desc: "Dive into table schemas and metadata with ease.",
    },
    {
      icon: <FaChartBar className="text-4xl text-midnight-blue dark:text-frost-white" />,
      title: "Visualize Snapshots & Evolution",
      desc: "Track table history and changes visually.",
    },
    {
      icon: <FaHistory className="text-4xl text-midnight-blue dark:text-frost-white" />,
      title: "Compare Versions",
      desc: "Compare table versions side-by-side.",
    },
    {
      icon: <FaSearch className="text-4xl text-midnight-blue dark:text-frost-white" />,
      title: "Run Queries with Trino",
      desc: "Query tables directly with Trino integration.",
    },
  ];

  // Mock recent searches (you can replace this with real data later)
  const recentSearches = [
    { path: "s3://test-bucket/data1", format: "Parquet" },
    { path: "s3://test-bucket/data2", format: "Delta" },
    { path: "s3://test-bucket/data3", format: "Iceberg" },
  ];

  return (
    <div className={`min-h-screen transition-all duration-500 ${darkMode ? "bg-midnight-blue text-frost-white" : "bg-frost-white text-midnight-blue"}`}>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-teal to-glacier-blue dark:from-midnight-blue dark:to-slate-teal text-frost-white relative overflow-hidden">
        {/* Animated Blobs */}
        <motion.div
          className="absolute w-72 h-72 bg-mist-gray/20 dark:bg-frost-white/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "10%", left: "10%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-frost-white/10 dark:bg-mist-gray/5 rounded-full blur-3xl"
          animate={{ x: [-50, 50, -50], y: [50, -50, 50] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          style={{ bottom: "20%", right: "15%" }}
        />

        <div className="text-center z-10 px-4">
          {/* Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="w-48 h-48 mx-auto mb-6"
          >
            <Lottie animationData={dataAnimation} loop={true} />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-frost-white to-mist-gray dark:from-mist-gray dark:to-frost-white bg-clip-text text-transparent mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Explore Lakehouse Metadata Effortlessly
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-mist-gray dark:text-glacier-blue"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Visualize, compare, and explore Iceberg, Delta, Parquet, and Hudi tables directly from your S3 or cloud storage without traditional metastores.
          </motion.p>
        </div>
      </section>

      {/* Floating Dark Mode Toggle at Bottom-Left */}
      <motion.div
        className="fixed bottom-6 left-6 z-50"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          <div className="w-14 h-7 bg-mist-gray peer-focus:ring-4 peer-focus:ring-glacier-blue rounded-full peer dark:bg-slate-teal peer-checked:after:translate-x-7 peer-checked:after:border-frost-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-frost-white after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-glacier-blue"></div>
        </label>
      </motion.div>

      {/* Metadata Viewer Section */}
      <motion.section
        className="py-16 px-4 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-slate-teal to-glacier-blue dark:from-glacier-blue dark:to-frost-white bg-clip-text text-transparent">
          Explore Your Metadata
        </h2>
        <div className="bg-frost-white/80 dark:bg-midnight-blue/80 backdrop-blur-md rounded-3xl shadow-xl p-6">
          <MetadataViewer />
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-16 px-4 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-slate-teal to-glacier-blue dark:from-glacier-blue dark:to-frost-white bg-clip-text text-transparent">
          Why Choose Metastore Viewer?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 bg-frost-white/80 dark:bg-midnight-blue/80 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-mist-gray/20 dark:border-frost-white/20"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-slate-teal dark:text-glacier-blue mb-2">{feature.title}</h3>
              <p className="text-mist-gray dark:text-frost-white">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Recent Searches Section */}
      <motion.section
        className="py-16 px-4 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-slate-teal to-glacier-blue dark:from-glacier-blue dark:to-frost-white bg-clip-text text-transparent">
          Recent Searches
        </h2>
        <div className="flex overflow-x-auto space-x-4 pb-4">
          {recentSearches.map((search, index) => (
            <motion.div
              key={index}
              className="min-w-[250px] p-4 bg-frost-white/80 dark:bg-midnight-blue/80 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-mist-gray/20 dark:border-frost-white/20"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-slate-teal dark:text-glacier-blue">{search.path}</h3>
              <p className="text-mist-gray dark:text-frost-white">Format: {search.format}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-slate-teal to-glacier-blue dark:from-midnight-blue dark:to-slate-teal text-frost-white text-center">
        <motion.div
          className="flex justify-center gap-6 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-2xl"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="text-2xl"
          >
            <FaGithub />
          </motion.a>
        </motion.div>
        <p className="text-sm">© 2025 Metastore Viewer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;