import firbase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyCand2NxwMHUHACLfY_JbeIDsqgukoQtk8",
    authDomain: "fir-82cdf.firebaseapp.com",
    projectId: "fir-82cdf",
    storageBucket: "fir-82cdf.appspot.com",
    messagingSenderId: "463533522029",
    appId: "1:463533522029:web:68ea5a981a75d82200d364",
    measurementId: "G-NHTTBTSR1L"
  };


  const firebaseApp = firbase.initializeApp(firebaseConfig)

  const db= firebaseApp.firestore()

  export {db} ; 