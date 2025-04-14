import type React from "react"
import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import GlowingOrb from "../Orb/Orb"
import { BackgroundProps } from "./Background.type"

const EnhancedBackground: React.FC<BackgroundProps> = ({ children, backgroundColor = "#121810" }) => {
  const config = {
    orbCount: 20,
    mainOrbSize: 2000,
    mainOrbOpacity: 0.7,
  }

  const [secondaryOrbs, setSecondaryOrbs] = useState<
    Array<{
      id: number
      size: number
      x: string
      y: string
      color: string
      opacity: number
      blur: number
      duration: number
      scale: [number, number]
    }>
  >([])

  useEffect(() => {
    const orbs = Array.from({ length: config.orbCount - 1 }, (_, i) => {
      const size = Math.random() * 300 + 200
      const greenIntensity = Math.floor(Math.random() * 40) + 30

      return {
        id: i,
        size,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        color: `rgb(${greenIntensity}, ${greenIntensity + 50}, ${greenIntensity})`,
        opacity: Math.random() * 0.3 + 0.2,
        blur: Math.random() * 50 + 30,
        duration: Math.random() * 20 + 15,
        scale: [1, 1 + Math.random() * 0.1] as [number, number],
      }
    })

    setSecondaryOrbs(orbs)
  }, [config.orbCount])

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: backgroundColor,
          zIndex: -20,
        }}
      />

      <GlowingOrb
        size={config.mainOrbSize}
        x="-20%"
        y="30%"
        color="#1a5c2e"
        opacity={config.mainOrbOpacity}
        blur={100}
        duration={25}
        scale={[1, 1.03]}
      />

      <AnimatePresence>
        {secondaryOrbs.map((orb) => (
          <GlowingOrb
            key={orb.id}
            size={orb.size}
            x={orb.x}
            y={orb.y}
            color={orb.color}
            opacity={orb.opacity}
            blur={orb.blur}
            duration={orb.duration}
            scale={orb.scale}
          />
        ))}
      </AnimatePresence>

      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  )
}

export default EnhancedBackground
