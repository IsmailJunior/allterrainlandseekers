'use client'
import type { FC } from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay} from 'swiper/modules';
import "swiper/css";
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

import tobi_anna_back_nature_view from '@/public/images/tobi&anna_back_nature_view.png';
import tobi_anna_on_the_truck from '@/public/images/tobi&anna_on_the_truck.png';
import truck from '@/public/images/truck.png';

const FeaturedGallerySwiper: FC = () => {
	return (
		<Swiper className="w-full h-[750px] filter brightness-50" noSwiping allowTouchMove={false} modules={[EffectFade, Autoplay]} speed={1000} effect="fade" autoplay={{delay: 4000, disableOnInteraction: false}}>
			<SwiperSlide>
				<Image alt="Tobi and Anna laying back with back view." fill className="object-cover object-left" src={tobi_anna_back_nature_view.src}/>
			</SwiperSlide>
			<SwiperSlide>
				<Image alt="Tobi and Anna Truck" fill className="object-cover object-left" src={truck.src}/>
			</SwiperSlide>
			<SwiperSlide>
				<Image alt="Tobi and Anna on the top of their truck." fill className="object-cover object-left" src={ tobi_anna_on_the_truck.src }/>
			</SwiperSlide>
		</Swiper>
	);
};

export default FeaturedGallerySwiper;