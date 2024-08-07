const Recipe = (props) => {
    return (
      <div className="border-2 border-gray-200 rounded-lg overflow-hidden shadow-sm flex flex-col items-center p-4">
        <img className="mb-4 rounded-lg shadow-2xl shadow-black transition-transform transform hover:scale-105 duration-200" src={props.recipelist.recipe.image} alt={props.recipelist.recipe.label} />
        <h1 className="text-xl font-bold mb-2 text-center">{props.recipelist.recipe.label}</h1>
        <h3 className="text-gray-700">{props.recipelist.recipe.calories}</h3>
        
      </div>
    );
  }
  
  export default Recipe;
  