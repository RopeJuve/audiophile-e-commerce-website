import './_ProductCard.scss'


const ProductCard = ({ imgUrl, isNew, name, description}) => {
  return (
    <div className='product-card__container'>
      <div className='product-card__wrapper'>
          <img src={imgUrl} alt='' />
          <div className='card-content'>
              {isNew ? (<h6>NEW PRODUCT</h6>) : ''}
              <h4>{name}</h4>
              <p>{description}</p>
              <button>SEE Product</button>
          </div>
      </div>
    </div>
  )
}

export default ProductCard