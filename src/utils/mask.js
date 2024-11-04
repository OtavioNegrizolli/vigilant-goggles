export function cpfMask(value) {
    if (value) {
        /** @type {string} */
        const clearValue = value.replace(/\D/gi, "");
        const p1 = clearValue.substring(0, 3);
        const p2 = clearValue.substring(3, 6);
        const p3 = clearValue.substring(6, 9);
        const p4 = clearValue.substring(9, 11);

        return (
            p1 +
            (p2 ? `.${p2}` : "") +
            (p3 ? `.${p3}` : "") +
            (p4 ? `-${p4}` : "")
        );
    }
    return value;
}

/**
 * trims the string to the length
 * @param {number} max
 * @param {string} value
 * @returns {string}
 */
export function limitLength(max, value) {
    return value ? `${value}`.substring(0, max) : value;
}

/**
 * mask a CEP
 * @param {string} value
 * @returns {string}
 */
export function cepMask(value) {
    if (value) {
        /** @type {string} */
        const clearValue = value.replace(/\D/gi, "");
        const p1 = clearValue.substring(0, 2);
        const p2 = clearValue.substring(2, 5);
        const p3 = clearValue.substring(5, 8);

        return p1 + (p2 ? `.${p2}` : "") + (p3 ? `-${p3}` : "");
    }
    return value;
}

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
export function dateMask(value) {
    if (value) {
        const clearValue = value.replace(/\D/gi, "");
        console.log(clearValue);
        let day = parseInt(clearValue.substring(0, 2));
        let month = parseInt(clearValue.substring(2, 4));
        let year = parseInt(clearValue.substring(4, 8));

        // validar se é ano bisexto
        if (month) {
            if (month > 12) month = 1;
            if (year && month == 2) {
                if (
                    parseInt(year) % 4 === 0 &&
                    (parseInt(year) % 100 !== 0 || parseInt(year) % 400 === 0)
                ) {
                    if (day > 29) {
                        day = 29;
                    }
                }
            } else {
                if (daysInMonth[month - 1] < day) {
                    day = daysInMonth[month - 1];
                }
            }
            if (year) month = month.toString().padStart(2, "0");
        }
        if (day) {
            if (month) {
                day = day.toString().padStart(2, "0");
            }
        } else {
            day = "";
        }

        return day + (month ? `/${month}` : "") + (year ? `/${year}` : "");
    }
    return value;
}

export function phoneMask(value) {
    if (value && value.length > 0) {
        /** @type {string} */
        const clearValue = value.replace(/\D/gi, "");
        if (clearValue.length < 11) {
            const ddd = clearValue.substring(0, 2);
            const p1 = clearValue.substring(2, 6);
            const p2 = clearValue.substring(6, 10);
            // const p4 = clearValue.substring(9, 11);

            return `(${ddd}${ddd.length > 1 ? ")" : ""}${
                p1 ? ` ${p1}${p2 ? `-${p2}` : ""}` : ""
            }`;
        }
        const ddd = clearValue.substring(0, 2);
        const p1 = clearValue.substring(2, 7);
        const p2 = clearValue.substring(7, 11);

        return `(${ddd}${ddd.length > 1 ? ")" : ""}${
            p1 ? ` ${p1}${p2 ? `-${p2}` : ""}` : ""
        }`;
    }
    return value;
}

/**
 * @param {KeyboardEvent} evt
 */
export function moneyMask(evt) {
    const value = evt.target.value;
    if (value && value.length > 0) {
        /** @type {string} */
        const clearValue = value.replace(/\D/gi, "");
        const maskedValue = clearValue
            .replace(/(\d)(\d{2})$/g, "$1,$2")
            .replace(/(?=(\d{3})+(\D))\B/, ".");

        evt.target.value = maskedValue;
    }
}
