import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';

const ProductModal = ({ refetch, deletingOrder, setDeletingOrder, show, setShow }) => {
    const { _id } = deletingOrder;

    const handleDelete = () => {
        fetch(`http://localhost:5000/product/${_id}`, {
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
            <Modal.Body>Are you sure delete this product?</Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={() => setShow(false)}>
                    NO
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ProductModal;