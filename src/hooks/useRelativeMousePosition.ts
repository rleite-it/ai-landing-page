import { useMotionValue } from "framer-motion";
import { RefObject, useEffect } from "react";

export const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const updateMousePosition = (event: MouseEvent) => {
		if (!to.current) return;

		const { top, left } = to.current.getBoundingClientRect();

		mouseX.set(event.x - left);
		mouseY.set(event.y - top);
	};

	useEffect(() => {
		window.addEventListener("mousemove", updateMousePosition);

		return () => {
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, []);

	return [mouseX, mouseY];
};
