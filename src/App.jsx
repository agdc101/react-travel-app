import Accordion from "./components/accordion/Accordion";
import AccordionItem from "./components/accordion/AccordionItem";

function App() {
  return (
    <main>
      <h1>React Travel</h1>
      <section>
        <h2>Why Work With Us?</h2>
        <Accordion className="accordion">
          <AccordionItem id="experience" title="Unbeatable Prices" className="accordion-item" >
            <article>
              <p>Our prices are the best in the industry.</p>
              <p>Great guides, great location</p>
            </article>
          </AccordionItem>
          <AccordionItem  id="local-guides" title="Great reviews" className="accordion-item" >
            <article>
              <p>Our customers love us!</p>
              <p>Great guides, great location</p>
            </article>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  )
}

export default App;
