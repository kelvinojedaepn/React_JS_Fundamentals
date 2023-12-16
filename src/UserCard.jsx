export function UserCard(props) {
  console.log(props)
  return (
    <>
      <h1>{props.name}</h1>
      <h2>${props.amount}</h2>
      <h1>{props.married ? "Esta casado" : "No estta casado"}</h1>
      <h2>Direccion</h2>
      <ul>
        <li>{props.address.city}</li>
        <li>{props.address.street}</li>
      </ul>
    </>
  )
}
