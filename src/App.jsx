import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import data from "./data.jsx"

function App() {
  console.log(data)
  const card = data.map(data => {
    return (
      <Main 
      key = {data.id}
      item = {data}
      />
    )
  })



  return (
    <div id="journal">
      <Header />
      {card}
      <Footer />
    </div>
  )
}

export default App
