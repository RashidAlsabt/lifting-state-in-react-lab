const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, i) => (
        <li key={i} style={{ backgroundColor: ingredient.color }}>
          {ingredient.name}
          <button onClick={() => addToBurger(ingredient)}>+</button>
        </li>
      ))}
    </ul>
  )
}

export default IngredientList
