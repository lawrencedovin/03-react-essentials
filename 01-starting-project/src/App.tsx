import { useState } from 'react';

import Header from "./components/Header/Header.tsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.tsx";
import TabButton from "./components/TabButton/TabButton.tsx";
import { CORE_CONCEPTS } from "./data.ts";

function App() {
  const [selectedTopic, setSelectedTopic]  = useState('Please click a button');

  function handleSelect(selectedButton: string) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => <CoreConcept {...concept} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>
              JSX
            </TabButton>
            <TabButton onSelect={() => handleSelect('props')}>
              Props
            </TabButton>
            <TabButton onSelect={() => handleSelect('state')}>
              State
            </TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
