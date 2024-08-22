"use client";
import { useState } from "react";
import { animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition } from "framer-motion";

import projectImage from "@/assets/product-image.png";
import { FeatureTab } from "@/components/FeatureTab";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectTab = (index: number) => {
    if (index === selectedTab) return;
    setSelectedTab(index);

    const options: ValueAnimationTransition = {
      duration: 2,
      ease: "easeInOut",
    }

    animate(backgroundSizeX, [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX], options);

    animate(backgroundPositionX, [backgroundPositionX.get(), tabs[index].backgroundPositionX], options);

    animate(backgroundPositionY, [backgroundPositionY.get(), tabs[index].backgroundPositionY], options);
  }

  return <section className="py-20 md:py-24">
    <div className="container">
      <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">Elevate your SEO efforts.</h2>
      <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto tracking-tight text-center mt-5">From small startups to large enterprises, our AI-driven tool has revolutionized the way businesses approach SEO.</p>
      <div className="mt-10 flex flex-col lg:flex-row gap-3">
        {tabs.map((tab, tabIndex) => (
          <FeatureTab
            key={tab.title}
            {...tab}
            selected={selectedTab === tabIndex}
            onClick={() => handleSelectTab(tabIndex)}
          />
        ))}
      </div>
      <div className="border border-white/20 p-2.5 rounded-xl mt-3">
        <motion.div
          className="aspect-video bg-cover border border-white/20 rounded-lg"
          style={{
            backgroundPosition,
            backgroundSize,
            backgroundImage: `url(${projectImage.src})`,
          }}
        ></motion.div>
      </div>
    </div>
  </section>;
};
