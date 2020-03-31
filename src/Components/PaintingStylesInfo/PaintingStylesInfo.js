import React from "react";
import { useParams } from "react-router-dom";
import PaintingStylesArr from "../DataFiles/PaintingStylesData";

export default function PaintingStylesInfo() {
    let { styleId } = useParams();
    return (
        <div>
            <h1>{PaintingStylesArr[styleId - 1].title}</h1>
        </div>
    );
}