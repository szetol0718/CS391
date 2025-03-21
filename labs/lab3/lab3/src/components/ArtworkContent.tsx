import {useParams } from "react-router"; 
import ArtworkProps from "../types";

export default function ArtworkContent(){
    const{ id } = useParams();
    const[artwork, setArtwork] = useState<ArtworkProps | null>(null);
    return(
        <div>
            <h2>{id}</h2>
        </div>
    );
}