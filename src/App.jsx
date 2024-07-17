import Accordion from "./components/accordion/Accordion";

function App() {
  return (
    <main>
      <h1>React Travel</h1>
      <section>
        <h2>Why Work With Us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="experience" title="Unbeatable Prices" className="accordion-item" >
            <article>
              <p>Our prices are the best in the industry.</p>
              <p>Great guides, great location</p>
            </article>
          </Accordion.Item>
          <Accordion.Item  id="local-guides" title="Great reviews" className="accordion-item" >
            <article>
              <p>Our customers love us!</p>
              <p>Great guides, great location</p>
            </article>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  )
}

export default App;
