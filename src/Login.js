import React, { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import bcrypt from 'bcryptjs-react';

function Login({loggedIn}) {
    const hashedPasswords = {
        "fadoq-giffard": "$2a$10$7tG9HUiam4f9kfABta/3u.19K5db5ZvY3uTnUo0OR/tXTmRNpK6fW",
    };

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState(""); 
    const login = () => {
        if (hashedPasswords[username] && bcrypt.compareSync(password, hashedPasswords[username])) {
            loggedIn(true);
        } else {
            confirmAlert({
                title: "Erreur d'authentification",
                message: "Les informations entrées sont incorrectes.",
                buttons: [
                  {
                    label: "OK",
                  }
                ],
            });
        }
      }

    return (
        <div className="login">
            <div>
                <div><input placeholder="Nom d'utilisateur" onInput={e => setUsername(e.target.value)}></input></div>
                <div><input type="password" placeholder="Mot de passe" onInput={e => setPassword(e.target.value)}
                    onKeyUp={(event) => {
                        if (event.key === "Enter") {
                            login();
                        }
                    }}></input>
                </div>
                <div><button onClick={login}>OK</button></div>
            </div>
        </div>
    );
}

export default Login;