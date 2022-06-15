import {
    Button,
    Form,
    Input,
    Select,
  } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
  import React, { useState } from 'react';
  const { Option } = Select;

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  
  const RegisterForm = () => {
    const [form] = Form.useForm();
    const [availableAs, setAvailableAs] = useState('passenger');
    
    const changeAvailableAs = (value) => {
      setAvailableAs(value);
    }
  
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
      axios.post('http://sawari-server.herokuapp.com/api/auth/register', values)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    };
  
    return (
      <Form
        {...formItemLayout}
        form={form}
        name="register"
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            gender: 'Male',
            cnic: '',
            monthlyCharges: '',
            occupation: '',
            days: 'Mon-To-Fri',
            timings: '',
            displayContact: 'Yes',
            availableStatus: 'Available',
            availableAs: 'Passenger',
            carDetails: '',
            pickupHouseNumber: '',
            pickupPhase: '',
            pickupSector: '',
            pickupStreet: '',
            pickupCity: '',
            dropoffCity: '',
            dropoffHouseNumber: '',
            dropoffPhase: '',
            dropoffSector: '',
            dropoffStreet: ''
        }}
        onFinish={onFinish}
        scrollToFirstError
      >

        <Form.Item
          name="firstName"
          label="First Name"
          rules={[
            {
              required: true,
              message: 'Please input your first name',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="Last Name"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        {/* <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
  
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item> */}
  
        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="gender"
          label="Gender"
        >
          <Select placeholder="Select your gender">
            <Option value="Male">Male</Option>
            <Option value="Female">Female</Option>
            <Option value="Other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="cnic"
          label="CNIC"
        >
          <Input />
        </Form.Item>

      <Form.Item
          name="availableAs"
          label="Available as"
        >
          <Select onChange={changeAvailableAs} placeholder="Select your available status">
            <Option value="Driver">Driver</Option>
            <Option value="Passenger">Passenger</Option>
            <Option value="Both">Both</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="monthlyCharges"
          label="Monthly Charges"
        >
          <Input />
        </Form.Item>

        {
          availableAs.toLocaleLowerCase() !== "passenger" ? <Form.Item
          name="carDetails"
          label="Car Details"
        >
          <TextArea />
        </Form.Item> : ''
        }

        <Form.Item
          name="occupation"
          label="Occupation"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="days"
          label="Days"
        >
          <Select placeholder="Select your status">
            <Option value="Mon-To-Fri">Mon - Fri</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="timings"
          label="Timings"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="displayContact"
          label="Display Contact"
        >
          <Select placeholder="Want to display your contact">
            <Option value="Yes">Yes</Option>
            <Option value="No">No</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="availableStatus"
          label="Status"
        >
          <Select placeholder="Select your status">
            <Option value="Available">Available</Option>
            <Option value="Occupied">Occupied</Option>
          </Select>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
           <p style={{fontSize: '20px', color: '#ffffff', fontWeight: 500, textAlign: 'center', margin: '15px 0 0 0'}}>PICK UP POINT DETAILS</p>
        </Form.Item>

        <Form.Item
          name="pickupHouseNumber"
          label="House Number"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="pickupStreet"
          label="Street / Lane"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="pickupSector"
          label="Sector"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="pickupPhase"
          label="Phase"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="pickupCity"
          label="City"
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
           <p style={{fontSize: '20px', color: '#ffffff', fontWeight: 500, textAlign: 'center', margin: '15px 0 0 0'}}>DROP OFF POINT DETAILS</p>
        </Form.Item>

        <Form.Item
          name="dropoffHouseNumber"
          label="House Number"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="dropoffStreet"
          label="Street / Lane"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="dropoffSector"
          label="Sector"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="dropoffPhase"
          label="Phase"
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="dropoffCity"
          label="City"
        >
          <Input />
        </Form.Item>
  
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" style={{width: '100%'}} htmlType="submit">
            SUBMIT
          </Button>
        </Form.Item>
      </Form>
    );
  };
  
  export default RegisterForm;