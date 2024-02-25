import { useContext, useState } from "react";
import { Context } from "../Context/Context";
import IconHeart from "./IconHeart";


const Gallery = () => {

  const {data, setData} = useContext(Context);
 
const torf = (x) => {
  const local = data.map((i)=>{
  if(i.id === x)
    i.liked = !i.liked;
  return  i;
    
  })
  setData(local)
}
 
return(
  <div className="gallery grid-columns-5 p-3">
  {data.map((i)=>(
    <div key={i.id} className="container-img">
      <img src={i.src.original} className="photo" onClick={()=>{torf(i.id)}} />
      <IconHeart filled = {i.liked}/>
    </div>
  ))}
  </div>
)

}; 
export default Gallery;
