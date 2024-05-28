import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Card({beer}) {
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const id=beer.url.replace(/^.*\/pokemon\/(\d+)\/.*$/, '$1');
  return (
    <div className="col-md-4 col-sm-6">
      <div className="card mb-4">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${id}.png`}
          className="card-img-top img-fluid"
          alt="Poki Thumbnail"
          style={{
            height: '350px',
            objectFit: 'cover',
            cursor: 'pointer',
          }}
          onClick={handleShow}
        />
        <div className="card-body">
          <h2 className="card-title text-capitalize text-xl">{beer.name}</h2>
          <div className="d-flex flex-column justify-content-end">
            <Button className="btn btn-primary m-2" onClick={handleShow}>
              View Pokemon Live <i className="fa fa-eye" aria-hidden="true"></i>
            </Button>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className='text-capitalize'>{beer.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className='justify-content-center'>
            <Col xs={6}>
              <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/${id}.gif`}
                  className="img-fluid"             
                alt="Poki Thumbnail"
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
