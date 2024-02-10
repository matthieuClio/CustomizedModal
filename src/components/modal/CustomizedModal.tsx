// Style
import './customizedModal.scss';

export default function CustomizedModal () {
    return (
        <div className="background-modal">
            <div className="background-modal__customized-modal">
                {/* Close button */}
                <header className="background-modal__customized-modal__header">
                    <button className="background-modal__customized-modal__header__close-button customized-modal-button">
                        Close (cross icon)
                    </button>
                </header>

                {/* Text */}
                <div className="background-modal__customized-modal__content">
                    <p className="background-modal__customized-modal__content__text">
                        Notification message
                    </p>

                    <button className="background-modal__customized-modal__content__valide-button customized-modal-button">
                        Understood
                    </button>
                </div>
            </div>
        </div>
    );
}