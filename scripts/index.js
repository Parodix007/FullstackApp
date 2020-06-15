document.querySelector('form').reset()

document.querySelector('#id').addEventListener('blur', e => {
	e.target.value === false ? alert('Wpisz cos') : alert(e.target.value)
})

