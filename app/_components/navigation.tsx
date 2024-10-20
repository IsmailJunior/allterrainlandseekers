import type { FC } from 'react';
import Link from 'next/link';
import {Instagram} from 'lucide-react';
import initTranslations from '@/app/_config/i18n';
import FeaturedGallerySwiper from '@/app/_components/featured-gallery-swiper';
import NavLink from '@/app/_components/nav-link';
import ScrollDown from '@/app/_components/scroll-down';

const i18Namespaces = ["common"];

const Navigation: FC<{locale: string}> = async ({locale}) =>
{
	const { t } = await initTranslations( locale, i18Namespaces )
	const navLinks = [
		{ label: t("common:navLinks.home.label"), href: t("common:navLinks.home.href")},
		{ label: t("common:navLinks.blog.label"), href: t("common:navLinks.blog.href") },
		{ label: t("common:navLinks.map.label"), href: t("common:navLinks.map.href") },
		{ label: t("common:navLinks.podcast.label"), href: t("common:navLinks.podcast.href") },
		{ label: t("common:navLinks.people.label"), href: t("common:navLinks.people.href") },
		{ label: t( "common:navLinks.videos.label" ), href: t( "common:navLinks.videos.href" ) },
		{ label: t( "common:navLinks.topics.label" ), href: t( "common:navLinks.topics.href" ) },
		{ label: t( "common:navLinks.counter.label" ), href: t( "common:navLinks.counter.href" ) },
		{ label: t( "common:navLinks.about.label" ), href: t( "common:navLinks.about.href" ) },
		{ label: t("common:navLinks.guide.label"), href: t("common:navLinks.guide.href") },]
	return (
		<nav>
			<div className='absolute flex top-0 left-0 z-10 text-white py-4 px-8 border-b border-b-1 w-full'>
				<Link className='hover:text-green-500 transition-all' target='_blank' href='https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fallterrainlandseekers%2F&is_from_rle'><Instagram width={50} height={50}/></Link>
			</div>
			<div className='absolute font-rubik space-y-1 flex flex-col justify-center items-center text-white font-extralight w-full text-center m-auto top-1/2 translate-y-32 z-10'>
			<h1 className='text-4xl'>{ t( "home:title" ) }</h1>
			<p>{ t( 'home:description' ) }</p>
			<div className='flex flex-wrap justify-center items-center m-auto mx-2'>
				{ navLinks.map( ( navlink, index ) => (
					<NavLink className='m-2' label={navlink.label} href={navlink.href} key={index} />
				))}
				</div>
				<ScrollDown />
			</div>
			<FeaturedGallerySwiper />
		</nav>
	)
};

export default Navigation;