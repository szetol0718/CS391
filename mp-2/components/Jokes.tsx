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
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 60%;
    max-width: 600px;
    text-align: center;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.15);
    }
`;

const JokeTitle = styled.h1`
    font-size: 20px;
    color: #333;
`;

const JokeType = styled.h2`
    font-size: 14px;
    color: #888;
    margin-bottom: 10px;
`;

const Punchline = styled.p`
    font-size: 16px;
    color: #555;
`;

export default function Jokes(props: { data?: Joke[] }) {
    return (
        <JokesContainer>
            {props.data && props.data.length > 0 ? (
                props.data.map((data: Joke) => (
                    <JokeCard key={data.id}>
                        <JokeTitle>{data.setup}</JokeTitle>
                        <JokeType>{data.type}</JokeType>
                        <Punchline>{data.punchline}</Punchline>
                    </JokeCard>
                ))
            ) : (
                <p>Loading jokes...</p>
            )}
        </JokesContainer>
    );
}