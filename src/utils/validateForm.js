export const validateFormData = (email,password,confirmPassword) => {
    const email_verfify = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const password_verify = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const confirm_password_verify = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(confirmPassword);

    if(!email_verfify)return "E-mail is not valid";
    if(!password_verify) return "Password is not valid";
    if(!confirm_password_verify) return "Password is not valid";

    return null;
}