import { useState } from 'react'
import Numbers from './Numbers'
import Filter from './filter'
import PersonForm from './personform'

function App_ex5() {
  const [persons, setPersons] = useState([{name: 'Arjit Singh', number: "9861000111"},{name: 'Atif Aslam', number: "9861111222"},{name: 'Bijay Rana', number: "9813235689"},{name: 'Biraj Maharjan', number: "9813258947"}, {name:'Pravash Shrestha', number: "9860124578"}])

  const [displayPersons, setDisplayPersons] = useState([...persons])

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

  const [newFilter, setNewFilter] = useState('')

  const addNote = (event) => {
    event.preventDefault()
    for(let i = 0, j = persons.length; i < j; i ++)
    {
        if (persons[i].name === newName)
        {
            alert( `${newName} is already added to phonebook.`);
            setNewName('')
            setNewNumber('')
            return
        }
    }
    setPersons([...persons,{name: newName, number: newNumber}])
    setNewName('')
    setNewNumber('')
  }

  const handleChangeName = (event) => {
    setNewName(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFiltering = (event) => {
    setNewFilter(event.target.value)
    let personsc = [...persons]
    let valueLength = event.target.value.length
    if (valueLength > 0)
    {
        let personsFilter = personsc.filter(person => person.name.substring(0,valueLength).toUpperCase() === event.target.value.toUpperCase())
        if (personsFilter.length > 0)
        {
            setDisplayPersons(personsFilter)
        }

    }
    else
    {
        setDisplayPersons(persons)
    }

  }


  return (
    <div>

      <h2>Phonebook</h2>
        <Filter newFilter = {newFilter} handleFiltering = {handleFiltering}/>

      <h2>Add new name</h2>
        <PersonForm addNote = {addNote} newName = {newName} handleChangeName={handleChangeName} newNumber = {newNumber} handleChangeNumber={handleChangeNumber}/>

      <h2>Numbers</h2>
        <Numbers displayPersons = {displayPersons} />

    </div>
  )
}

export default App_ex5
