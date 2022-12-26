export default function Contact() {
  const contact = document.createElement('div')
  const greeting = document.createElement('div')
  const box = document.createElement('div')
  const email = document.createElement('div')
  const emaila = document.createElement('a')
  const phone = document.createElement('div')
  const phonea = document.createElement('a')
  const address = document.createElement('address')

  contact.classList.add('contactpage')
  greeting.classList.add('greeting')
  box.classList.add('box')

  greeting.textContent = 'Contact Us'
  email.textContent = 'Email: '
  phone.textContent = 'Phone: '
  emaila.textContent = 'Real Mail'
  phonea.textContent = '+84392345678'
  address.textContent = 'Ninh Kieu, Can Tho'
  emaila.href = 'mailto:realmail@didi.com'
  phonea.href = 'tel:+84392345678'

  email.appendChild(emaila)
  phone.appendChild(phonea)
  box.appendChild(email)
  box.appendChild(phone)
  box.appendChild(address)

  contact.appendChild(greeting)
  contact.appendChild(box)

  return contact
}
