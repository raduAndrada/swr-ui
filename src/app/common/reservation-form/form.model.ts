
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
    { type: "text", controlName: "contactFormName", placeholder: `Nume` },
    { type: "email", controlName: "contactFormEmail", placeholder: `Email` },
    { type: "tel", controlName: "contactFormTel", placeholder: `Telefon` }
]

export const contactFormDates: SelectDetails[] = [
    { value: "06.06.2024", text: `Joi - 30 Mai` }

]

export const contactFormDate: SelectInput = {
    controlName: "contactFormDate", options: contactFormDates, label: `Data`
}

export const contactFormHours: SelectDetails[] = [
    { value: "18:00", text: `Ora 18:00` },
    { value: "19:00", text: `Ora 19:00` },
    { value: "20:00", text: `Ora 20:00` },
    { value: "21:00", text: `Ora 21:00` },

]

export const contactFormHour: SelectInput = {
    controlName: "contactFormHour", options: contactFormHours, label: `Data`
}

export const privateEventInput3rdForm: InputDetails[] = [
    { type: "number", controlName: "contactNumberOfPeople", placeholder: `Numarul de persoane` }
]


export const allFormFields =
    Array.prototype.concat.apply([], [privateEventInputContactForm, contactFormDate, privateEventInput3rdForm]);