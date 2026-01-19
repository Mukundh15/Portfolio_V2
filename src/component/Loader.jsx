import { motion } from "framer-motion";

const Loader = () => {
  const letters = "Portfolio".split("");

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950 overflow-hidden"
    >
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="relative flex flex-col items-center">
        <div className="flex">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: i * 0.05,
                ease: "easeOut",
              }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent"
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-4 h-[2px] w-32 bg-gradient-to-r from-cyan-400 to-blue-500 origin-center"
        />
      </div>
    </motion.div>
  );
};

export default Loader;
