import Routing from "./pages";
import { publicEncrypt } from "crypto-browserify";

function App() {
  console.log(publicEncrypt);
  /*
      https://stackoverflow.com/questions/69868011/react-router-v6-routing
  */
  return <Routing />;
}

export default App;
