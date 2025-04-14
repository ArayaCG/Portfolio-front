import { motion } from "framer-motion"
import type React from "react"
import type { Buble } from "./Orb.type"

const GlowingOrb: React.FC<Buble> = ({
  size,
  x,
  y,
  color,
  opacity = 0.6,
  blur = 60,
  duration = 20,
  scale = [1, 1.05],
}) => {
  return (
    <motion.div
      style={{
        position: "absolute",
        width: size,
        height: size,
        left: x,
        top: y,
        borderRadius: "50%",
        background: `radial-gradient(circle at center, ${color} 0%, rgba(0,0,0,0) 70%)`,
        filter: `blur(${blur}px)`,
        opacity,
        mixBlendMode: "screen",
      }}
      animate={{
        scale: scale,
      }}
      transition={{
        scale: {
          duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
    />
  )
}

export default GlowingOrb