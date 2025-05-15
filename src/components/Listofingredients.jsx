export default function Listofingredients(props){
      // we made array to view in the jsx // list of ingredients:-
    const listOfIngredient=props.ingredients.map((item)=>{
        return <li key={item}>{item}</li> 
    })
    return(
  <section>
  <h2>Ingredients on hand:</h2>
  <ul className="ingredients-list" aria-live="polite">
                {listOfIngredient}
    </ul> 

  {props.ingredients.length>3 ? 
  <div className="get-recipe-container">
    <div>
      <h3>Ready for a recipe?</h3>
      <p>Generate a recipe from your list of ingredients.</p>
    </div>
    <button onClick={props.handleRecipe} ref={props.ref}>Get a recipe</button>
  </div>
   : null }
</section>)
}