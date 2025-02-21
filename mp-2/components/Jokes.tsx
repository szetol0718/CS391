import styled from "styled-components";
import {Joke} from "../interfaces/Joke.ts";

const JokesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
`;

const JokeCard = styled.div`
    background: lightyellow;
    border-radius: 15px;
    border: 3px solid gold;
    padding: 20px;
    width: 60%;
    text-align: center;
    font-family: "Comic Sans MS", "Papyrus", cursive;
    font-size: 18px;
    box-shadow: 5px 5px 10px gray;
    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 6px 12px darkgray;
`;

const JokeType = styled.div`
    font-size: 16px;
    color: darkorange; 
`;

const JokeTitle = styled.div`
    font-size: 22px;
    color: tomato; 
    margin-bottom: 10px;
`;

const Punchline = styled.div`
    font-size: 16px;
    color: darkgreen; 
`;

export default function Jokes(props: { data?: Joke[] }) {
    return (
        <JokesContainer>
            {props.data && props.data.length > 0 ? (
                props.data.map((data: Joke) => (
                    <JokeCard key={data.id}>
                        <JokeType>{data.type} joke</JokeType>
                        <JokeTitle>{data.setup}</JokeTitle>                        
                        <Punchline>{data.punchline}</Punchline>
                    </JokeCard>
                ))
            ) : (
                <p>No jokes found! Try another number.</p>
            )}
        </JokesContainer>
    );
}