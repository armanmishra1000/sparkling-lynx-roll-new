"use client";

import React from "react";
import { motion } from "framer-motion";

const EraSection = () => {
    const points = [
        "NO MORE FEAR OF SPEAKING",
        "NO MORE FREEZING",
        "NO MORE STUDYING A LANGUAGE",
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section className="relative pt-40 pb-20 overflow-hidden bg-background">
            {/* Background decoration matching Hero style */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-pink-50/20 via-purple-50/20 to-blue-50/20 rounded-full blur-[120px] opacity-60"></div>
            </div>

            <div className="container mx-auto max-w-7xl px-6 relative z-10">
                <div className="flex flex-col items-center text-center space-y-12">
                    {/* Main Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <h2 className="text-sm font-black tracking-[0.2em] uppercase text-gray-400">
                            The Paradigm Shift
                        </h2>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] text-gray-900 max-w-4xl">
                            WELCOME TO THE{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
                                NEW ERA
                            </span>{" "}
                            OF LANGUAGE ACQUISITION.
                        </h1>
                    </motion.div>

                    {/* Sub Title */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl md:text-2xl font-semibold tracking-wide text-gray-600 uppercase"
                    >
                        MEET SOPHIE. A NATIVE SPEAKER IN YOUR POCKET.
                    </motion.p>

                    {/* Problem Solving List */}
                    <div className="w-full max-w-3xl pt-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="mb-8"
                        >
                            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-widest">
                                What are we solving for?
                            </h3>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid gap-6 md:grid-cols-3"
                        >
                            {points.map((point, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="p-8 rounded-[2rem] bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300"
                                >
                                    <p className="text-sm font-black tracking-tight text-gray-900 leading-tight">
                                        {point}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EraSection;
