import React,{useState, useEffect} from "react";
import Chat from "../Chat/Chat";

const SignIn = () => {
const [loggedIn, setLoggedIn]= useState(false);
    
   return (
    <div className="App">
        <h1>Join</h1>
   {!loggedIn ? (
       
    <div className="logIn">
       <div className="input">
         <input type="text" placeholder="Name..." 
         />
         <input type="room" placeholder="Room..." 
         />
       </div>
       <button >Enter</button>
    </div>
   ): (
    // {/* render this page if you are logged in */}
     <div>
      <Chat/>
     </div>
   )}

    </div>
   )
}
export default SignIn;