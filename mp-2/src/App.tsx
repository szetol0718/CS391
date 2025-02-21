
import styled from "styled-components";
import {useEffect, useState} from "react";
import Jokes from "../components/Jokes"
import {Joke} from "../interfaces/Joke.ts"

const ParentDiv=styled.div`
    width: 80vw;
    margin: auto;
    border: 5px darkgoldenrod solid;
`;

export default function App(){

    // useState Hook to store Data.
    const [data, setData] = useState<Joke[]>([]);

    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://official-joke-api.appspot.com/jokes/random/20");
            const jokes: Joke[] = await rawData.json();
            setData(jokes);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, []);

    return(
        
        <ParentDiv>
            <Jokes data={data}/>
        </ParentDiv>
    )
}

