import React from "react";
import { useParams } from "react-router-dom";
import ArtistArr from "../DataFiles/ArtistsData";

export default function ArtistInfo() {
    let { artistId } = useParams();
    return (
        <div>
            <h1>{ArtistArr[artistId - 1].title}</h1>
        </div>
    )
}