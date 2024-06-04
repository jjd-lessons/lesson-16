import SimpleText from "../texts/SimpleText";

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export default function SimpleCard({card}) {

    return (
        <div>
            <SimpleText text={capitalize(card.description)}/>
        </div>
    )
}