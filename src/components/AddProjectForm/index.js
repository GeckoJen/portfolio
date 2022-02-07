import React, { useState, useRef, useEffect } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";

import styles from "../../../styles/addproject.module.css";

function AddProjectForm() {
    const [formData, setFormData] = useState({});
 
    const formRef = useRef();
    
  function handleChange(e) {
    setFormData({
      ...formData,
        [e.target.name]: e.target.value,
        });
       
    }

   
    function handleDateChange(date, dateString) {
         setFormData({
          ...formData,
          date: dateString,
        });
        
    }
    
    async function handleSubmit(e) {
      e.preventDefault();
      console.log(formData);
      // formRef.current.reset();

          let response = await fetch("https://geckojenportfolio.herokuapp.com/projects", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        });

        console.log(JSON.stringify(formData));
        response.status === 200
          ? alert("Project submitted successfully")
          : alert("There has been an error. Please try again later.");
        return response.json();
    }

const dateFormat = "YYYY/MM/DD";
  const { TextArea } = Input;

  return (
    <div className={styles.image}>
      <Form
        ref={formRef}
        className={styles.form}
        method="POST"
        action="submit"
        onSubmit={handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
      >
        <Form.Item label="Project title">
          <Input name="title" onChange={handleChange} required />
        </Form.Item>
        <Form.Item label="Brief description">
          <Input name="description" onChange={handleChange} required />
        </Form.Item>
        <Form.Item label="Deployed site address">
          <Input name="deploy" onChange={handleChange} required />
        </Form.Item>
        <Form.Item label="Github repo address">
          <Input name="github" onChange={handleChange} required />
        </Form.Item>
        <Form.Item label="Detailed description">
          <TextArea name="documentation" rows={4} onChange={handleChange} required />
        </Form.Item>
        <Form.Item label="Date project completed">
          <DatePicker name="date"
            onChange={handleDateChange}
                      format={dateFormat}
                    //   value={date}
            required
          />
        </Form.Item>

        <Form.Item label="Add project">
          <Button onClick={handleSubmit} shape="round">Add project</Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AddProjectForm;
