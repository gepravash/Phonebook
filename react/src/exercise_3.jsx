import { useState } from 'react'

function App_ex3() {
  const [persons, setPersons] = useState([{name: 'Arjit Singh', number: "9861000111"},{name: 'Atif Aslam', number: "9861111222"}])

  const [newName, setNewName] = useState('')

  const [newNumber, setNewNumber] = useState('')

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


  return (
    <div>
      <h2>Phonebook</h2>
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

      <h2>Name and Numbers</h2>
      <ol>
        {persons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
      </ol>
    </div>
  )
}

export default App_ex3
