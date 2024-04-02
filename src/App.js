import "./App.css";
import { GoogleLogin } from "@react-oauth/google";
import jwtExtractor from "./utils/jwtExtractor";
import Login from "./pages/auth/Login";

function App() {
  return (
    <div className="App">
      {/* <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          console.log("DATA", jwtExtractor(credentialResponse.credential));
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        coockiePolicy="single_host_origin"
      /> */}
      <Login />
    </div>
  );
}

export default App;
