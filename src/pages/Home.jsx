import { motion } from 'framer-motion'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-20">
      <motion.h2 
        className="text-5xl font-extrabold mb-6 text-brand-accent"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-white leading-tight">
          Creative Solutions <br />
          <span className="text-brand-primary">Infinite Possibilities</span>
        </h1>

      </motion.h2>
      <p className="max-w-2xl text-lg text-gray-300">
        Where Innovation Means Execution. Creative Pair Transforms bold ideas into extraordinary digital experiences that captivate, engage and deliver results.
      </p>
      <img src="/placeholder.jpg" alt="Hero" className="mt-10 rounded-2xl shadow-lg w-full max-w-3xl" />
    </section>
  )
}
