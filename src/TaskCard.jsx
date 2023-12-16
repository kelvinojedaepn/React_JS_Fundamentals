import "./task-component.css"
import {PropsType} from "prop-types"
export function TaskCard({ready}) {
  const cardStyle = {background: "red", color: "white", padding: "20px"}

  const headingStyle = {fontWeight: "lighter"}
  console.log(ready)

  return (
    <div className="card">
      <h1 style={headingStyle}>Tareas</h1>
      <h2 style={ready ? {background: "lightblue"} : {background: "red"}}>
        {ready ? "Tarea realizada" : "Tarea pendiente"}
      </h2>
    </div>
  )
}
