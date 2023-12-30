const Filter = (props) => {
    return (
        <form>
        <label htmlFor='filtering'>Filter shown with</label>
        <input id = 'filtering' type = 'text' value = {props.newFilter} onChange={props.handleFiltering}/>
        </form>
        )
}

export default Filter