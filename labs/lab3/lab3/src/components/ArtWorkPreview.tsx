//const ArtWorkPreview = ()=>{
//
//}
import { Artwork } from "../types";
import { styled } from "styled-components";


const ArtWorkPreviewDiv= styled.div`
    width:80vw;
    margin: auto;
    height:20vh;
    background-color: blue;
    `;

export function ArtWorkPreview({artwork}:{artwork:Artwork}){
    return(
        <ArtWorkPreviewDiv>
            <h3>
                {artwork.title}
            </h3>
            <p>{artwork.place_of_origin}</p>
            <p>{artwork.medium_display}</p>
            
        </ArtWorkPreviewDiv>
    )
}