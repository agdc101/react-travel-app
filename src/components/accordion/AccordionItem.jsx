import React from 'react';
import { useAccordionContext } from './Accordion';
import { createContext, useContext } from 'react';

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
    const ctx = useContext(AccordionItemContext);

    if (!ctx) {
        throw new Error("useAccordionItem must be used within an AccordionItem component");
    }

    return ctx;
}


export default function AccordionItem({ id, children, title, className }) {

    const {openItemId, toggleItem} = useAccordionContext();

    const isOpen = openItemId === id;

    function handleClick() {
        toggleItem(id);
    }

    return (
        <li className={className}>
            <h3 onClick={handleClick} >{title}</h3>
            <div className={isOpen ? 'accordion-item-content open' : 'accordion-item-content'} >{children}</div>
        </li>
    )
}