//step 1: to display all the products
//step 2: to delete the product based upon a click

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DeletePage() {
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
  }, []);
  const handleDelete = async (productId) => {
    if(window.confirm("Are you sure you want to delete this product ?")){
    try {
      await axios.delete(`http://localhost:3000/api/products/${productId}`)
      setProducts(products.filter(product => product._id !== productId ))
      //es6 function filter allows you to update the information which recently gone
    } catch (error) {
      console.log("error in deleteing product",error);
    }    
  }
}
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
              <th>Actions</th>
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
                <td>
                  <button onClick={ () => handleDelete(product._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default DeletePage;
