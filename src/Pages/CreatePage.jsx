import { useForm } from "react-hook-form"
import axios from 'axios'
//step 1: to use react-hookform and get data into object
//step 2: use post api and send data to server

export default function CreatePage() {
  const { register, handleSubmit, reset } = useForm()
  const onSubmit = async (data) => {
    //console.log(data)
    try {
      //main logic
      const response  = await axios.post('http://localhost:3000/api/products',data)
      console.log("Product is created successfully", response.data);
      alert("Product is created successfully", response.data)
      reset()
    } catch (error) {
      //failure
      console.log("error in creating product",error);
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Product Form</h2>
      <label >Enter Product Name</label>
      <input {...register("p_name")} />
      <br />
      <label >Enter Product Price</label>
      <input {...register("price")} />
      <br />
      <label >Enter Product Description</label>
      <textarea  {...register("description")} />
      <br />
      <input type="submit" />
    </form>
  )
}