import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './form.css';
import { BASE_URL } from '../utils/config';

function DeleteForm() {
  const [image, setImage] = useState('');
  
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
  };

  function convertToBase64(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Result = reader.result;
      setImage(base64Result);
      setFormData((prevData) => ({
        ...prevData,
        photo: base64Result,
      }));
    };
    reader.onerror = (error) => {
      console.error('Error: ', error);
    };
  }

  const [objectId, setObjectId] = useState('');

  const handleInputChange = (e) => {
    setObjectId(e.target.value);
  };

  const handleSubmit = async () => {
    console.log('ObjectId:', objectId);

    try {
      const response = await fetch(`${BASE_URL}/tours/${objectId}`);
      const result = await response.json();
      console.log('Retrieved tour:', result);
      setObjectId(result.data._id);
      console.log('Updated objectId:', objectId);
      setFormData(result.data);
      console.log(image)
      console.log("photo:",formData.photo)
    } catch (error) {
      console.error('Error retrieving tour:', error);
      window.alert('Oops. Try Again');
    }
  };


  const handleDelete = async () => {
    console.log('update ObjectId:', objectId);
    try {
        const response = await fetch(`${BASE_URL}/tours/${objectId}`, {
          method: 'DELETE', 
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json' 
          },
          body: JSON.stringify(formData) 
        });
        const result = await response.json();
        if (!response.ok) {
          return alert(result.message);
        }
        window.alert("Deleted Successfully...")
        window.location.reload();
        
      } catch (error) {
        console.error('Error Deleting tour:', error);
        window.alert('Oops. Try Again');
      }
    
  };




  return (
    <section>
      <Container>
        <Row>
          <Col>
            <div className="search__input">
              <input
                type="text"
                placeholder="Enter the Tour Id"
                value={objectId}
                onChange={handleInputChange}
              />
              <button className="search__btn" onClick={handleSubmit}>
                 Get
              </button>

            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <form>
      <div className='form-main-group'>
              <div className="form-group">
                <label>Photo</label>
                <input type="file" name="photo" onChange={convertToBase64} />
                {formData.photo && <img width={100} height={100} src={formData.photo} alt="" />}
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Distance"
                  name="distance"
                  value={formData.distance}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Price"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  placeholder="Max - People"
                  name="maxGroupSize"
                  value={formData.maxGroupSize}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                
                  name="desc"
                  placeholder="Description"
                  value={formData.desc}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
              <div className="checkbox-container">
                <label htmlFor="featured">Featured</label>
                <input type="checkbox" id="featured" name="featured" checked={formData.featured} onChange={handleChange} />
              </div>
              </div>
              <button className='search__btn' type="button" onClick={handleDelete}>Delete</button>
</div>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default DeleteForm;