const Welcome = (props) => {
  const {name,greeting} = props;
  return <h1>{greeting} {name}</h1>
}

const App = () => {
  return (
    <div>
      <Welcome name = "Kumar" greeting = "Good Morning"/>
      <Welcome name = "Sai" greeting = "Good Evening"/>
      
    </div>
  )
}

export default App