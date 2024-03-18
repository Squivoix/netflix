import './App.css';
import { categories } from "./api";
import Row from "./Row";

console.log(categories);

function App() {
    return (
        <>
            {categories.map((category) => {
                return (
                    <Row title={category.title} />
                );
            }) }
        </>
    );
}

export default App;
