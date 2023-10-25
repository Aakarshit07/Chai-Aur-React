import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])

    // useEffect(  () => {

    //     fetch("https://api.github.com/users/aakarshit07")
    //     .then(response => response.json()) 
    //     .then(data => {
    //         console.log(data)
    //         setData(data);
    //     })

    // }, [])

    return (
        <div className="text-center bg-gray-600 text-white p-4 text-3xl felx justify-center">
            Github Username: {data.login} 
            <img className="p-4 h-60 my-4 mx-auto" src={data.avatar_url} alt="Git Profile" />
        </div>
    )
}

export default Github;

export const  githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/aakarshit07");
    return response.json()
}