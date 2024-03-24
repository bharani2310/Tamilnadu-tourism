import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NewsLetter from '../shared/Newsletter';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import Subtitle from '../shared/Subtitle';
import { BASE_URL } from '../utils/config';
import { AuthContext } from '../context/AuthContext';
import './../styles/dashboard.css'



const BookingList = () => {
const {user} = useContext(AuthContext)
const [bookings, setBookings] = useState([]);


  useEffect(() => {
    const fetchBookings = async () => {
        try {
            const response= await fetch(`${BASE_URL}/booking/${user.data._id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch bookings');
            }
            const data = await response.json();
            setBookings(data.data);
            console.log('Data : ',data.data)

        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };
    fetchBookings();
}, [user.data._id]); 


const updateBooking = async (id, updatedFields) => {
  try {
      const res = await fetch(`${BASE_URL}/booking/${id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedFields)
      });
      console.log("Updated Fields",updatedFields)
      const data = await res.json();
      console.log("data",data)
      if (!res.ok) {
          throw new Error(data.message);
      }
      window.alert("Updated Successfully")
      console.log("Booking updated successfully:", data);
  } catch (error) {
      console.error("Error updating booking:", error);
  }
};


const handleUpdate = (id) => {
  const updatedFields = {};
  const fullName = window.prompt("Enter the new full name:");
  const bookAt = window.prompt("Enter the new tour Date:");
  const guestSize = window.prompt("Enter the Number of Passengers:");
  

  if (fullName !== null && fullName !== '') {
      updatedFields.fullName = fullName;
  }
  if (bookAt !== null && bookAt !== '') {
      updatedFields.bookAt = bookAt;
  }
  if (guestSize !== null && guestSize !== '') {
      updatedFields.guestSize = guestSize;
  }
  

  if (Object.keys(updatedFields).length > 0) {
      updateBooking(id, updatedFields);
  } else {
      alert("No changes were made.");
  }
};






const handleCancel = async (id) => {

  console.log("this is the deleted id:",id)

  try {
    const res = await fetch(`${BASE_URL}/booking/${id}`, {
      method: 'DELETE',
      headers: {
          'content-type': 'application/json'
      },
      credentials: 'include'
  });
  const result = await res.json();
  if (!res.ok) {
      return alert(result.message);
  }
  window.alert("Cancelled Successfully...")
  

  
  } catch (err) {
    alert(err.message)
  }
};

return (
  
  <section>
  <Subtitle subtitle={'My Bookings'}/>
  <Container>
    {bookings.length > 0 ? (
      <table className="booking-table">
        <thead>
          <tr>
            <th>User Email</th>
            <th>Full Name</th>
            <th>Tour Name</th>
            <th>No.of.Passengers</th>
            <th>Booked At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.userEmail}</td>
              <td>{booking.fullName}</td>
              <td>{booking.tourName}</td>
              <td>{booking.guestSize}</td>
              <td>{booking.bookAt}</td>
              <td>
                <button className='btn booking__btn' onClick={() => handleUpdate(booking._id)}>Update</button>
                <button className='btn booking__cancel-btn' onClick={() => handleCancel(booking._id)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    ) : (
      <p>No bookings found</p>
    )}
  </Container>
</section>



  );

  
};

const Dashboard = () => {
  return <>

    <section>
    <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <BookingList/>
            <Subtitle subtitle={'Recommendations'} />
            <h2 className='featured__tour-title'>Our Best Featured Tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>

      <NewsLetter />
    </section>



    

    
    </>
};

export default Dashboard;




