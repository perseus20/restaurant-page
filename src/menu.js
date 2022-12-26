export default function Menu() {
  const menu = document.createElement('div')
  const item1 = document.createElement('div')
  const item2 = document.createElement('div')
  const item3 = document.createElement('div')
  const item4 = document.createElement('div')
  const item5 = document.createElement('div')
  const img1 = document.createElement('img')
  const img2 = document.createElement('img')
  const img3 = document.createElement('img')
  const img4 = document.createElement('img')
  const img5 = document.createElement('img')
  const desc1 = document.createElement('div')
  const desc2 = document.createElement('div')
  const desc3 = document.createElement('div')
  const desc4 = document.createElement('div')
  const desc5 = document.createElement('div')

  img1.src = './img/monan.jpg'
  img2.src = './img/monan.jpg'
  img3.src = './img/monan.jpg'
  img4.src = './img/monan.jpg'
  img5.src = './img/monan.jpg'

  img1.setAttribute('alt', 'Mon an dac biet')
  img2.setAttribute('alt', 'Mon an dac biet')
  img3.setAttribute('alt', 'Mon an dac biet')
  img4.setAttribute('alt', 'Mon an dac biet')
  img5.setAttribute('alt', 'Mon an dac biet')

  img1.setAttribute('width', '750')
  img2.setAttribute('width', '750')
  img3.setAttribute('width', '750')
  img4.setAttribute('width', '750')
  img5.setAttribute('width', '750')

  img1.setAttribute('height', '750')
  img2.setAttribute('height', '750')
  img3.setAttribute('height', '750')
  img4.setAttribute('height', '750')
  img5.setAttribute('height', '750')

  desc1.textContent =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo iste eum unde porro cumque illo rerum quod odio velit iusto?'
  desc2.textContent =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo iste eum unde porro cumque illo rerum quod odio velit iusto?'
  desc3.textContent =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo iste eum unde porro cumque illo rerum quod odio velit iusto?'
  desc4.textContent =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo iste eum unde porro cumque illo rerum quod odio velit iusto?'
  desc5.textContent =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo iste eum unde porro cumque illo rerum quod odio velit iusto?'

  desc1.classList.add('description')
  desc2.classList.add('description')
  desc3.classList.add('description')
  desc4.classList.add('description')
  desc5.classList.add('description')

  item1.classList.add('item')
  item2.classList.add('item')
  item3.classList.add('item')
  item4.classList.add('item')
  item5.classList.add('item')

  menu.classList.add('listitem')

  item1.appendChild(img1)
  item1.appendChild(desc1)
  item2.appendChild(img2)
  item2.appendChild(desc2)
  item3.appendChild(img3)
  item3.appendChild(desc3)
  item4.appendChild(img4)
  item4.appendChild(desc4)
  item5.appendChild(img5)
  item5.appendChild(desc5)

  menu.appendChild(item1)
  menu.appendChild(item2)
  menu.appendChild(item3)
  menu.appendChild(item4)
  menu.appendChild(item5)

  return menu
}
