const namePattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/i;
const emailPattern = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

export const validateName = (name: string): boolean => {
	return !!(name && name.trim().length > 0 && name.match(namePattern));
};

export const validateEmail = (email: string): boolean => {
	return !!(email && email.match(emailPattern));
};

export const validatePassword = (password: string): boolean => {
	return !!(password && password.length > 3);
}