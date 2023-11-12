import { motion } from "framer-motion";

function FadeIn({ children }) {
  return (
    <motion.div
      key={"section"}
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ y: 25, opacity: 0 }}
      className="flex">
      {children}
    </motion.div>
  );
}

export default FadeIn;
