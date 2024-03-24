import React, { useState } from 'react';
import { BASE_URL } from '../utils/config';
import './form.css'

function CreateForm({ onSubmit }) {
    const [image,setImage]=useState('')
  const [formData, setFormData] = useState({
    title: '',
    city: '',
    address: '',
    distance: '',
    price: '',
    maxGroupSize: '',
    desc: '',
    photo: null,
    featured: false,
  }); 






  function convertToBase64(e){
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        const base64Result = reader.result;
        console.log(base64Result);
        setImage(base64Result);
        setFormData((prevData) => ({
            ...prevData,
            photo: base64Result,
          }));
    };
    reader.onerror = error => {
        console.log("Error: ", error);
    };
}

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form :",formData)
    createTour(formData);
  };



  async function createTour(data) {
    try {
      const response = await fetch(`${BASE_URL}/tours`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        return alert(result.message);
      }
      window.alert("Tour Created Successfully")
      window.location.reload();
      console.log('Created tour:', result);
      return result;
    } catch (error) {
        window.alert("Oops.Try Again")
      console.error('Error creating tour:', error);
      throw error;
    }
  }
  




  return (
    <form onSubmit={handleSubmit}>
      <div className='form-main-group'>
      <div className="file-input-container">
        <input type="file" id="photo" name="photo" onChange={convertToBase64} />
        {image==='' || image===null ?"":<img width={100} height={100} src={image} alt=''/>}
      </div>
      <br/>
      <div className="form-group">
          <input type="text" placeholder='Title' name="title" value={formData.title} required onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="text" placeholder='City' name="city" value={formData.city} required onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="text" placeholder='Address' name="address" value={formData.address} required onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="number" placeholder='Distance' name="distance" value={formData.distance} required onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="number" placeholder='Price' name="price" value={formData.price} required onChange={handleChange} />
        </div>
        <div className="form-group">
          <input type="number" placeholder='Max - People' name="maxGroupSize" value={formData.maxGroupSize} required onChange={handleChange} />
        </div>
        <div className="form-group">
          <textarea  name="desc" placeholder='Description' value={formData.desc} required onChange={handleChange} />
        </div>
        
        <div className="form-group">
        <div className="checkbox-container">
            <label htmlFor="featured">Featured</label>
            <input type="checkbox" id="featured" name="featured" checked={formData.featured} onChange={handleChange} />
        </div>

        </div>
        <button className='search__btn' type="submit">Create</button>
        </div>
    </form>
  );
}

export default CreateForm;
