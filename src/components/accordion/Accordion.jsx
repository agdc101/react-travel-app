import { useState, useContext, createContext } from "react";
import {AccordionItem} from "./AccordionItem";

const AccordionContext = createContext();

export function useAccordionContext() {
    const ctx = useContext(AccordionContext);

    if (!ctx) {
        throw new Error("useAccordion must be used within an Accordion component");
    }

    return ctx;
}

export default function Accordion({ children, className }) {
    const [openItemId, setOpenItemId] = useState(null);

    function toggleItem(id) {
        setOpenItemId(prevId => prevId === id ? null : id);
    }

    const contextValue = {
        openItemId,
        toggleItem
    };

    return <AccordionContext.Provider value={contextValue}><ul className={className}>{children}</ul> </AccordionContext.Provider>;
}

Accordion.Item = AccordionItem;