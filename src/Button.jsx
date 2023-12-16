import PropTypes from "prop-types"
export function Button({text, name = "user"}) {
  return (
    <button
      onClick={() => {
        console.log("Boton")
      }}
    >
      {text} - {name}
    </button>
  )
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
}

// Button.defaultProps = {
//   name: "Some User",
// }
