// React
import { Dispatch, SetStateAction } from 'react';

// Style
import './customizedModal.scss';

export default function CustomizedModal (props: {
    closeButtonText: string,
    textNotification: string,
    confirmationText: string,
    modalState: boolean,
    changeModalState: Dispatch<SetStateAction<boolean>>
}) {
    const { closeButtonText, textNotification, confirmationText, modalState, changeModalState } = props;

    function closeModal () {
        changeModalState(!modalState);
    }

    return (
        <div className={modalState ? 'background-modal': 'background-modal-display-none'}>
            <div className="background-modal__customized-modal">
                {/* Close button */}
                <header className="background-modal__customized-modal__header">
                    <button onClick={closeModal} className="background-modal__customized-modal__header__close-button customized-modal-button">
                        {closeButtonText}
                    </button>
                </header>

                {/* Text */}
                <div className="background-modal__customized-modal__content">
                    <p className="background-modal__customized-modal__content__text">
                        {textNotification}
                    </p>

                    <button onClick={closeModal} className="background-modal__customized-modal__content__valide-button customized-modal-button">
                        {confirmationText}
                    </button>
                </div>
            </div>
        </div>
    );
}