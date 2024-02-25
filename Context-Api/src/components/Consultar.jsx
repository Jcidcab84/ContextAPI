import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../Context/Context";


const Consultar = ({PHOTO_URL}) => {

    const {data, setData} = useContext(Context);
    

    useEffect(() => {
        consultar();
    },[]);

    const consultar = async () => {
        try{
            const respuesta = await fetch (PHOTO_URL);
            const info = await respuesta.json();
            setData(info.photos);
        }catch {
        }
    }

    return;
}

export default Consultar;