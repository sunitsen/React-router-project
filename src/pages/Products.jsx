import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchData = () => {
    setIsLoading(true);
    setError(null);
    fetch('https://dummyjson.com/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Data Could not be fetched')
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setIsLoading(false)
      }).catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }



  useEffect(() => {
    fetchData();
  }, [])

  // Function to truncate the description
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  }

  return (
    <div className='products-container'>
      <h1>All Products</h1>
      {isLoading && <p>Products Are Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <section className='products'>
          {products && products.length && products.map((product) => {
            const { id, title, description, price, category, images } = product
            return (
              <article key={id} className='product'>
                <img className="product-image" src={images[0]} alt={title} />
                <h1 className='product-details-title'>{title}</h1>
                <p className='product-details-description'>{description && truncateDescription(description, 100)}</p>
                <p className='product-details-category'>
                  <span className='product-span'>Category:</span>{category}
                </p>
                <p className='product-details-price'>
                  <span className='product-span'>Price:</span>{price}
                </p>
                <Link to={`/products/${id}`} state={product} className="button-link">
                  Show Details
                </Link>
              </article>

            )
          })}
        </section>
      )}
    </div>
  )
}

export default Products
