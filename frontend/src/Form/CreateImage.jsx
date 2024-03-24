import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { BASE_URL } from '../utils/config';

function UploadForm({ tourId }) {
  const genres = ['Adventure', 'Art and Culture', 'Beaches', 'Crafts', 'Cuisine', 'Festivals', 'Forts', 'Hills', 'Lakes', 'Monuments', 'Museum', 'Palaces', 'Pilgrim Centers', 'Places of Interest', 'Waterfalls', 'Wellness', 'Wild Life', 'Heritage Sites'];
  const [image, setImage] = useState('');
  const [formData, setFormData] = useState({
    photo: null,
    title: '',
    genre: '',
  });




  function convertToBase64(e) {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64Result = reader.result;
      console.log(base64Result);
      setImage(base64Result); // Update image state
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
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form :", formData);
    UploadImage(formData);
  };

  async function UploadImage(data) {
    try {
      const response = await fetch(`${BASE_URL}/gallery`, {
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
      window.alert("Image Uploaded Successfully")
      window.location.reload();
      console.log('Uploaded Image:', result);
      return result;
    } catch (error) {
      window.alert("Oops. Try Again")
      console.error('Error Uploading Image:', error);
      throw error;
    }
  }

  return (
    <>
      <Container>
        <Row>
          <Col>
            <form onSubmit={handleSubmit}>
              <div className='form-main-group'>
                <div className="file-input-container">
                  <input type="file" id="photo" name="photo" onChange={convertToBase64} />
                  {image ? <img width={100} height={100} src={image} alt='' /> : null}
                </div>

                <div className="form-group">
                  <input type="text" placeholder='Title' name="title" value={formData.title} required onChange={handleChange} />
                </div>

                <div className="form-group">
                  <select name="genre" value={formData.genre} onChange={handleChange} className="form-control">
                    {genres.map((genre, index) => (
                      <option key={index} value={genre}>{genre}</option>
                    ))}
                  </select>
                </div>

                <button className='search__btn' onClick={handleSubmit}>Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default UploadForm;
