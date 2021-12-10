import React from 'react'
import { Modal, Form, Input } from 'antd';


function EditModal({ isModalVisible, onCancel, onCreate, modalValues }) {
    const {name, phone, email, website} = modalValues;
    const [form] = Form.useForm();
    return (
        <Modal
      visible={isModalVisible}
      title="Edit Details"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        name="form_in_modal"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{
            name: name,
            phone: phone,
            email: email,
            website: website
        }}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true}]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true}]}
        >
          <Input type='email' />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true}]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="website"
          label="Website"
          rules={[{ required: true}]}
        >
          <Input type='url' />
        </Form.Item>
      </Form>
    </Modal>
    )
}

export default EditModal
