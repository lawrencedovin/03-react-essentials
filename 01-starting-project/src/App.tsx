import Header from "./Header.tsx";
import CoreConcept from "./CoreConcept.tsx";
import { CORE_CONCEPTS } from "./data.ts";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => <CoreConcept {...concept}/>)}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
