import React from "react";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function SearchBar() {
    return (
        <Col className="position-relative">
            <div className="col-md-8 justify-content-center">
                <div className="search">
                    <i className="fa fa-search"></i>
                    <input type="text" className="form-control" placeholder="What do you want to learn"/>
                    <Button className="btn btn-primary">Learn</Button>
                </div>
            </div>
        </Col>
    )
}

export default SearchBar;