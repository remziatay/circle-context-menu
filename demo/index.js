import { CircleContextMenu } from '../circle-context-menu'

const el = document.getElementById('box1')
el.style.userSelect = 'none'

const menu = new CircleContextMenu({
  radius: 2 / 5 * Math.min(960, window.innerHeight, window.innerWidth) * window.devicePixelRatio,
  background: '#e04e15',
  color: '#fcf7ff',
  chosenBackground: '#0a1f33',
  chosenColor: '#e6c670',
  chooseOnRelease: false,
  element: el,
  touchDuration: 500,
  tolerance: 5
})

menu.addButton('TEST1', () => (el.innerHTML += '</br>TEST1'))
menu.addButton('TEST2', () => (el.innerHTML += '</br>TEST2'))
menu.addButton('TEST3', () => (el.innerHTML += '</br>TEST3'))

const el2 = document.getElementById('box2')
el2.style.userSelect = 'none'

const menu2 = new CircleContextMenu({
  radius: 2 / 5 * Math.min(960, window.innerHeight, window.innerWidth) * window.devicePixelRatio,
  background: '#e04e15',
  color: '#fcf7ff',
  chosenBackground: '#0a1f33',
  chosenColor: '#e6c670',
  chooseOnRelease: true,
  element: el2,
  touchDuration: 100,
  tolerance: 3
})

menu2.addButton('TEST1', () => (el2.innerHTML += '</br>TEST1'))
menu2.addButton('TEST2', () => (el2.innerHTML += '</br>TEST2'))
menu2.addButton('TEST3', () => (el2.innerHTML += '</br>TEST3'))
