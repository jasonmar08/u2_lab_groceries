const Groceries = ({name, brand, units, quantity, isPurchased, totalFruit, removeItems}) => {
  return (
    <main className='mainBack'>
      <div class='foodList'>
          <h3>{name}</h3>
          <p><span>Brand:</span> {brand}</p>
          <p><span>Units:</span> {units}</p>
          <p><span>Quantity:</span> {quantity}</p>
          <p><span>Purchased:</span> {isPurchased}</p>
          <p><span className='totalFruit'>{totalFruit}</span></p>
          <div>
              <button onClick={removeItems}>Remove Item</button>
          </div>
      </div>
    </main>
  )
}
export default Groceries