"use client";
import type { FC, ReactNode } from "react";
import { I18nextProvider } from "react-i18next";
import { createInstance } from "i18next";
import initTranslations from "@/app/_config/i18n";

type providersType = {
	children: ReactNode;
	locale: string;
	namespaces: string[];
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	resources: any;
};

export const TranslationsProvider: FC<providersType> = ({
	children,
	locale,
	namespaces,
	resources,
}) => {
	const i18n = createInstance();
	initTranslations(locale, namespaces, i18n, resources);
	return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};