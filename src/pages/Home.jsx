// src/pages/Home.jsx
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark text-white flex flex-col items-center justify-center px-6 py-20">
      {/* Hero Section */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center leading-tight"
      >
        Creative Solutions <br />
        <span className="text-gradient">Infinite Possibilities</span>

      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-lg text-brand-soft text-center max-w-2xl"
      >
        Where Innovation meets Execution. Creative Pair Transforms blod ideas into extraordinary digital experiences that captivate, engage and deliver results.
      </motion.p>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full"
      >
        {/* Person 1 */}
        <div className="bg-brand-card p-6 rounded-2xl shadow-glass text-center">
          <img
            src="/placeholder.jpg"
            alt="Mashal Farhat"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-brand-primary"
          />
          <h3 className="text-xl font-semibold">Mashal Farhat</h3>
          <p className="text-brand-primary font-medium">Creative Visionary</p>
          <p className="text-brand-soft mt-2 text-sm">
            Expert in creating visually stunning and user-friendly designs.
          </p>
        </div>

        {/* Person 2 */}
        <div className="bg-brand-card p-6 rounded-2xl shadow-glass text-center">
          <img
            src="/placeholder.jpg"
            alt="Ammal Raheem"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-brand-primary"
          />
          <h3 className="text-xl font-semibold">Ammal Raheem</h3>
          <p className="text-brand-primary font-medium">Technical Innovator</p>
          <p className="text-brand-soft mt-2 text-sm">
            Specializes in building scalable and robust web & mobile applications.
          </p>
        </div>
      </motion.div>
    </div>
  );

  
}
