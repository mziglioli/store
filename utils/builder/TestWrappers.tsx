/* istanbul ignore file */
import * as React from "react";
import { render, RenderResult } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import {buildMeta, getMessagesTranslated} from "./TestFunctionUtils";

interface PageWrapperProps {
	meta?: any;
	overrides?: { [key: string]: unknown };
}

export const ComponentTestWrapper = (Component: React.ReactElement, overrides?: PageWrapperProps): RenderResult => {
	const meta = buildMeta({ overrides });
	const translations = getMessagesTranslated(meta.language);
	return render(
		<IntlProvider locale={meta.language} messages={translations}>
			{Component}
		</IntlProvider>
	);
};
