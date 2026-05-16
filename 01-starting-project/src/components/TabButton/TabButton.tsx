import type { PropsWithChildren } from "react";
import "./TabButton.scss";

interface TabButtonProp {
    children: React.ReactNode,
    onSelect: React.MouseEventHandler<HTMLButtonElement>;
}

function TabButton({ children, onSelect }: TabButtonProp) {
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}

export default TabButton;