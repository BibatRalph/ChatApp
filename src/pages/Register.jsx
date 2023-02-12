import React, { useState } from "react";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, database, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate} from "react-router-dom";

const Register = () => {
  const [setErr] = useState(false);
 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
    
      const res = await createUserWithEmailAndPassword(auth, email, password);

   
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
       
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
          
            await setDoc(doc(database, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(database, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
          
            setErr(true);
        
          }
        });
      });
    } catch (err) {
      setErr(true);
     
    }
  };



  return (
    <div className="formContainer">
    <div className="formWrapper">
      <span className="logo">ChatApp</span>
      <span className="title">Register</span>
      <form on onSubmit={handleSubmit}>
        <input required type="text" placeholder="Username" />
        <input required type="email" placeholder="Email" />
        <input required type="password" placeholder="Password" />
        <input style={{display: "none"}} type="file" id='pic'/>
        <label htmlFor='pic'>
       
             <span className="title">Add Profile Picture</span>
       
     
        </label>
        <button>Sign Up</button>
      

        <span className="title">Signing up may take a few seconds</span>
     
   
      </form>
      
   
   
    </div>

  

  </div>
  

  
  
  
  )
  



}
//BG


export default Register