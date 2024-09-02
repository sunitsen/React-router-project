import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css'; 

const ProductDetails = () => {
  const { id } = useParams();
  
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = () => {
    setIsLoading(true);
    setError(null);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Data could not be fetched');
        }
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className="product-details-container">
      <h1 className="product-details-title">Product Details</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && product && (
        <article className="product-details-card">
          {product.images && product.images.length > 0 ? (
            <img src={product.images[0]} alt={product.title} className="product-details-image" />
          ) : (
            <p>No image available</p>
          )}
          <div>
            <h2 className="product-details-name">{product.title}</h2>
            <p className='product-details-description'>{product.description}</p>
            <table className="product-details-table">
              <tbody>
                <tr>
                  <th>Category:</th>
                  <td>{product.category}</td>
                </tr>
                <tr>
                  <th>Price:</th>
                  <td>${product.price}</td>
                </tr>
                <tr>
                  <th>Discount:</th>
                  <td>{product.discountPercentage}%</td>
                </tr>
                <tr>
                  <th>Rating:</th>
                  <td>{product.rating} / 5</td>
                </tr>
                <tr>
                  <th>Stock:</th>
                  <td>{product.stock} units</td>
                </tr>
                <tr>
                  <th>Tags:</th>
                  <td>{product.tags ? product.tags.join(', ') : 'No tags available'}</td>
                </tr>
                <tr>
                  <th>Brand:</th>
                  <td>{product.brand}</td>
                </tr>
                <tr>
                  <th>SKU:</th>
                  <td>{product.sku}</td>
                </tr>
                <tr>
                  <th>Weight:</th>
                  <td>{product.weight}g</td>
                </tr>
                <tr>
                  <th>Dimensions:</th>
                  <td>{product.dimensions ? `${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth} cm` : 'No dimensions available'}</td>
                </tr>
                <tr>
                  <th>Warranty Information:</th>
                  <td>{product.warrantyInformation}</td>
                </tr>
                <tr>
                  <th>Shipping Information:</th>
                  <td>{product.shippingInformation}</td>
                </tr>
                <tr>
                  <th>Availability:</th>
                  <td>{product.availabilityStatus}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Link to="/products" className='product-link'>Shop More</Link>
        </article>
      )}
    </div>
  );
};

export default ProductDetails;
