export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white"
  }

  function numStyle(value) {
    let pipArray = []
    for (let i = 0; i < value; i++) {
      pipArray.push(<span className="pip"/>)
    }
    return pipArray
  }

  return (
    <div className={`die-face`} style={styles} onClick={props.hold}>
      {numStyle(props.value)}
    </div>

  )

}