import { React ,useContext, useEffect,useState }from "react";
import { AuthContext } from "../context/AuthContext";
import { Container, Row, Col } from 'reactstrap';
import { useNavigate } from "react-router-dom";
import './../styles/admin-dashboard.css'
import Subtitle from '../shared/Subtitle';
import { BASE_URL } from './../utils/config';
import UploadTable from "../Form/UploadTable";
import Table from "../Form/Table";



const AdminDashboard = () => {
const {user} = useContext(AuthContext)
const navigate=useNavigate();

  const [userCount, setUserCount] = useState(0);
  const [tourCount, setTourCount] = useState(0);
  const [bookingCount, setBookingCount] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);

useEffect(() => {
    // console.log("user",user)

    move();
    fetchCounts();
});

const move = () => {
    if(user===null || user===undefined || !user){
        navigate("/");
    }
    if (user && user.role === "user" ) {
        navigate("/");
    }    
}

const fetchCounts = async () => {
    try {
      //Fetch user count
      const res = await fetch(`${BASE_URL}/users`)
      const result = await res.json()
      setUserCount(result.count);    

      //Fetch tour count
      const toursResponse = await fetch(`${BASE_URL}/tours/search/getTourCount`);
      const toursData = await toursResponse.json();
      setTourCount(toursData.data);

      //Fetch bookings count //Fetch tour count
      const bookResponse = await fetch(`${BASE_URL}/booking`);
      const bookData = await bookResponse.json();
      setBookingCount(bookData.count);

      //Fetch review count //Fetch tour count
      const reviewResponse = await fetch(`${BASE_URL}/review`);
      const reviewData = await reviewResponse.json();
      setReviewCount(reviewData.count);


      
    } catch (error) {
      console.error('Error fetching counts:', error);
    }
  };

  const [showTable, setShowTable] = useState(false);
  const [showUploadForm, setShowUploadForm] = useState(false);

 

  const handleShowClick = () => {
    setShowTable(!showTable);
    setShowUploadForm(false);
  };

  




  const handleUploadClick = () => {
    setShowUploadForm(!showUploadForm);
    setShowTable(false);
  };



    return <>


<Container>
                <Row>
                    <Col lg='12'>
                        <div className="experience__content">
                            <Subtitle subtitle={'User and Tour Data'}/>
                            
                        </div>

                        <div className="counter__wrapper d-flex align-items-center gap-5">
                            <div className="counter__box">
                                <span>
                                    {userCount}
                                </span>
                                <h6>Total number Of Users</h6>
                            </div>

                            <div className="counter__box">
                                <span>
                                    {tourCount}
                                </span>
                                <h6>Total number of Tours</h6>
                            </div>
                            <div className="counter__box">
                                <span>
                                    {bookingCount}
                                </span>
                                <h6>Total number of Bookings</h6>
                            </div>
                            <div className="counter__box">
                                <span>
                                    {reviewCount}
                                </span>
                                <h6>Total number of Reviews</h6>
                            </div>
                        </div>
                    </Col>                   
                </Row>
            </Container>


            <section>
                <Container>
                    <Row>
                        <Col>
                            <div className="buttons">
                                <button onClick={handleShowClick}>Show All Tours</button>
                                <button onClick={handleUploadClick}>Show Gallery Image</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

                <Container>
                    <Row>
                        <Col>
                            {showTable && <Table />}

                            {showUploadForm && (
                                <div>
                                <button onClick={() => setShowUploadForm(false)} className='close'><i className="ri-close-circle-fill" style={{ fontSize: '2.3rem' }}></i></button>
                                <UploadTable/>
                                </div>
                            )}

                        </Col>
                    </Row>
                </Container>
               
    
    </>
}

export default AdminDashboard;