import React, { useEffect, useState } from 'react'

const Recipe = () => {

    const [recipe, setRecipe] = useState([])

    useEffect(() => {
        const FetchApi = async () => {
            const getRecipe = await fetch('https://dummyjson.com/recipes')
            const changeRecipe = await getRecipe.json()
            setRecipe(changeRecipe.recipes)


        }

        FetchApi()

    },[])

    console.log(recipe);
    

    return (
        <>

        <div style={{background :"orange", padding : "30px", display:"flex", flexWrap : "wrap", justifyContent : 'space-evenly' }}>
            

                {recipe.map((e,i)=>(
                     <div key={i} style={{background : "aliceblue", padding: "10px", margin : "10px", borderRadius : "10px"}}>
                        <div><img src={e.image} alt="" style={{width :"300px",}}/></div>
                        <div>
                            <h2>{e.name}</h2>
                        </div>
                        <div>
                            <h5>Ingredient</h5>
                            <ul>
                            {e.ingredients.map((f,i)=>(
                                <li key={i}>{f}</li>
                            ))}
                            </ul>
                        </div>
                     </div>

                ))}

               
            
        </div>

        </>
    )
}

export default Recipe