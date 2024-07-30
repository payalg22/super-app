export default function validateForm({name, username, email, phone, consent}) {
    let isValid = true;
    let invalidFields = {
        name: false,
        email: false,
        username: false,
        phone: false,
    };

    if (!name || !email || !username || !phone || !consent) { 
        isValid = false;
        invalidFields = {
            name: !name,
            email: !email,
            username: !username,
            phone: !phone,
            consent: !consent
        };
    }
    const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneRegEx = /^\d{10}$/;
    if (!emailRegEx.test(email) || !phoneRegEx.test(phone)) {
        invalidFields = {
            ...invalidFields,
            email: !emailRegEx.test(email),
            phone: !phoneRegEx.test(phone),
        };
        isValid = false;
    }
    console.log(isValid);
    console.log(invalidFields);
    return {
        isValid,
        invalidFields,
    };

}