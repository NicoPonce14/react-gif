import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifs';

export const useFetchGifs = (category) => {
  
    const [newImage, setnewImage] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const addImg = async() =>{
        const newImg = await getGifs(category);
        setnewImage(newImg);
        setisLoading(false);
    }
    
    useEffect(() => {
     addImg();
    }, [])
  
    return {
    newImage,
    isLoading

    }
}
