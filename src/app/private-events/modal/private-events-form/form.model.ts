
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
    { type: "text", controlName: "contactFormName", placeholder: $localize `Your Name` },
    { type: "email", controlName: "contactFormEmail", placeholder: $localize`Your Email` },
    { type: "tel", controlName: "contactFormTel", placeholder: $localize`Your Phone` }
]

export const privateEventType: SelectDetails[] = [
    { value: "1", text: "Catering" },
    { value: "2", text: $localize `Private Party` }
]

export const contactFormSelectEventType: SelectInput = {
    controlName: "contactFormPartyType", options: privateEventType, label: $localize `Type of event`
}

export const privateEventInput3rdForm: InputDetails[] = [
    { type: "number", controlName: "contactNumberOfPeople", placeholder: $localize `Number of people` },
    { type: "text", controlName: "contactRequestDate", placeholder: $localize `Request a date` },
    { type: "textarea", controlName: "contactAdditionalInfo", placeholder: $localize `Additional information` }
]


export const privateEventSource: SelectDetails[] = [
    { value: "1", text: $localize `Someone told me about you` },
    { value: "2", text: "Website" },
    { value: "3", text: "Google" },
    { value: "4", text: "Social Media" },
    { value: "5", text: "TripAdvisor" }
]

export const contactFormSelectEventSource: SelectInput = {
    controlName: "contactPrivateEventSource", options: privateEventSource, label: $localize `Where did you find out about us?`
}

export const timePickers: TimepickerInput[] = [
    { controlName: "startTimeControl", value: "'06:00PM'", label: "startTimepicker", maxTime: "11:00PM", minTime: "06:00 PM" },
    { controlName: "endTimeControl", value: "'11:00PM'", label: "endTimepicker", maxTime: "03:00AM", minTime: "09:00 PM" }
]

export const datePicker: DatepickerInput = {
    controlName: "datepickerControl", label: $localize `Select Date`
}


export const allFormFields =
    Array.prototype.concat.apply([], [privateEventInputContactForm, contactFormSelectEventType]);