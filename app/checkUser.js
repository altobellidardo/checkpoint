const elementsSession = document.querySelectorAll('.conSesion')
const elementsNoSession = document.querySelectorAll('.sinSesion')

export const checkUser = (user) => {
  if (user) {
    elementsNoSession.forEach(element => element.classList.add('d-none'))
    elementsSession.forEach(element => element.classList.remove('d-none'))

    const output = document.getElementById('output')
    output.getElementsByTagName('p')[0].textContent += user.email
  } else {
    elementsNoSession.forEach(element => element.classList.remove('d-none'))
    elementsSession.forEach(element => element.classList.add('d-none'))
  }
}