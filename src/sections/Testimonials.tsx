"use client";
import { motion } from "framer-motion";

import { Testimonial } from "@/components/Testimonial";

import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return <section className="py-20 md:py-24">
    <div className="container">
      <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium">Behond Expectations.</h2>
      <p className="text-white/70 text-lg md:text-xl text-center mt-5 tracking-tight max-w-sm md:max-w-md mx-auto">Our revolutionary AI SEO tools have transformed our client&apos;s strategies.</p>
      <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          initial={{
            translateX: "-50%",
          }}
          animate={{
            translateX: "0",
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 45,
          }}
          className="flex gap-5 flex-none pr-5">
          {[...testimonials, ...testimonials].map((testimonial) => (
            <Testimonial  {...testimonial} />
          ))}
        </motion.div>
      </div>
    </div>
  </section>;
};
