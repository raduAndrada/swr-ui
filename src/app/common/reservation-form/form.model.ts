
export interface InputDetails {
    type: string;
    controlName: string;
    placeholder: string;
    min?: number;
    max?: number;
}

export interface SelectDetails {
    value: string;
    text: string;
}

export interface SelectInput {
    controlName: string;
    options: SelectDetails[];
    label: string;
}


export const privateEventInputContactForm: InputDetails[] = [
    { type: "text", controlName: "contactFormName", placeholder: $localize `Your Name` },
    { type: "email", controlName: "contactFormEmail", placeholder: $localize`Your Email` },
    { type: "tel", controlName: "contactFormTel", placeholder: $localize`Your Phone` }
]

export const contactFormDates: SelectDetails[] = [
    { value: "06.06.2024", text: $localize  `Joi - 30 Mai` },
    // { value: "31.05.2024", text: $localize `Vineri - 31 Mai` },
    // { value: "01.06.2024", text: $localize `Sambata - 1 Iunie` },
]

export const contactFormDate: SelectInput = {
    controlName: "contactFormDate", options: contactFormDates, label: $localize `Date`
}

export const contactFormHours: SelectDetails[] = [
    { value: "18:00", text: $localize `Ora 18:00` },
    { value: "19:00", text: $localize `Ora 19:00` },
    { value: "20:00", text: $localize `Ora 20:00` },    
    { value: "21:00", text: $localize `Ora 21:00` },

]

export const contactFormHour: SelectInput = {
    controlName: "contactFormHour", options: contactFormHours, label: $localize `Date`
}

export const privateEventInput3rdForm: InputDetails[] = [
    { type: "number", controlName: "contactNumberOfPeople", placeholder: $localize `Number of people` }
]


export const allFormFields =
    Array.prototype.concat.apply([], [privateEventInputContactForm, contactFormDate, privateEventInput3rdForm]);