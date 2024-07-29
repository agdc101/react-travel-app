import { useAccordionContext } from "./Accordion"
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionTitle({ className, children }) {
    const {toggleItem} = useAccordionContext();
    const id = useAccordionItemContext();
    return (
        <h3 onClick={() => toggleItem(id)} >{title}</h3>
    )
}
