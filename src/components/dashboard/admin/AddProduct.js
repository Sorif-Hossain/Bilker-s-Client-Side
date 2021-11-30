import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";


const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    axios
      .post("https://evening-river-57363.herokuapp.com/products", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Product added successfully");
          reset();
        }
      })
      .catch((err) => alert(`${err.message}`));
  };
  return (
    <Container className=" text-center">
      <h2>Add product as Admin</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Product Name"
          {...register("pname")}
          required
          className='m-1'
        />
        <br />
        <input
          type="text"
          placeholder="Image url"
          {...register("image")}
          required
          className='m-1'
        />
        <br />
        <input
          type="text"
          placeholder="Product Brand"
          {...register("brand")}
          required
          className='m-1'
        />
        <br />
        <input
          type="number"
          placeholder="Price"
          {...register("price")}
          required
          className='m-1'
        />
        <br />
        <input
          type="number"
          placeholder="Already Order number"
          {...register("order")}
          required
          className='m-1'
        />
        <br />
        <textarea
          placeholder="Peoduct Details"
          {...register("description")}
          required
          className='m-1'
        />
        <br />
        <input
          type="submit"
          value="Add Product"
        className='m-1'
        />
      </form>
      
    </Container>
  );
};

export default AddProduct;
