import {useState} from "react";
import buttonStyle from "./buttons.module.css"
export default function SimpleButton({text, onSimpleClick}) {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive((current) => !current);
        onSimpleClick();
    }

    return (
        <button type="button"
                data-testid="simple"
                className={active ? buttonStyle.active : buttonStyle.simple}
                onClick={handleClick}>
            {text ? `${text.toUpperCase()}...` : "👉"}
        </button>
    )
}