import type { Variants } from "framer-motion";

// Common easing functions as cubic-bezier arrays
const easeOutCubic = [0.25, 0.46, 0.45, 0.94] as const;

export const textVariant = (delay?: number): Variants => {
    return {
        hidden: {
            y: -50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                duration: 1.25,
                delay: delay,
            },
        },
    };
};

export const fadeIn = (
    direction: string, 
    type?: string, 
    delay?: number, 
    duration?: number
): Variants => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: (type && type !== "" ? type : "spring") as any,
                delay: delay || 0,
                duration: duration || 1,
                ease: easeOutCubic,
            },
        },
    };
};

export const zoomIn = (delay?: number, duration?: number): Variants => {
    return {
        hidden: {
            scale: 0,
            opacity: 0,
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "tween" as const,
                delay: delay || 0,
                duration: duration || 1,
                ease: easeOutCubic,
            },
        },
    };
};

export const slideIn = (
    direction: string, 
    type?: string, 
    delay?: number, 
    duration?: number
): Variants => {
    return {
        hidden: {
            x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
            y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: (type && type !== "" ? type : "spring") as any,
                delay: delay || 0,
                duration: duration || 1,
                ease: easeOutCubic,
            },
        },
    };
};

export const staggerContainer = (staggerChildren?: number, delayChildren?: number): Variants => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren || 0,
                delayChildren: delayChildren || 0,
            },
        },
    };
};



