/* global alert */

document.ontouchmove = e => { e.preventDefault() }

const onclick = async (e) => {
  alert('click')
}

document.getElementById('circle-button').addEventListener('click', onclick)
