import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Pagination from './Pagination'

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // PAGINATION
  const itemsPerPage = 10;
  const [totalPages, setTotalPages] = useState(0);
  const [currentpage, setCurrentPage] = useState(1);

  const fetchData = () => {
    setIsLoading(true);
    setError(null);
    fetch(
      `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
        (currentpage - 1) * itemsPerPage
      }`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Data could not be fetched');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / itemsPerPage));
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  // Refetch data when the current page changes
  useEffect(() => {
    fetchData();
  }, [currentpage]); // Add `currentpage` as a dependency

  const onHandelCurrentPage = (index) => {
    setCurrentPage(index + 1);
  };




  // Function to truncate the description
  const truncateDescription = (description, maxLength) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + '...';
    }
    return description;
  };

  return (
    <div className="products-container">
      <h1>All Products</h1>
      {isLoading && <p>Products are loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && (
        <>
          <section className="products">
            {products.length > 0 &&
              products.map((product) => {
                const { id, title, description, price, category, images } = product;
                return (
                  <article key={id} className="product">
                    <img className="product-image" src={images[0]} alt={title} />
                    <h1 className="product-details-title">{title}</h1>
                    <p className="product-details-description">
                      {truncateDescription(description, 100)}
                    </p>
                    <p className="product-details-category">
                      <span className="product-span">Category:</span> {category}
                    </p>
                    <p className="product-details-price">
                      <span className="product-span">Price:</span> ${price}
                    </p>
                    <Link
                      to={`/products/${id}`}
                      state={product}
                      className="button-link"
                    >
                      Show Details
                    </Link>
                  </article>
                );
              })}
          </section>

        
        <Pagination totalPages={totalPages} currentpage={currentpage} onHandelCurrentPage={onHandelCurrentPage}/>

        </>
      )}
    </div>
  );
};

export default Products;
