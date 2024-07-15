export default function AccordionItem({ children, title, className }) {
    return (
        <li className={className}>
            <h3>{title}</h3>
            <div>{children}</div>
        </li>
    )
}