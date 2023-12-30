const PersonForm = (props) => {
    return(
        <fieldset>
        <form onSubmit = {props.addNote}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input id = "name" type = "text" value = {props.newName} onChange={props.handleChangeName}/>
          <label htmlFor="number">Number:</label>
          <input id = "number" type = "text" value = {props.newNumber} onChange={props.handleChangeNumber}/>
        </div>
        <br/>
        <div>
          <button disabled = {!props.newName || !props.newNumber} type="submit">Add</button>
        </div>
        </form>
        </fieldset>
    )
}

export default PersonForm