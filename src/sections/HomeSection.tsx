"use client"

import {MotionDiv} from "@/lib/motion";
import {Text} from "@/components/Text";
import {Button} from "@/components/Button";
import {DESCRIPTION} from "@/lib/constants";
import {ChevronRight} from "lucide-react";
import {cn} from "@/lib/utils";
import {motion, useInView} from "framer-motion";
import {useRef} from "react";

export const HomeSection = () => {

    const fadeInRef = useRef(null);
    const fadeInInView = useInView(fadeInRef, {
        once: true,
    });

    const fadeUpVariants = {
        initial: {
            opacity: 0,
            y: 24,
        },
        animate: {
            opacity: 1,
            y: 0,
        },
    };


    return (

        <div>


            <div className={""}>
                <div
                    className="absolute inset-0 bg-grid-slate-800/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"
                    style={{
                        maskImage: "linear-gradient(to bottom, transparent, black)",
                        WebkitMaskImage: "linear-gradient(to bottom, transparent, black)",
                    }}
                />

            </div>
            <section className="relative flex flex-col items-center justify-center gap-8">

                <div className="flex flex-col items-center gap-4 text-center">

                    <MotionDiv
                        className="relative max-w-5xl"
                        initial={{opacity: 0, top: 20}}
                        animate={{opacity: 1, top: 0}}
                        transition={{duration: 0.8, ease: "easeOut"}}
                    >

                        <Text size="h1" variant="radialGradientWhite" className="font-display">
                            Décroche ton
                            <span
                                className="bg-gradient-to-r from-blue-600 to-indigo-900 bg-clip-text"> Stage&nbsp;</span>
                            en toute&nbsp;
                            <span
                                className="bg-gradient-to-r from-blue-600 to-indigo-900 bg-clip-text text-transparent">Simplicité&nbsp;</span>
                            !
                        </Text>
                    </MotionDiv>
                    <MotionDiv
                        className="relative max-w-2xl"
                        initial={{opacity: 0, top: 20}}
                        animate={{opacity: 1, top: 0}}
                        transition={{duration: 0.6, delay: 0.2, ease: "easeOut"}}
                    >
                        <Text className="font-display">{DESCRIPTION}</Text>
                    </MotionDiv>
                </div>


            </section>

            <motion.div
                animate={fadeInInView ? "animate" : "initial"}
                variants={fadeUpVariants}
                className="flex flex-col gap-4 lg:flex-row"
                initial={false}
                transition={{
                    duration: 0.6,
                    delay: 0.3,
                    ease: [0.21, 0.47, 0.32, 0.98],
                    type: "spring",
                }}
            >
                <a
                    href="#"
                    className={cn(
                        // colors
                        "bg-black  text-white shadow hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",

                        // layout
                        "group relative inline-flex h-9 w-full items-center justify-center gap-2 overflow-hidden whitespace-pre rounded-md px-4 py-2 text-base font-semibold tracking-tighter focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 md:flex",

                        // animation
                        "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2",
                    )}
                >
                    Commencez maintenant
                    <ChevronRight
                        className="size-4 translate-x-0 transition-all duration-300 ease-out group-hover:translate-x-1"/>
                </a>
            </motion.div>
        </div>
    );
};