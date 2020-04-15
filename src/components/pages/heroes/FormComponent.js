import React from 'react';
import { Button , Card } from 'react-bootstrap';
import axios from 'axios';
import { Formik } from 'formik';
import Logo from './nkri.png'

const forms = () => {
  return(
      <div>
                <header className="App-header">
    <Formik
      initialValues={{  
        id:'',     
      fullName:'',
      born:'',
      died:'',
      description:'',
      establishment:'',
      imgUrl:'' }}
      onSubmit={(values, actions) => {
        axios({
          method: "POST",
          url: "http://localhost:3001/heroes",
          data: values
        })
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
          window.location.reload();  
        }, 1000);
      }}
    >
      {props => (
            <form onSubmit={props.handleSubmit}>
            <Card style={{ width: '60vh',border:'3px solid black'}}>
        <Card.Img variant="top" src={Logo} style={{paddingTop:'-210px',width:'100%' }} />
        <Card.Body style={{ color:'black' }}>
          <label >Full Name</label>
          <input
              name="fullName"
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.fullName}
              placeholder="Nama Pahlawan"
            />
            <label >Born</label>
          <input
              name="born"
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.born}
              placeholder="Born"
              />
            <label >Died</label>
          <input
              name="died"
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.died}
              placeholder="Died"
            />
            <label >Description</label>
          <input
              name="description"
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.description}
              placeholder="Description"
            />
            <label >Establishment</label>
          <input
              name="establishment"
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.establishment}
              placeholder="Establishment"
            />
            <label >URL Image</label>
          <input
              name="imgUrl"
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.imgUrl}
              placeholder="URL Image"
            /><br/>
            
        <Button variant="primary" type="submit" id="simpanHeroes" style={{marginTop:'20px'}}>
          Submit
        </Button>
        </Card.Body>
      </Card>
      </form>
      )}
    </Formik>
    </header>
  </div>
  )
};
export default forms;