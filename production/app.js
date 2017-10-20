// Initialize Firebase
var config = {
  apiKey: "AIzaSyCEp0bdCFPNFRX_pv6ulzoG_ZvtUofdDxQ",
  authDomain: "mihuerta-d68f3.firebaseapp.com",
  databaseURL: "https://mihuerta-d68f3.firebaseio.com",
  projectId: "mihuerta-d68f3",
  storageBucket: "mihuerta-d68f3.appspot.com",
  messagingSenderId: "515524220628"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();

//global variables
var userID = firebase.auth().currentUser.uid;
var contactsList;

function readContacts(){
  firebase.database().ref('users/' + userID).once("value", function(data) {
    contactsList = data.val().contacts;
    document.getElementByID("1stContactName").innerHTML = contactsList.tres.fullName;
  });
}

                        /*        JSON STRUCTURE
                         * "users": {
                         *    "userID":123456{
                         *        "email":"raul@test.com",
                         *        "password":"asdnaksndasdn",
                         *        "contacts":{
                         *            "uno":{
                         *                "fullName":"elBato",
                         *                "address":"suCasa 45",
                         *                "phone":5555555555,
                         *                "email":"correo@mail.com"
                         *            },
                         *            "dos":{...},
                         *            "tres":{...},
                         *        },
                         *        "events":{
                         *            "uno":{
                         *                "name":"regada bisemanal",
                         *                "date":"13-08-2017"
                         *            },
                         *            "dos":{...},
                         *            "tres":{...},
                         *        }
                         *    },
                         * },
                         * "groups":{
                         *    "Mango Ken":{
                         *        "members":{
                         *            "fulano":true,
                         *            "mangano":true,
                         *            "satano":true,
                         *        }
                         *    },
                         *    "Chile Serrano":{
                         *        "members":{
                         *            "fulano":true,
                         *            "mangano":true,
                         *            "satano":true,
                         *            "Sergio":true,
                         *        }
                         *    },
                         *    "Tomate":{
                         *        "members":{
                         *            "fulano":true,
                         *            "mangano":true,
                         *        }
                         *    }
                         *
                         *
                         */

/*(function() {

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCEp0bdCFPNFRX_pv6ulzoG_ZvtUofdDxQ",
    authDomain: "mihuerta-d68f3.firebaseapp.com",
    databaseURL: "https://mihuerta-d68f3.firebaseio.com",
    projectId: "mihuerta-d68f3",
    storageBucket: "",
    messagingSenderId: "515524220628"
  };
  firebase.initializeApp(config);

  // Get elements
  const txtEmail = document.getElementByID('txtEmail');
  const txtPassword = document.getElementByID('txtPassword');
  const txtEmail2 = document.getElementByID('txtEmail2');
  const txtPassword2 = document.getElementByID('txtPassword2');
  const btnLogin = document.getElementByID('btnLogin');
  const btnSignUp = document.getElementByID('btnSignUp')

  // Add login event
  btnLogin.addEventListener('click', e => {
  	// Get email and pass
  	const email = txtEmail.value;
  	const pass = txtPassword.value;
  	const auth = firebase.auth();
  	// Sign in
  	const promise = auth.signInWithEmailAndPassword(email, pass);
  	promise.catch(e => console.log(e.message));
  });

  btnSignUp.addEventListener('click', e => {
  	// Get email and pass
  	const email = txtEmail2.value;
  	const pass = txtPassword2.value;
  	const auth = firebase.auth();
  	// Sign in
  	const promise = auth.createUserWithEmailAndPassword(email, pass);
  	promise.catch(e => console.log(e.message));
  });

  // Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
  	if(firebaseUser) {
  		console.log(firebaseUser);
  	} else {
  		console.log('not logged in');
  	}
  });
})
*/
