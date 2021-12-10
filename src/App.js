import './App.css';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import fetchUserData from './api/userdata';
import { useEffect, useState } from 'react';
import UserCard from './components/userCard/UserCard';
import LoadingIndicator from './components/loadingIndicator/LoadingIndicator';
import EditModal from './components/editModal/EditModal';

function App() {
  const [userData, setUserData] = useState([]);     // all the user's data
  const [isLoading, setIsLoading] = useState(true);     // if true, loading indicator is visible 
  const [isModalVisible, setIsModalVisible] = useState(false);      // for showing modal
  const [currentSelectedCard, setCurrentSelectedCard] = useState();     // selecting the user who's details is being edited in the modal
  const [modalValues, setModalValues] = useState({})      // the new details of the user, whick are updated in the modal


  useEffect(() => {
    fetchUserData()
      .then(data => {
        setUserData(data);
        setIsLoading(false);
      })
  }, [])

  const handleDelete = (userId) => {
    console.log(userId, 'deleted!');
    const newUserData = userData.filter(user => user.id !== userId);
    setUserData(newUserData);
  }

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleCreate = (values) => {
    console.log('Received values of form: ', values);
    setIsModalVisible(false);
    setModalValues(values);
    const newUserData = userData.map(user => {
      if(user.id === currentSelectedCard) {
        return values;
      } else {
        return user;
      }
    });
    setUserData(newUserData);

  };

  const showModal = (id) => {  
    setIsModalVisible(true);
    setCurrentSelectedCard(id);
    userData.forEach(user => {
      if (user.id === id) {
        setModalValues(user)
      }
    })

  };


  return (
    <div className="App">
      <EditModal isModalVisible={isModalVisible} onCancel={handleCancel} onCreate={handleCreate} modalValues={modalValues} />
      {!isLoading ? (
        <Row gutter={[30, 30]}>
          {
            userData.map(info => {
              return (
                <Col className="gutter-row" xs={24} sm={24} md={8} lg={8} xl={6} key={info.id}>
                  <UserCard userData={info} showModal={showModal} handleDelete={handleDelete} />
                </Col>
              )
            }
            )
          }
        </Row>
      ) : <LoadingIndicator />} 
    </div>
  );
}

export default App;
