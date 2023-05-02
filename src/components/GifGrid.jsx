import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {
    const{newImage,isLoading} = useFetchGifs(category);
    
    
    return (
    <>
        <h2>{category}</h2>
        {
            isLoading && <h3>Esta Cargando</h3>
        }
        <div className="card-grid">{
            newImage.map((image) =>(
                <GifItem 
                    key={image.id}
                    {...image}
                />
            ) )}
        </div>
    </>
  )
}
