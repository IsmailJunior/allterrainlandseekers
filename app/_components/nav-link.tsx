import type { FC } from 'react';
import Link from 'next/link';
import { cn } from '@/app/_lib/utils';

const NavLink: FC<{label: string, href: string, className: string}> = ({label, href, className}) =>
{
	return (
		<Link href={href} className={cn(className, 'bg-green-600/75 p-2 font-semibold rounded-md hover:bg-green-800 transition-all')}>{label}</Link>
	)
};

export default NavLink;