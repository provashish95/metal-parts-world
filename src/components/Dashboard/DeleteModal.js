import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

const DeleteModal = ({ refetch, deletingOrder, setDeletingOrder, show, setShow }) => {
    const { _id } = deletingOrder;
    console.log(_id);
    console.log(deletingOrder);
    const handleDelete = () => {
        fetch(`http://localhost:5000/allOrders/${_id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Deleted')
                    setDeletingOrder(null);
                    refetch();
                }
            })
    }

    return (

        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleDelete}>
                    delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteModal;