let addButton = document.getElementById('addBtn')
let subButton = document.getElementById('subBtn')
let display = document.getElementById('display')
let input = document.getElementById('input')
let currentValue = 0;

input.value = 1;

const testNeg = () => {
	if (currentValue < 0) {
		display.style.color = 'red'
	} else {
		display.style.color = 'black'
	}
}



addButton.addEventListener('click', (e) => {
	if (input.value * 0 != 0) {
		alert('Please Input a number')
		return
	}
	currentValue+= input.value - 0
	display.textContent = currentValue
	testNeg();
	})



subButton.addEventListener('click', (e) => {
	if (input.value * 0 != 0) {
		alert('Please Input a number')
		return
	}
	currentValue-= input.value
	display.textContent = currentValue
	testNeg();
	})


subButton.addEventListener('mouseover', (e) =>{
	subButton.style.backgroundColor = 'white'
	subButton.style.color = 'grey'
})

subButton.addEventListener('mouseout', (e) => {
	subButton.style.backgroundColor = 'grey'
	subButton.style.color = 'white'
})

addButton.addEventListener('mouseover', (e) =>{
	addButton.style.backgroundColor = 'white'
	addButton.style.color = 'grey'
})

addButton.addEventListener('mouseout', (e) => {
	addButton.style.backgroundColor = 'grey'
	addButton.style.color = 'white'
})

