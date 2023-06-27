import { useContext } from "react";
import useAuth from "../hooks/useAuth";
function Home() {
  const myData = useAuth();
  console.log(useAuth());
  return(
    <div>
      <h2>Home</h2>
      {/* <p>{myData}</p> */}
    </div>
  )
}

export default Home