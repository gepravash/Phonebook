import { useState } from 'react'

function App_ex4() {
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
        else
        {
            setDisplayPersons([])
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
      <fieldset>
        <form>
            <label htmlFor='filtering'>Filter shown with</label>
            <input id = 'filtering' type = 'text' value = {newFilter} onChange={handleFiltering}/>
        </form>
      </fieldset>
      <h2>Add new name</h2>
      <fieldset>
        <form onSubmit = {addNote}>
            <div>
              <label htmlFor='name'>Name:</label>
              <input id = "name" type = "text" value = {newName} onChange={handleChangeName}/>
              <label htmlFor="number">Number:</label>
              <input id = "number" type = "text" value = {newNumber} onChange={handleChangeNumber}/>
            </div>
            <br/>
            <div>
              <button disabled = {!newName || !newNumber} type="submit">Add</button>
            </div>
        </form>
      </fieldset>

      <h2>Numbers</h2>
      <ol>
        {displayPersons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
      </ol>
    </div>
  )
}

export default App_ex4
