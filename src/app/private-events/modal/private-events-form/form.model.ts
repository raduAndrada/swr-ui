
export interface InputDetails {
    type: string;
    controlName: string;
    placeholder: string;
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

export interface TimepickerInput {
    controlName: string;
    value: string;
    label: string;
    minTime: string;
    maxTime: string;
}

export interface DatepickerInput {
    controlName: string;
    label: string;
}


export const privateEventInputContactForm: InputDetails[] = [
    { type: "text", controlName: "contactFormName", placeholder: "Your Name" },
    { type: "email", controlName: "contactFormEmail", placeholder: "Your Email" },
    { type: "tel", controlName: "contactFormTel", placeholder: "Your Phone" },
    { type: "text", controlName: "contactFormCompany", placeholder: "Your Company's name" },
]

export const privateEventType: SelectDetails[] = [
    { value: "1", text: "Catering" },
    { value: "2", text: "Hosting" }
]

export const contactFormSelectEventType: SelectInput = {
    controlName: "contactFormPartyType", options: privateEventType, label: "Type of event"
}

export const privateEventInput3rdForm: InputDetails[] = [
    { type: "number", controlName: "contactNumberOfPeople", placeholder: "Number of people" },
    { type: "text", controlName: "contactRequestDate", placeholder: "Request a date" },
    { type: "textarea", controlName: "contactAdditionalInfo", placeholder: "Additional information" }
]


export const privateEventSource: SelectDetails[] = [
    { value: "1", text: "Someone told me about you" },
    { value: "2", text: "Website" },
    { value: "3", text: "Google" },
    { value: "4", text: "Social Media" },
    { value: "5", text: "TripAdvisor" }
]

export const contactFormSelectEventSource: SelectInput = {
    controlName: "contactPrivateEventSource", options: privateEventSource, label: "Where did you find out about us?"
}

export const timePickers: TimepickerInput[] = [
    { controlName: "startTimeControl", value: "'06:00PM'", label: "startTimepicker", maxTime: "11:00PM", minTime: "06:00 PM" },
    { controlName: "endTimeControl", value: "'11:00PM'", label: "endTimepicker", maxTime: "03:00AM", minTime: "09:00 PM" }
]

export const datePicker: DatepickerInput = {
    controlName: "datepickerControl", label: "Select Date"
}


export const allFormFields =
    Array.prototype.concat.apply([], [privateEventInputContactForm, contactFormSelectEventType, privateEventInput3rdForm, contactFormSelectEventSource, timePickers]);