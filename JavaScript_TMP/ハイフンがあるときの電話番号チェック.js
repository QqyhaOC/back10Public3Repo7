let isNumber = false;
let isMobile = false;

let phone1 = /^0\d-?\d{4}-?\d{4}$/;
let phone2 = /^0\d{3}-?\d{2}-?\d{4}$/;
let phone3 = /^(010|070|080|090)-?\d{4}-?\d{4}$/;

if (
    text.match(phone1) ||
    text.match(phone2) ||
    text.match(phone3)
) {
    isNumber = true;
    if (text.match(phone3)) {
        isMobile = true;
    }
} else if (text.length == 4) {
    /*isNumber = true;
    isMobile = true;*/
}


({
    "isNumber": isNumber,
    "isMobile": isMobile
})