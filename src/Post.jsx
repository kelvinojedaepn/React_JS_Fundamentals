import {VscBug, VscCompassDot} from "react-icons/vsc"
export const Post = () => {
  async function getData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const dataFormmat = await data.json()
    console.log(dataFormmat)
  }
  return (
    <div>
      <button
        onClick={
          () => {
            fetch("https://jsonplaceholder.typicode.x.com/posts")
              .then((response) => response.json())
              .then((data) => console.log(data))
              .catch((error) => console.log(error))
          }
          //     getData()
        }
      >
        <VscBug />
        Traer datos
        <VscCompassDot />
      </button>
    </div>
  )
}
