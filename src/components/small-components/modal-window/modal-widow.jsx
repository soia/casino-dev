import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import blueChip from './images/blue-chip.svg';
import yellowChip from './images/yellow-chip.svg';
import redChip from './images/red-chip.svg';
import styles from './modal-window.module.scss';
import './modal-window.scss';

const ModalWindow = props => {
    const {
        isOpen, onRequestClose, children, style,
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
                style={style}
            >
                <img src={blueChip} className={styles.blueChip} alt="blueChip" />
                <img src={yellowChip} className={styles.yellowChip} alt="yellowChip" />
                <img src={redChip} className={styles.redChip} alt="redChip" />
                {children}
            </Modal>
        </Fragment>
    );
};

ModalWindow.defaultProps = {
    isOpen: false,
    children: '',
    style: {},
    onRequestClose: () => {},
};

ModalWindow.propTypes = {
    isOpen: PropTypes.bool,
    onRequestClose: PropTypes.func,
    style: PropTypes.object,
    children: PropTypes.node,
};

export default ModalWindow;
