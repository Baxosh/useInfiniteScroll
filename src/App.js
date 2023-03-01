import "./styles.css";
import { useLoad } from "./hooks/request";

export default function App() {
  const users = useLoad({ url: "users" });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
