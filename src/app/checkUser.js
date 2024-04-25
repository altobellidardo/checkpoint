const elementsSession = document.getElementsByClassName('conSesion')
const elementsNoSession = document.getElementsByClassName('sinSesion')

export const checkUser = (user) => {
  if (user) {
    for (let i = 0; i < elementsSession.length; i++) {
      elementsSession[i].classList.add('d-none')
    }
    for (let i = 0; i < elementsNoSession.length; i++) {
      elementsNoSession[i].classList.remove('d-none')
    }
  } else {
    for (let i = 0; i < elementsSession.length; i++) {
      elementsSession[i].classList.remove('d-none')
    }
    for (let i = 0; i < elementsNoSession.length; i++) {
      elementsNoSession[i].classList.add('d-none')
    }
  }
}