import React from 'react'
import { EditOutlined, DeleteFilled, MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import LikeBtn from '../likeBtn/LikeBtn';
import { Card } from 'antd';
import './UserCard.css'

function UserCard({ userData, handleDelete, showModal}) {
  const { id, name, email, phone, website } = userData;

  const iconStyles = {
    fontSize: '18px',
    marginRight: '9px'
  }


  return (
    <div>
      
      <Card
        key={id}
        cover={
          <img
            alt="example"
            className='avatar'
            src={`https://avatars.dicebear.com/v2/avataaars/${name}.svg?options[mood][]=happy`}
          />
        }
        actions={[
          <LikeBtn />,
          <EditOutlined key="edit" style={{ fontSize: '18px' }} onClick={() => showModal(id)} />,
          <DeleteFilled key="delete" style={{ fontSize: '18px' }} onClick={() => handleDelete(id)} />,
        ]}
      >
        <div className='card-details'>
          <h3 className='name'>{name}</h3>
          <p><MailOutlined style={iconStyles} />{email}</p>
          <p><PhoneOutlined style={iconStyles} />{phone}</p>
          <p><GlobalOutlined style={iconStyles} />{'http://' + website}</p>
        </div>
      </Card>
    </div>
  )
}

export default UserCard
