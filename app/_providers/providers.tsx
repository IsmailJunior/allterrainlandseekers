"use client";
import type { FC, ReactNode } from "react";
import { TranslationsProvider } from "@/app/_providers/translations-providers";
type providersType = {
	children: ReactNode;
	locale: string;
	namespaces: string[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	resources: any;
};

export const Providers: FC<providersType> = ({
	children,
	locale,
	namespaces,
	resources,
}) => {
	return (
		<TranslationsProvider
			locale={locale}
			namespaces={namespaces}
			resources={resources}
		>
			{children}
		</TranslationsProvider>
	);
};