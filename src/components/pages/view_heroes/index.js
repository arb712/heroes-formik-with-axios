import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import axios from 'axios';

import Item from './Item';

// NYERAH BANG GAK MAU MUNCUL

class index extends Component {

    state = {
        data: []
    }

    componentDidMount(){
        axios.get('http://localhost:3001/heroes')
            .then( response => {
                this.setState({ data: response.data });
            })
    }

    render(){
        let tampilkanHeroes ;

        tampilkanHeroes = this.state.data.map( (item, index) => {
            return <Item key={index} data={item}></Item>
        })

        return (
            <header className="App-header">
            <div style={{backgroundColor:'black'}}>
                <h1 style={{color:'black'}}>Data Heroes</h1>
                <Row>
                    { tampilkanHeroes }
                </Row>
            </div>
            </header>
        )
    }
}

export default index;