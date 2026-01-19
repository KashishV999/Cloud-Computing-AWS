// src/app.js
import { userManager } from './auth'

async function init() {

       document.getElementById("signIn").addEventListener("click", async () => {
        console.log("Signing in...");
            await userManager.signinRedirect();
       });


        if (window.location.search.includes("code=")) {
        userManager.signinCallback().then(function (user) {
            document.getElementById("email").textContent = user.profile?.email;
            document.getElementById("access-token").textContent = user.access_token;
            document.getElementById("id-token").textContent = user.id_token;
            document.getElementById("refresh-token").textContent = user.refresh_token;
        }).catch(err => {
            console.error("Signin callback failed:", err);
        });
        }



}

// Wait for the DOM to be ready, then start the app
addEventListener('DOMContentLoaded', init);
