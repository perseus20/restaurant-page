import Menu from './menu'
import Contact from './contact'

function Header() {
  const header = document.createElement('header')
  const logo = document.createElement('div')
  const menu = document.createElement('div')
  const contact = document.createElement('div')
  const content = document.querySelector('#content')
  logo.textContent = 'DiDi Restaurant'
  menu.textContent = 'Menu'
  contact.textContent = 'Contact'

  header.classList.add('header')
  logo.classList.add('logo')
  menu.classList.add('menu')
  contact.classList.add('contact')

  header.appendChild(logo)
  header.appendChild(menu)
  header.appendChild(contact)

  logo.addEventListener('click', () => {
    content.removeChild(content.lastChild)
    content.appendChild(Home())
  })
  menu.addEventListener('click', () => {
    content.removeChild(content.lastChild)
    content.appendChild(Menu())
  })
  contact.addEventListener('click', () => {
    content.removeChild(content.lastChild)
    content.appendChild(Contact())
  })

  return header
}

function Home() {
  const home = document.createElement('div')
  const welcome = document.createElement('div')
  const nowrap = document.createElement('span')
  const greeting = document.createElement('div')

  welcome.textContent = 'Welcome to '
  nowrap.textContent = 'DiDi Restaurant'
  greeting.textContent = 'We got all you need'

  home.classList.add('homepage')
  welcome.classList.add('welcome')
  nowrap.classList.add('no-wrap')
  greeting.classList.add('greeting')

  welcome.appendChild(nowrap)

  home.appendChild(welcome)
  home.appendChild(greeting)

  return home
}

document.querySelector('#content').appendChild(Header())
document.querySelector('#content').appendChild(Home())
