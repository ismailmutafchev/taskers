import { Hero } from "./sections/Hero";


fetch('http://localhost:3030/jsonstore/services')
.then(res => res.json())
.then(result => console.log(result))


export function App() {
  return (
    <div className="App">
      <Hero/>
    </div>
  )
}
export default App;
