import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LoggedIn = () => {
    const [isLoggedIn, setLoggedIn] = useState(null);

    useEffect(() => {
        // Make an HTTP request to check login status

        //eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJSLiBHb21lcyIsImlhd…jE1fQ.2A8kJQs074Pub2orknSs9y-eRrfPLS-ByeCHDmoULGo

        const headers = {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJSLiBHb21lcyIsImlhdCI6MTcwNjYzNzY2NywiZXhwIjoxNzA2NzI0MDY3fQ.8roWFAEFhBQl17bh2kRTu3lX21BA4DMx078Lmkyl7GA'
        }

        console.log("tututututu");
        axios.get('http://localhost:8080/api/v1/demo-controller', {headers: headers})
            .then(response => {
                console.log(response + " ppp " + response.data.access)

            /*
            for (let key in response.data) {

                console.log("keykeykey" + key + " ppp " + response.data[key])
            };*/


                setLoggedIn(response.data);
            })
            .catch(error => {
                setLoggedIn(false);
            });
    }, []);

    return (
        <div>
            <p>aaaaaaaaaaaaaaaaaaaaa</p>
            <p>aaaaaaaaaaaaaaaaaaaaa</p>
            <p>aaaaaaaaaaaaaaaaaaaaa</p>
            <p>{isLoggedIn}</p>
            {isLoggedIn ? (
                <p>User is logged in is [{isLoggedIn.userName}]</p>
            ) : (
                <p>User is not logged in</p>
            )}
            {/* Your other components and UI elements */}
        </div>
    );
};

export default LoggedIn;