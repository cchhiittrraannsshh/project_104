// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBfqzvVf5_11cucO8tPFkN7CSIAp3n0ulo",
    authDomain: "project-103-32134.firebaseapp.com",
    databaseURL: "https://project-103-32134-default-rtdb.firebaseio.com",
    projectId: "project-103-32134",
    storageBucket: "project-103-32134.appspot.com",
    messagingSenderId: "495558413391",
    appId: "1:495558413391:web:916259c7add365810dee3a",
    measurementId: "G-YNX36SLQFX"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like:0
      });

      document.getElementById("msg").value = "";

}
      localStorage.getItem("user_name", user_name);
      localStorage.getItem("room_name", room_name);
      window.location = "index.html";