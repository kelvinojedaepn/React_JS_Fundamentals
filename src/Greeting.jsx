export function Greeting(props) {
  console.log(props)
  const name = props.title
  const married = true
  const user = {
    name: "Juan",
    lastname: "valdez",
  }
  function add(x, y) {
    return x + y
  }
  return (
    <div>
      <h1> {user.name} </h1>
      <h2> {user.lastname} </h2>
      <h3> {married ? "Estoy casado" : "No estoy casado"} </h3>
      <h3> married: {married.toString()} </h3>
      <h3> {add(3, 2)} </h3>
      <h3> {name} </h3>
    </div>
  )
}
