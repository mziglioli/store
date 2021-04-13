import { makePostRequest } from "./DefaultClient";
import { LanguageForm } from "../../type/form/LanguageForm";

/**
 * make an api call to change the language in header / cookie
 * @param form
 * @returns Promise<todo>
 */
export const modifyLanguage = async (form: LanguageForm) => {
	return makePostRequest("/api/change-language", form);
};