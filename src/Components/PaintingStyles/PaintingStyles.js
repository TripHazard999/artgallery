import React from "react";
import { Link } from "react-router-dom";
import PaintingStylesArr from "../../helper/PaintingStylesData";

export default function PaintingStyles() {
    return (
        <div>
            <ul>
                {PaintingStylesArr.map(item => (
                    <Link to={`/PaintingStyles/${item.id}`}  type="button">
                        {item.title}<br></br>
                    </Link>
                ))}
            </ul>
        </div>
    );
}                    