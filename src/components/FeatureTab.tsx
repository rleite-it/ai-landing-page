import React, { ComponentPropsWithoutRef, useEffect, useRef } from 'react'
import { DotLottieCommonPlayer, DotLottiePlayer } from '@dotlottie/react-player'
import { animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition } from 'framer-motion';

interface TabProps extends ComponentPropsWithoutRef<'div'> {
    icon: string,
    title: string,
    isNew: boolean,
    backgroundPositionX: number,
    backgroundPositionY: number,
    backgroundSizeX: number,
    selected: boolean,
}

export const FeatureTab = (tab: TabProps) => {
    const tabRef = useRef<HTMLDivElement | null>(null);
    const dotLottieRef = useRef<DotLottieCommonPlayer | null>(null);

    const xPercentage = useMotionValue(0);
    const yPercentage = useMotionValue(0);

    const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent)`;

    useEffect(() => {
        if (!tabRef.current || !tab.selected) return;

        xPercentage.set(0);
        yPercentage.set(0);

        const { width, height } = tabRef.current?.getBoundingClientRect();
        const circunference = height * 2 + width * 2;

        const times = [0, width / circunference, (width + height) / circunference, (width * 2 + height) / circunference, 1];

        const options: ValueAnimationTransition = {
            times,
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
        }

        animate(xPercentage, [0, 100, 100, 0, 0], options);

        animate(yPercentage, [0, 0, 100, 100, 0], options);
    }, [tab.selected]);

    const handleTabHover = () => {
        if (!dotLottieRef.current) return;
        dotLottieRef.current.seek(0);
        dotLottieRef.current.play();
    }

    return (
        <div ref={tabRef} onClick={tab.onClick} onMouseEnter={handleTabHover} className="relative border border-white/15 flex items-center p-2.5 rounded-xl gap-2.5 lg:flex-1">
            {tab.selected && (
                <motion.div
                    style={{
                        maskImage,
                    }}
                    className='absolute inset-0 -m-px border border-[#a369ff] rounded-xl'>
                </motion.div>
            )}
            <div className="size-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
                <DotLottiePlayer ref={dotLottieRef} src={tab.icon} className="size-5" autoplay />
            </div>
            <div className="font-medium">{tab.title}</div>
            {tab.isNew && (
                <div className="text-sm rounded-full px-2 py-0.5 bg-[#8c44ff] text-black font-semibold">new</div>
            )}
        </div>
    )
}
