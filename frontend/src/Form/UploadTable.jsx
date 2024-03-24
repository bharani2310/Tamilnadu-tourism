import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../utils/config';
import { Container, Row, Col } from 'reactstrap';
import useFetch from '../hooks/useFetch'
import UpdateForm from "../Form/UploadForm";
import CreateForm from "../Form/CreateImage";
import './table.css'


function UploadTable() {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { data: tours, loading, error} = useFetch(`${BASE_URL}/gallery/getAll?page=${page}`)
  const { data: galleryCount } = useFetch(`${BASE_URL}/gallery/search/getGalleryCount`)

  useEffect(() => {
    const pages = Math.ceil(galleryCount / 8)
    setPageCount(pages);
    window.scrollTo(0, 0)
  }, [page, galleryCount]);

  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedTourId, setSelectedTourId] = useState(null);

  const handleCreateClick = () => {
    setShowCreateForm(!showCreateForm);
  };
  const handleUpdateClick = (tourId) => {
    setShowUpdateForm(!showUpdateForm);
    setSelectedTourId(tourId);
  };



  const handleDelete = async (tourId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete?');
    if (confirmDelete) {
      try {
        const response = await fetch(`${BASE_URL}/gallery/${tourId}`, {
          method: 'DELETE',
          credentials: 'include',
        });
        console.log("Response : ",response.ok);
        if (response.ok) {
          window.alert('Gallery Image deleted successfully');
          window.location.reload();
        } else {
          window.alert('Failed to delete tour');
        }
      } catch (error) {

      }
    }
    else{
        window.alert("Cancelled Deletion Operation");
    }
    
  };

  return (
    <>
      <section>
        <Container>
          {loading && <h4 className='text-center pt-5'>Loading.......</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}
          {!loading && !error && (
            <Row>
              <div className="table-header"><button className='create' onClick={handleCreateClick} style={{ color: 'white' }}>Create</button></div>
              {showCreateForm && (
              <div className="booking__form-overlay">
                <div className="booking__form">
                  <button onClick={() => setShowCreateForm(false)} className='close'><i className="ri-close-circle-fill" style={{ fontSize: '2.3rem' }}></i></button>
                  <CreateForm/>
                </div>
              </div>
            )}
              <div className='table-wrapper'>
              <table className='booking-table'>
                <thead>
                  <tr>
                    <th>Photo</th>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tours?.map((tour) => (
                    <tr key={tour._id}>
                      <td><img src={tour.photo} alt={tour.title} style={{ width: '100px', height: 'auto' }} /></td>
                      <td>{tour.title}</td>
                      <td>{tour.genre}</td>
                      <td>
                      <button className="btn primary__btn" style={{ color: 'white', marginRight: '10px' }} onClick={() => handleUpdateClick(tour._id)}>Edit</button>
                      {showUpdateForm && selectedTourId === tour._id && ( // Show UpdateForm only for the selected tour ID
                        <div className="booking__form-overlay">
                          <div className="booking__form">
                            <button onClick={() => setShowUpdateForm(false)} className='close'><i className="ri-close-circle-fill" style={{ fontSize: '2.3rem' }}></i></button>
                            <UpdateForm tourId={selectedTourId} /> 
                          </div>
                        </div>
                      )}
                        <button className="btn danger" style={{ color: 'white' }} onClick={() => handleDelete(tour._id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
              <Col lg='12'></Col>
              <Col lg='12'>
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map(number => (
                    <span key={number} onClick={() => setPage(number)} className={page === number ? 'active__page' : ''}>
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>
    </>
  );
}

export default UploadTable;
