import React from 'react';
import { Button , Card , Form} from 'react-bootstrap';
import axios from 'axios';
import { Formik } from 'formik';


// const Button1 = () => {
//   return (
//     <>
//     <Button variant="primary">Primary</Button>
//     </>
//   )
// }

// document.getElementById('simpanHeroes').addEventListener('click',function(event){


//   const fullName = document.getElementsByName('fullName')[0].value;
//   const born = document.getElementsByName('born')[0].value;
//   const died = document.getElementsByName('died')[0].value;
//   const description = document.getElementsByName('description')[0].value;
//   const establishment = document.getElementsByName('establishment')[0].value;
//   const imgUrl = document.getElementsByName('imgUrl')[0].value;
  
//   axios.post('http://localhost:3001/heroes', {
//     fullName,
//     born,
//     died,
//     description,
//     establishment,
//     imgUrl
//   })
// })



// const Input = () => {
//   axios.post('http://localhost:3001/heroes', formik.values)
//   const formik = withFormik({
//     initialValues :{

//     },
//     onSubmit: values => {
//       console.log(values)
//     },
//   });

    

//   return(
//     <>

//     </>
//   )
// }

// export default Input;



const forms = () => {
  // let handleOnSubmit = (values, actions) =>{
    
  // }

  return(
      <div>
    {/* <h1>My Form</h1> */}
    <Formik
      initialValues={{       
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
            <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src="foto" />
        <br/>
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
            
        <Button variant="primary" type="submit" id="simpanHeroes">
          Submit
        </Button>
        </Card.Body>
      </Card>
      </form>
      )}
    </Formik>
  </div>
  )
};
export default forms;