import styled from "styled-components";
import {Joke} from "../interfaces/Joke.ts";


export default function Jokes(props : { data?:Joke[] } ){
    return (
        <div>
            {
  props.data && props.data.length > 0 ? (
    props.data.map((data: Joke) => (
        <div key={data.id}>
            <h1>{data.setup}</h1>
            <h2>{data.type}</h2>
            <p>{data.punchline}</p>
        </div>
    ))
) : (
    <p>Loading jokes...</p>  
)
            }
        </div>
        );
}