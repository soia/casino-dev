import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

const ModalWindow = props => {
    const {
        isOpen,
        onRequestClose,
        children,
    } = props;

    return (
        <Fragment>
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                ariaHideApp={false}
                className="reactModal"
                contentLabel="Example Modal"
                overlayClassName="modalOverlay"
            >
                {children}
            </Modal>
        </Fragment>
    );
};

ModalWindow.defaultProps = {
    isOpen: false,
    children: '',
    onRequestClose: () => {},
};

ModalWindow.propTypes = {
    isOpen: PropTypes.bool,
    onRequestClose: PropTypes.func,
    children: PropTypes.node,
};

export default ModalWindow;
