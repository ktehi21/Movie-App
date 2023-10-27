import React, {useEffect} from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY } from '../../Config';

function LandingPage() {
// console.log("API_KEY", API_KEY);
    useEffect(() => {
        const endpoint = `${API_URL}movie/550?api_key=2e5e5cdf00ad11c28d90ca8359faefe4&language=en-US&page=1`;
        
        fetch(endpoint)
        .then(response => response.json())
        .then(response => console.log(response))

        
    }, [])

    return (
        <div style={{ width: '100%', margin: '0' }}>
            {/* Main Image */}

            <div style={{ width: '85%', margin: '1rem auto' }}>

                <h2>Movies by latest</h2>
                <hr />

                {/* Movie Grid Cards */}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button> Load More </button>
            </div>

        </div>
    )
}

export default LandingPage
