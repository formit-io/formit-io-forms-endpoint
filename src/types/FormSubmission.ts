export type FormSubmission = {
  form: {
    [name: string]: String | String[]
  }
  submitted: Date
  referrer: String
  target: String
}
