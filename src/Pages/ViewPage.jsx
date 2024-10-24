import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewPage() {
  const [products, setProducts] = useState([]);
  //to save the API output in variable

  useEffect(() => {
    axios.get('http://localhost:3000/api/products') 
      .then(response => {
        setProducts(response.data);
        console.log(response.data);
        //accept success part
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div>
      <h1>Products</h1>
      
      {products.length === 0 ? (
        <p>No products found...</p>
      ) : (
        <table border='2' cellSpacing='0' cellPadding='10'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              
            </tr>
          </thead>
          <tbody>
            { /* in es6 you have this map function, if you want to iterate through one array  */}
            {products.map(product => (
              <tr key={product.id}>
                <td>{product._id}</td>
                <td>{product.p_name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ViewPage;
