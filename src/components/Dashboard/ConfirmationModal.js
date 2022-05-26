import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { toast } from 'react-toastify';


const ConfirmationModal = ({ refetch, deletingOrder, setDeletingOrder, show, setShow }) => {

    const { userEmail } = deletingOrder;

    const handleDelete = () => {
        fetch(`http://localhost:5000/orders/${userEmail}`, {
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
            <Modal.Body>Are you sure cancel this order ?</Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={() => setShow(false)}>
                    No
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmationModal;