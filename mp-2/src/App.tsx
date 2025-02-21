
import styled from "styled-components";
import {useEffect, useState} from "react";
import Jokes from "../components/Jokes"
import {Joke} from "../interfaces/Joke.ts"

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    background-color: lightgoldenrodyellow;
`;

const ContentWrapper = styled.div`
    width: 80vw;
    padding: 20px;
    border-radius: 10px;
    border: 3px solid chocolate;
    background-color: lemonchiffon;
    box-shadow: 0px 4px 10px gray;
    font-family: "Comic Sans MS", "Papyrus", cursive;
`;

const InputField = styled.input`
    padding: 10px;
    font-size: 16px;
    margin: 10px;
    border-radius: 5px;
    border: 3px solid dodgerblue;
    width: 100px;
    text-align: center;
    background-color: white;
`;


export default function App(){

  const [data, setData] = useState<Joke[]>([]);
  const [numJokes, setNumJokes] = useState(5); 


    // useEffect Hook for error handling and re-rendering.
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch(`https://official-joke-api.appspot.com/jokes/random/${numJokes}`);
            const jokes: Joke[] = await rawData.json();
            setData(jokes);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, [numJokes]);
    return (
      <AppContainer>
      <ContentWrapper>
          <h1>Joke Generator</h1>
          <p>Enter a number to get that many jokes!</p>

          <InputField
              type="number"
              value={numJokes}
              onChange={(e) => setNumJokes(Number(e.target.value))}
          />
          <Jokes data={data} />
      </ContentWrapper>
  </AppContainer>
  );
}

