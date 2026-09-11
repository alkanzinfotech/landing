import emailjs from '@emailjs/browser'
import { EMAILJS } from '../data/content'

export async function sendContactForm(form: HTMLFormElement) {
  return emailjs.sendForm(EMAILJS.serviceId, EMAILJS.templateId, form, {
    publicKey: EMAILJS.publicKey,
  })
}
