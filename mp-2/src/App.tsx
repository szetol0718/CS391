
import styled from "styled-components";
import {useEffect, useState} from "react";
import Jokes from "../components/Jokes"
import {Joke} from "../interfaces/Joke.ts"

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: lightsteelblue;
`;

const ContentWrapper = styled.div`
    width: 80vw;
    padding: 20px;
    border-radius: 10px;
    background-color: lavender;
    box-shadow: 0px 4px 10px black;
    border: 2px solid darkslateblue; 
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
    return (
      <AppContainer>
          <ContentWrapper>
              <Jokes data={data} />
          </ContentWrapper>
      </AppContainer>
  );
}

