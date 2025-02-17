import { useEffect, useState } from "react"
import { Artwork } from "../types";
import { ArtWorkPreview } from "./ArtWorkPreview";

export default function ArtWorksListContent(){
    const[numArtWorks,setNumArtWorks]=useState(3);
    const[artworks, setArtWorks]=useState<Artwork[]>([])

    useEffect(()=>{
        async function fetchData(){
            const res=await fetch(`https://api.artic.edu/api/v1/artworks?limit=${numArtWorks}`);
            const {data}= await res.json();
            setArtWorks(data);
        }
            fetchData()
                .then(()=>console.log("Okay"))
                .catch((e)=>console.log("this went wrong:"+e));
    },[numArtWorks])

    return(
       
        <div>
            <input
            type={'number'}
            value={numArtWorks}
            placeholder={'Number of Artworks'}
            onChange={(e)=>setNumArtWorks(Number(e.target.value))}
            />
            <p>Number of Artworks {numArtWorks} </p>
            <div>
            {
                artworks.map((i)=>
                  <>
                    <ArtWorkPreview artwork={i}/>
                    </>
                )
            }
            </div>
        </div>
    );
}