const namePattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/i;
const emailPattern = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;

export const validateName = name => {
	if (name && name.trim().length > 0 && name.match(namePattern)) {
		return true;
	}
	return false;
};

export const validateEmail = email => {
	if (email && email.match(emailPattern)) {
		return true;
	}
	return false;
};

