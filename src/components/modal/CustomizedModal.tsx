// Style
import './customizedModal.scss';

export default function CustomizedModal (props: {
    closeButtonText: string,
    textNotification: string,
    confirmationText: string
}) {
    const { closeButtonText, textNotification, confirmationText } = props;
    return (
        <div className="background-modal">
            <div className="background-modal__customized-modal">
                {/* Close button */}
                <header className="background-modal__customized-modal__header">
                    <button className="background-modal__customized-modal__header__close-button customized-modal-button">
                        {closeButtonText}
                    </button>
                </header>

                {/* Text */}
                <div className="background-modal__customized-modal__content">
                    <p className="background-modal__customized-modal__content__text">
                        {textNotification}
                    </p>

                    <button className="background-modal__customized-modal__content__valide-button customized-modal-button">
                        {confirmationText}
                    </button>
                </div>
            </div>
        </div>
    );
}