import { WEB3FORMS } from '../data/content'

interface SubmitOptions {
  subject: string
  fromName: string
}

export async function submitWeb3Form(form: HTMLFormElement, { subject, fromName }: SubmitOptions) {
  const formData = new FormData(form)
  formData.set('access_key', WEB3FORMS.accessKey)
  formData.set('subject', subject)
  formData.set('from_name', fromName)

  const email = formData.get('email')
  if (email) formData.set('replyto', String(email))

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: formData,
  })

  const data = await response.json()
  if (!response.ok || !data.success) {
    throw new Error(data.message || 'Submission failed')
  }
  return data
}
