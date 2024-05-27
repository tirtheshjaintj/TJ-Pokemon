import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Card({ beer}) {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card mb-4">
        <img
          src={beer.image}
          className="card-img-top img-fluid"
          onError={(e) => {
            e.target.src = "https://www.eatingwell.com/thmb/AdUlkswyOCpPaEEQkkDmYbPW5XM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/does-beer-expire-2000-2bc4cb2e8f9b4947b14e13d41a14d999.jpg";
          }}
          alt="Beer Thumbnail"
          style={{
            height: '200px',
            objectFit: 'cover',
            cursor: 'pointer',
          }}
          onClick={handleShow}
        />
        <div className="card-body">
          <h5 className="card-title">{beer.name.substr(0,25)+"..."}</h5>
          <p className="card-text"><b>Price:</b> {beer.price}</p>
          <p className="card-text"><b>Rating:</b> {beer.rating.average.toFixed(2)}</p>
          <p className="card-text"><b>Reviews:</b> {beer.rating.reviews}</p>
          <div className="d-flex flex-column justify-content-end">
            <Button className="btn btn-primary m-2" onClick={handleShow}>
              View Beer <i className="fa fa-eye" aria-hidden="true"></i>
            </Button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{beer.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={6}>
              <div>
                <p><b>Price:</b> {beer.price}</p>
                <p><b>Rating:</b> {beer.rating.average.toFixed(2)}</p>
                <p><b>Reviews:</b> {beer.rating.reviews}</p>
              </div>
            </Col>
            <Col xs={6}>
              <img
                src={beer.image}
                className="img-fluid"
                onError={(e) => {
                  e.target.src = "https://www.eatingwell.com/thmb/AdUlkswyOCpPaEEQkkDmYbPW5XM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/does-beer-expire-2000-2bc4cb2e8f9b4947b14e13d41a14d999.jpg";
                }}
                alt="Beer Thumbnail"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: 'auto',
                }}
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
