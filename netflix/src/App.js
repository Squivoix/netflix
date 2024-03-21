import './App.css';
import { categories } from "./api";
import Row from "./Row";

function App() {
    return (
        <div>
            { /* Navbar */}
            { /* Banner */}
            { /* Categorias - Linhas */}

            {categories.map((category) => {

                return (
                    <Row
                        key={category.name}
                        name={category.name}
                        title={category.title}
                        isLarge={categories.isLarge}
                        path={category.path}
                    />
                );
            })}
        </div>
    );
}

export default App;
