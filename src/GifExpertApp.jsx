import { useState } from 'react';
import { AddCategory,GifGrid } from './components';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['LOL','Warzone']);
    
    const addCategory = (newValue)=>{
        if(categories.includes(newValue)){
            return;
        }
        setCategories([newValue,...categories]);
    }

  return (
    <>
        <h1>GifExpertApp</h1>
        
        <AddCategory onNewCategory={addCategory}/>

        
        {
            categories.map(c => {
                return <GifGrid key={c} category={c}/>
            })
        }

        
    </>
  )
}
