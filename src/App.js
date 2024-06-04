import './App.css';
import SimpleButton from "./components/buttons/SimpleButton";
import SimpleCard from "./components/cards/SimpleCard";

function App() {
    return (
        <div className="App">
            <SimpleButton text="Кнопка"
                          onSimpleClick={() => console.log("clicked")}/>

            <SimpleCard card={{description: "описание"}}/>
        </div>
    );
}

export default App;
