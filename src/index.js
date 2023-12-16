import React, {useState, useEffect} from "react"
import ReactDOM from "react-dom/client"
import {Greeting} from "./Greeting"
import Product, {Navigation} from "./Product"
import {UserCard} from "./UserCard"
import {Button} from "./Button"
import {TaskCard} from "./TaskCard"
import {Saludar} from "./Saludar"
import {Post} from "./Post"

const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(<h1> Hola react!! </h1>)

// root.render(greeting())

// root.render(<div> {greeting()} </div>)

// const hundleChange = (e) => {
//   console.log(e.target.value)
// }

// const users = [
//   {
//     id: 1,
//     name: "Ryzn",
//     image: "https://robohash.org/id1",
//   },
//   {
//     id: 2,
//     name: "Robp",
//     image: "https://robohash.org/id2",
//   },
//   {
//     id: 3,
//     name: "Juan",
//     image: "https://robohash.org/id3",
//   },
// ]

function Counter() {
  const [counter, setCounter] = useState(0)
  const [mensaje, setMensaje] = useState("")

  useEffect(
    function () {
      console.log("hola render")
    },
    [counter]
  )

  return (
    <>
      <input type="text" onChange={(e) => setMensaje(e.target.value)} />{" "}
      <button
        onClick={() => {
          alert(`El mensaje es: ${mensaje}`)
        }}
      >
        {" "}
        Save{" "}
      </button>{" "}
      <hr />
      <h1> Counter: {counter} </h1>{" "}
      <button
        onClick={() => {
          setCounter(counter + 1)
        }}
      >
        {" "}
        +{" "}
      </button>{" "}
      <button
        onClick={() => {
          setCounter(counter - 1)
        }}
      >
        -
      </button>{" "}
    </>
  )
}

root.render(
  <>
    {" "}
    {/* <Greeting title="Hola React" />
                                                                                                                                                                                                                                                                                                            <Product />
                                                                                                                                                                                                                                                                                                            <Navigation />
                                                                                                                                                                                                                                                                                                            <UserCard
                                                                                                                                                                                                                                                                                                              name="Kelvin Ojeda"
                                                                                                                                                                                                                                                                                                              amount={3000}
                                                                                                                                                                                                                                                                                                              married={true}
                                                                                                                                                                                                                                                                                                              points={[22.3, 22.1]}
                                                                                                                                                                                                                                                                                                              address={{street: "Main Street", city: "NY"}}
                                                                                                                                                                                                                                                                                                            /> */}{" "}
    {/* <Button text="Click me" />
                                                                                                                                                                                                                                                                                                            <Button text="Payme" />
                                                                                                                                                                                                                                                                                                            <Button text={"Hola React"} />
                                                                                                                                                                                                                                                                                                            <Button /> */}{" "}
    {/* <TaskCard ready={false} />
                                                                                                                                                                                                                                                                                                            <Saludar />
                                                                                                                                                                                                                                                                                                            <Button text="Saludar" />
                                                                                                                                                                                                                                                                                                            <input
                                                                                                                                                                                                                                                                                                              // onClick={() => {
                                                                                                                                                                                                                                                                                                              //   alert("Input seleccionado")
                                                                                                                                                                                                                                                                                                              // }}
                                                                                                                                                                                                                                                                                                              // onChange={(e) => {
                                                                                                                                                                                                                                                                                                              //   console.log(e.target.value)
                                                                                                                                                                                                                                                                                                              // }}

                                                                                                                                                                                                                                                                                                              onChange={hundleChange}
                                                                                                                                                                                                                                                                                                            /> */}{" "}
    {/* <Post /> */}{" "}
    {/* {users.map((user, index) => {
                                                                                                                                                                                                                                                                                                              return (
                                                                                                                                                                                                                                                                                                                <div key={index}>
                                                                                                                                                                                                                                                                                                                  <h1>Data: {user.id}</h1>
                                                                                                                                                                                                                                                                                                                  <h3>Name: {user.name}</h3>
                                                                                                                                                                                                                                                                                                                  <img src={user.image} />
                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                              )
                                                                                                                                                                                                                                                                                                            })} */}{" "}
    <Counter />
  </>
)
