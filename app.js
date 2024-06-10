const item = document.querySelector('.item')
const item2 = document.querySelector('.item2')
const item3 = document.querySelector('.item3')
const placeholders = document.querySelectorAll('.placeholder')


item.addEventListener("dragstart", dragstart)
item.addEventListener("dragend", dragend)
item2.addEventListener("dragstart", dragstart)
item2.addEventListener("dragend", dragend)
item3.addEventListener("dragstart", dragstart)
item3.addEventListener("dragend", dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', drop)
}

function dragstart(event) {
    event.dataTransfer.setData('text/plain', event.target.classList[0])
    event.target.classList.add("hold")
    setTimeout(() => event.target.classList.add("hide"), 0)
}

function dragend(event) {
    event.target.classList.remove("hold", "hide")
}

function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.preventDefault() 
    event.target.classList.add('hovered')
}

function dragleave(event) {
    event.target.classList.remove('hovered')
}

function drop(event) {
    event.preventDefault()
    event.target.classList.remove('hovered')
    const draggedItem = event.dataTransfer.getData('text/plain')
    event.target.appendChild(document.querySelector(`.${draggedItem}`))
}



