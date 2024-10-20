import type { Metadata } from "next";
import localFont from "next/font/local";
import {Rubik} from 'next/font/google';
import { dir } from "i18next";
import initTranslations from "@/app/_config/i18n";
import { i18nConfig } from "@/app/_config/i18nConfig";
import { Providers } from "@/app/_providers/providers";
import Navigation from '@/app/_components/navigation';

import "@/app/_styles/globals.css";

const rubik = Rubik( {
	subsets: [ 'arabic','latin' ],
	variable: '--font-rubik',
	display: 'swap'
})

const geistSans = localFont({
	src: "../_fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "../_fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

const i18Namespaces = ["home", "common"];

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export function generateStaticParams() {
	return i18nConfig.locales.map((locale: string) => ({ locale }));
}

export default async function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: React.ReactNode;
	params: { locale: string };
}>) {
	const { resources } = await initTranslations(locale, i18Namespaces);
	return (
		<html lang={locale} dir={dir(locale)}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${rubik.variable} antialiased`}
			>
				<Providers resources={ resources } locale={ locale } namespaces={ i18Namespaces }>
					<Navigation locale={locale}/>
			<main className="font-rubik">
					{children}
		  </main>
        </Providers>
			</body>
		</html>
	);
}
