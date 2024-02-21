import { BellRing, Ban, CheckCheck, TrendingUp } from "lucide-react";
import "./App.css";
import Alert from "./Components/Alert";

function App() {
  return (
    <>
      <Alert
        title="Alert Title Danger"
        type="alert-danger"
        icon={<BellRing />}
      />
      <Alert
        title="Alert Title success"
        type="alert-success"
        icon={<CheckCheck />}
      />
      <Alert title="Alert Title Warning" type="alert-warning" icon={<Ban />} />
      <Alert
        title="Alert Title Trending"
        type="alert-trending"
        icon={<TrendingUp />}
      />
    </>
  );
}

export default App;
