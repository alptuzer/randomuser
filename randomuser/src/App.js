import React, { useState } from 'react'; 
import "./app.css"

function App() {
  
    const [profileName,setProfileName] = useState("");
    const [profileEmail,setProfileEmail] = useState("");
    const [profileCell,setProfileCell] = useState("");
    const [profileImage,setProfileImage] = useState("");
 
    /* fetch("https://randomuser.me/api"); */
    const profileData = async () =>{
      try {
        const res = await fetch("https://randomuser.me/api").then((res)=>{
          return res.json();
        }).then((data) => {
         setProfileCell(data.results[0].cell)
          setProfileEmail(data.results[0].email)
          setProfileImage(data.results[0].picture.large)
          setProfileName(`${data.results[0].name.first}`+` ${data.results[0].name.last}`);
     /*      setProfileName(`${data.results[0].name.first} ${data.results[0].name.last}`); */

          console.log(data);

        })
         
      } catch (error) {
        console.log(error)
      }
    }


     

    return (
      <div className="App">
      <div className='profileContainer'>
 
       <img src={profileImage} ></img>
       <h1 >{profileName} </h1>
       <p>{profileEmail}</p>
       <p> {profileCell}</p>
       <button onClick={profileData}>Click To New Profile</button>

      </div>
     
      </div>
    );
  }


export default App;
