// In a separate component, e.g., Callback.js
import React, { useEffect } from "react";

const Callback: React.FC = () => {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.hash.substr(1));
        const accessToken = urlParams.get("access_token");
        console.log(accessToken, "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");

        // Store the access token in localStorage
        localStorage.setItem("spotifyAccessToken", accessToken || "");

        // Redirect to your dashboard or desired page
        window.location.href = "/"; // Change this to your actual URL
    }, []);


    return (
        <div>
            <h2>Redirecting...</h2>
        </div>
    );
};

export default Callback;
