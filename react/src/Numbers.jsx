const Numbers = (props) => {
return (
<ol>
{props.displayPersons.map(person => <li key={person.name}>{person.name} {person.number}</li>)}
</ol>
)
}

export default Numbers