import React, { useContext } from "react";
import { Context } from "../Context/Context";

const Favorites = () => {
    const {data} = useContext(Context);

    return (
        <div>
            <h1>Fotos favoritas</h1>
            <div className="p-3 gallery grid-columns-4">
                {Array.isArray(data) && data.map((i) => (
                    i.liked ? 
                        <div className="container-img" key={i.id}>
                            <img src={i.src.original} alt="" className="photo" />
                        </div>
                    : null
                ))}
            </div>
        </div>
    );
};
export default Favorites;
