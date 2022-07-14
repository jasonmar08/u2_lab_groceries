const Groceries = ({name, brand, units, quantity, isPurchased, totalFruit, removeItems}) => {
  return (
    <main>
      <div class='foodList'>
          <h3>{name}</h3>
          {/* <p>item: {item}</p> */}
          <p>Brand: {brand}</p>
          <p>Units: {units}</p>
          <p>Quantity: {quantity}</p>
          <p>Purchased: {isPurchased}</p>
          <p>{totalFruit}</p>
          <div>
              <button onClick={removeItems}>Remove Item</button>
          </div>
      </div>
    </main>
  )
}
export default Groceries