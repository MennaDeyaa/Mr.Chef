import React, { useRef } from "react";
import  Listofingredients  from "./Listofingredients";
import ClaudeRecipeAi from "./ClaudeRecipeAi";
import { getRecipeFromMistral } from "./ai.js"

export default function Maincomponent(){
  //ingredients :-
    const [ingredientItems,setingredientItems]=React.useState([])

//list of ingredients lived here

    function onSubmit(formData){
        const newIngredient=formData.get('ingredient')
        // if (!newIngredient)return;
        //we (now) have the value that user entered !
        setingredientItems((prev)=>[...prev,newIngredient])
        //updated the array of ingredients.  
    }

    const [recipe,setRecipe]=React.useState("")
    //on click => will be true =>so the recipe shown

     async function getReciepe()
    {
       // eslint-disable-next-line no-unused-vars
       const resposeAi= await getRecipeFromMistral(ingredientItems);
        setRecipe(resposeAi);
    // setRecipe()
    }
    //toggle 

const ref=useRef(null);
console.log(ref)
React.useEffect(()=>{
    if(recipe !== "" && ref.current !== null){
        ref.current.scrollIntoView({behavior:"smooth"})
    }
    
}, [recipe])

    return(
        <main>
            <form action={onSubmit} className="add-ingredient-form" >
                <input type="text" aria-label="add ingredient"
                 placeholder="e.g. oregano"
                 name="ingredient" 
                 />
                <button className="add-ingredient" >Add ingredient</button>
            </form>
           
{ ingredientItems.length>0 ? 
<Listofingredients ingredients={ingredientItems} handleRecipe={getReciepe} ref={ref}/>
:null }

{recipe ?
<ClaudeRecipeAi recipe={recipe}/> 
  : null}
           
        </main>
    )
} 