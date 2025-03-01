const name1 = "Mike"
const name2= "Giga"


console.log(name2)

const num1 = 45
const num2 = -5

console.log(num1)
console.log(num2)

const num3 = 5+3
const num4 = 20-15
const num5 = 12*4
const num6 = 90/30

console.log(num3)
console.log(num4)
console.log(num5)
console.log(num6)


let age1 = 11
age1 = 12
console.log(age1)


let color1 = "red"
color1 = "blue"


const w = "hello my na,e is Giga"


const h2 = document.querySelector(".hello")

console.log(h2)
h2.style.color ="blue"
h2.style.backgroundColor = "purple"
h2.style.borderRadius="20px"
h2.style.height="70px"
h2.style.width="100px"

h2.remove()

// დავალება/

const btn =document.querySelector(".btn")
console.log(btn)
btn.style.height= "70px"
btn.style.width="80px"
btn.style.border=" 5px purple solid"
btn.style.backgroundColor="pink"
btn.style.color="green"


const p = document.querySelector(".p")
console.log(p)

p.style.height= "70px"
p.style.width="80px"
p.style.border=" 5px purple solid"
p.style.backgroundColor="pink"
p.style.color="green"


const input = document.querySelector(".input")
console.log(input)
input.style.height= "70px"
input.style.width="400px"
input.style.border=" 5px none solid"
input.style.backgroundColor="blue"
input.style.color="red"


const removeBtn = document.querySelector(".remove-btn")
const removeP = document.querySelector(".remove-p")

console.log(removeBtn)
console.log(removeP)

removeBtn.addEventListener("click", () => {
    console.log("btn was clicked")

    const num= 1
    
    console.log(num)
 
    removeP.remove()
})

