export const REGEX_PHONE = /^[0-9]{9,24}$/i
export const REGEX_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const CARD_NUMBER = /^5[1-5][0-9]{14}$/
export const CARD_EXPIRE_DATE = /^((0[1-9])|(1[0-2]))[\/\.\-]*((2[0-9])|(3[0-9]))$/
export const CARD_CVV = /^[0-9]{3,4}$/
export const POST_CODE = /^[a-z]{1,2}\d[a-z\d]?\s*\d[a-z]{2}$/i
export const NUMBER = /^[0-9]*$/