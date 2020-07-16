export const emailValidator = (email = "") => {
    const re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g
    return re.test(String(email).toLocaleLowerCase())
}

export function LoginValidtors(Email, Password) {
    if (Email === '') {
        return { ok: false, message: 'Please type your email' }
    } else {
        if (emailValidator(Email)) {
            if (Password === '') {
                return { ok: false, message: 'Please type your password' }
            } else {
                return { ok: true, message: 'valid form' }
            }
        } else {
            return { ok: false, message: 'Indalid Email' }
        }
    }
}

export function orgFormValidation(Name, Description, Category, Status) {
    if (Name === '') {
        return { ok: false, message: 'Please type shop name' }
    } else {
        if (Description === '') {
            return { ok: false, message: 'Please type shop description' }
        } else {
            if (Category === '') {
                return { ok: false, message: 'Please type shop category' }
            } else {
                if (Status === '') {
                    return { ok: false, message: 'Please choose shop status' }
                } else {
                    return { ok: true, message: 'valid form' }
                }
            }
        }
    }
}

export function objectValidator(obj) {
    if ((Object.keys(obj).length === 0 && obj.constructor === Object)) {
        return true
    }
    return false
}