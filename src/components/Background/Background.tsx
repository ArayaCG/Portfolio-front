import type React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { BackgroundProps } from "./Background.type";

const AnimatedOrbBackground: React.FC<BackgroundProps> = ({ children, backgroundColor = "#121810" }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [orbs, setOrbs] = useState<
        Array<{
            id: number;
            size: number;
            initialX: number;
            initialY: number;
            color: string;
            opacity: number;
            blur: number;
            duration: number;
            delay: number;
        }>
    >([]);

    useEffect(() => {
        const checkIfMobile = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 768);
        };

        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);

        return () => {
            window.removeEventListener("resize", checkIfMobile);
        };
    }, []);

    useEffect(() => {
        const mainOrbsCount = isMobile ? 1 : 2;
        const mediumOrbsCount = isMobile ? 2 : 4;

        const mainOrbs = Array.from({ length: mainOrbsCount }, (_, i) => {
            const size = isMobile ? Math.random() * 300 + 250 : Math.random() * 400 + 350;
            const greenIntensity = Math.floor(Math.random() * 40) + 30;

            return {
                id: i,
                size,
                initialX: i === 0 ? 20 : 80,
                initialY: i === 0 ? 30 : 20,
                color: `rgb(${greenIntensity}, ${greenIntensity + 50}, ${greenIntensity})`,
                opacity: Math.random() * 0.15 + 0.1,
                blur: isMobile ? Math.random() * 60 + 40 : Math.random() * 80 + 60,
                duration: isMobile ? 0 : 200,
                delay: Math.random() * 5,
            };
        });

        const mediumOrbs = Array.from({ length: mediumOrbsCount }, (_, i) => {
            const size = isMobile ? Math.random() * 150 + 100 : Math.random() * 200 + 150;
            const greenIntensity = Math.floor(Math.random() * 50) + 40;
            const positions = isMobile
                ? [
                      [30, 40],
                      [70, 60],
                  ]
                : [
                      [25, 40],
                      [75, 50],
                      [40, 15],
                      [60, 60],
                  ];

            return {
                id: i + mainOrbsCount,
                size,
                initialX: positions[i][0],
                initialY: positions[i][1],
                color: `rgb(${greenIntensity}, ${greenIntensity + 40}, ${greenIntensity})`,
                opacity: Math.random() * 0.25 + 0.15,
                blur: isMobile ? Math.random() * 30 + 20 : Math.random() * 50 + 30,
                duration: isMobile ? 0 : Math.random() * 30 + 160,
                delay: Math.random() * 10,
            };
        });

        setOrbs([...mainOrbs, ...mediumOrbs]);
    }, [isMobile]);

    return (
        <div
            style={{
                position: "relative",
                width: "100%",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor,
                    zIndex: -20,
                }}
            />

            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    zIndex: -10,
                    pointerEvents: "none",
                }}
            >
                <AnimatePresence>
                    {orbs.map((orb) => (
                        <motion.div
                            key={orb.id}
                            style={{
                                position: "absolute",
                                left: `${orb.initialX}%`,
                                top: `${orb.initialY}%`,
                                width: orb.size,
                                height: orb.size,
                                borderRadius: "50%",
                                background: orb.color,
                                filter: `blur(${orb.blur}px)`,
                                opacity: orb.opacity,
                            }}
                            {...(!isMobile && {
                                initial: { scale: 0.95, x: 0, y: 0 },
                                animate: {
                                    scale: [0.95, 1.02, 0.98, 1.01, 0.95],
                                    x: orb.size > 300 ? [0, 5, -5, 3, 0] : [0, 15, -20, 10, 0],
                                    y: orb.size > 300 ? [0, -3, 5, -2, 0] : [0, -15, 10, -8, 0],
                                    opacity: [
                                        orb.opacity,
                                        orb.opacity * 1.1,
                                        orb.opacity * 0.9,
                                        orb.opacity * 1.05,
                                        orb.opacity,
                                    ],
                                },
                                transition: {
                                    duration: orb.duration,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                    delay: orb.delay,
                                },
                            })}
                        />
                    ))}
                </AnimatePresence>
            </div>

            <EnhancedParticleLayer isMobile={isMobile} />

            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    flex: 1,
                }}
            >
                {children}
            </div>
        </div>
    );
};

const EnhancedParticleLayer: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
    const [particles, setParticles] = useState<
        Array<{
            id: number;
            size: number;
            x: number;
            y: number;
            opacity: number;
            speed: number;
            blur: number;
        }>
    >([]);

    useEffect(() => {
        const particleCount = isMobile ? 20 : 60;

        const newParticles = Array.from({ length: particleCount }, (_, i) => {
            const size = isMobile ? Math.random() * 3 + 1 : Math.random() * 5 + 1;
            const blur = Math.random() > 0.7 ? (isMobile ? Math.random() * 2 : Math.random() * 3) : 0;

            return {
                id: i,
                size,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.6 + 0.2,
                speed: isMobile ? 0 : Math.random() * 0.8 + 0.2,
                blur,
            };
        });

        setParticles(newParticles);
    }, [isMobile]);

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -5,
                pointerEvents: "none",
            }}
        >
            {particles.map((particle) => {
                if (isMobile) {
                    return (
                        <div
                            key={particle.id}
                            style={{
                                position: "absolute",
                                left: `${particle.x}%`,
                                top: `${particle.y}%`,
                                width: particle.size,
                                height: particle.size,
                                borderRadius: "50%",
                                backgroundColor: "#a3ffb3",
                                opacity: particle.opacity,
                                filter: particle.blur > 0 ? `blur(${particle.blur}px)` : "none",
                            }}
                        />
                    );
                }

                const xAmplitude = 30 * particle.speed;
                const yAmplitude = 40 * particle.speed;
                const duration = 40 - 20 * particle.speed + Math.random() * 10;

                return (
                    <motion.div
                        key={particle.id}
                        style={{
                            position: "absolute",
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                            width: particle.size,
                            height: particle.size,
                            borderRadius: "50%",
                            backgroundColor: "#a3ffb3",
                            opacity: particle.opacity,
                            filter: particle.blur > 0 ? `blur(${particle.blur}px)` : "none",
                        }}
                        animate={{
                            y: [0, -yAmplitude, yAmplitude / 2, -yAmplitude / 1.5, 0],
                            x: [0, xAmplitude, -xAmplitude / 1.2, xAmplitude / 1.5, 0],
                            opacity: [
                                particle.opacity,
                                particle.opacity * 0.7,
                                particle.opacity * 1.3,
                                particle.opacity * 0.8,
                                particle.opacity,
                            ],
                        }}
                        transition={{
                            duration,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: Math.random() * 10,
                        }}
                    />
                );
            })}
        </div>
    );
};

export default AnimatedOrbBackground;
