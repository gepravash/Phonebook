import { useState } from 'react'

function App_ex2() {
  const [persons, setPersons] = useState([{name: 'Arjit Singh'},{name: 'Atif Aslam'}])

  const [newName, setNewName] = useState('')

  const addNote = (event) => {
    event.preventDefault()
    for(let i = 0, j = persons.length; i < j; i ++)
    {
        if (persons[i].name === newName)
        {
            alert( `${newName} is already added to phonebook.`);
            setNewName("")
            return
        }
    }
    setPersons([...persons,{name: newName}])
    setNewName('')
  }

  const handleChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <fieldset>
        <form onSubmit = {addNote}>
            <div>
              <label htmlFor='name'>Name:</label>
              <input id = "name" type = "text" value = {newName} onChange={handleChange}/>
            </div>
            <br/>
            <div>
              <button disabled = {!newName} type="submit">Add</button>
            </div>
        </form>
      </fieldset>

      <h2>Numbers</h2>
      <ol>
        {persons.map(person => <li key={person.name}>{person.name}</li>)}
      </ol>
    </div>
  )
}

export default App_ex2
