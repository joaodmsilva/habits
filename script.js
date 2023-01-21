const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click',add)
form.addEventListener("change", save)

function add() {
    const today = new Date().toLocaleDateString('pt').slice(0,-5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert("Este dia já existe")
        return
    }

        nlwSetup.addDay(today)
}

function save() {
    window.localStorage.setItem('nlwSetupHabits', JSON.stringify(nlwSetup.data)) 
}

const data = JSON.parse(localStorage.getItem('nlwSetupHabits')) || {}
nlwSetup.setData(data)
nlwSetup.load()




 
 