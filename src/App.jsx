import "./styles/main.css";
import { Button } from "./components/ui";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  async function getData() {
    const req = await axios.get("https://jsonplaceholder.typicode.com/todos/");
    if (req.data) {
      setData(req.data);
    }
  }
  useEffect(() => {
    getData();
  }, [])

  console.log(data)

  return (
    <div>
      {/* <Button label={"click me"} /> */}

      {
        data?.slice(0, 50).map((val) => (<div key={val.id} >
          <div>{val.id}: {val.title}</div>
          <br /> <hr />
        </div>
        ))
      }
      {/* <h1 >My App</h1> */}

    </div>
  )
}

export default App;

