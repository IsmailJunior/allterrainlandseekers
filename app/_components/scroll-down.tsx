'use client';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const AnimateChevron = {
	initial: {
		y: 0
	},
	animate: {
		y: -10
	},

}

const ScrollDown: FC = () =>
{
	return (
		<motion.div
			variants={ AnimateChevron }
			initial='initial'
			animate='animate'
			transition={ { repeat: Infinity, repeatDelay: 0.300, repeatType: 'reverse', ease: 'easeInOut' } }>
			<ChevronDown width={40} height={40}/>
		</motion.div>
	)
};

export default ScrollDown;