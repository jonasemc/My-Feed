import { Header } from "./components/Header";
import "./global.css";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <h2>Jonas Miranda</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nobis
            totam rem error impedit eos temporibus dolore at repellendus quasi
            velit, repellat qui harum maiores earum fugiat est accusantium
            illum.
          </p>
          <h2>Rodrigo Pacheco</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nobis
            totam rem error impedit eos temporibus dolore at repellendus quasi
            velit, repellat qui harum maiores earum fugiat est accusantium
            illum.
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
