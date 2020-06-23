'use strict'

window.onload = () => document.querySelector('#success').setAttribute('disabled', '')

document.querySelector('form').reset()

document.querySelector('.input').addEventListener('blur', e => {
  const xml = new XMLHttpRequest()
  xml.open("POST", `/validateID?userID=${e.target.value}`, true)
  xml.send()
  xml.onload = () => {
    const dane = [JSON.parse(xml.response)]
    dane[0]['allow'].length === 1 ? (
      e.target.classList.contains('is-danger') ? e.target.classList.remove('is-danger') : false,
      e.target.classList.add('is-success'),
      document.querySelector('#success').hasAttribute('disabled') ? document.querySelector('#success').removeAttribute('disabled') : false
    ) : (
      e.target.classList.contains('is-success') ? e.target.classList.remove('is-success') : false,
      e.target.classList.add('is-danger'),
      document.querySelector('#success').hasAttribute('disabled') ? false : document.querySelector('#success').setAttribute('disabled', '')
    )
  }
}) 