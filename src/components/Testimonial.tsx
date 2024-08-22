import React from "react";
import Image, { StaticImageData } from "next/image";

interface TestimonialProps {
    text: string,
    name: string,
    title: string,
    avatarImg: StaticImageData,
}

export const Testimonial = (testimonial: TestimonialProps) => {
    return (
        <div key={testimonial.name} className="border border-white/15 rounded-xl p-6 md:p-10 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,.3),black)] max-w-xs md:max-w-md flex-none select-none">
            <div className="text-lg md:text-2xl tracking-tight">{testimonial.text}</div>
            <div className="flex items-center gap-3 mt-5">
                <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
                    <Image src={testimonial.avatarImg} alt={`Avatar for ${testimonial.name}`} className="size-11 rounded-lg grayscale" />
                </div>
                <div>
                    <div>{testimonial.name}</div>
                    <div className="text-white/50 text-sm">{testimonial.title}</div>
                </div>
            </div>
        </div>
    )
}
