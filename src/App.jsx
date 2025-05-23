import './App.css'
import { useState } from 'react';
import data from './data';
import List from './components/List';

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main className="app">
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>
          Clear All
        </button>
      </section>
    </main>
  )
}

export default App
