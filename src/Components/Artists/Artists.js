import React from "react";
import { Link } from "react-router-dom";
import ArtistsArr from "../DataFiles/ArtistsData";

export default function Artists() {
    return (
        <div>
            <ul>
                {ArtistsArr.map(item => (
                    <Link to={`/Artists/${item.id}`}  type="button">
                        {item.title}<br></br>
                    </Link>
                ))}
            </ul>
        </div>
    );
}