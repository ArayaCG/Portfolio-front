import "./App.css";
import CardList from "./components/CardList";

function App() {
    let count: number = 0;

    return (
        <>
            <h1>Mi primera app</h1>
            <CardList />
            <p>Clicks: {count}</p>
            <button onClick={() => count++}>Contador de clicks</button>
        </>
    );
}

export default App;
