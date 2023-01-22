export function declOfNum(n, text_forms) {
	n = Math.abs(n) % 100;
	var n1 = n % 10;
	if (n > 10 && n < 20) { return text_forms[2]; }
	if (n1 > 1 && n1 < 5) { return text_forms[1]; }
	if (n1 === 1) { return text_forms[0]; }
	return text_forms[2];
}

export function getAge(dateString) {
	dateString = dateString.split('.').reverse().join('.');

	let today = new Date();
	let birthDate = new Date(dateString);
	let age = today.getFullYear() - birthDate.getFullYear();

	let m = today.getMonth() - birthDate.getMonth();
	let d = today.getDay() - birthDate.getDay();

	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
}