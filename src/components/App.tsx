import { useState } from "react";

// Components
import CustomizedModal from './modal/CustomizedModal';

export default function App () {
    const [modal, setModal] = useState<boolean>(false);

    // Open modal
    function change () {
        setModal(!modal);
    }

    // For CustomizedModal (props)
    const closeButtonTextData = {
        closeButtonTextValue: 'Close',
        textNotificationValue: 'Notification message',
        confirmationTextValue: 'Understood'
    };

    return (
        <>
            {/* Trigger example for open modal */}
            <button onClick={change}>
                Open modal {modal ? 'true': 'false'}
            </button>

            {/* He's in absolute position, better if it placed in top of the other components */}
            <CustomizedModal
                closeButtonText={closeButtonTextData.closeButtonTextValue} 
                textNotification={closeButtonTextData.textNotificationValue} 
                confirmationText={closeButtonTextData.confirmationTextValue} 
                modalState={modal}
                changeModalState={setModal}
            />
        </>
    );
}