// Components
import CustomizedModal from "./modal/CustomizedModal";

// For CustomizedModal (props)

const closeButtonTextData = {
    closeButtonTextValue: 'Close (cross icon)',
    textNotificationValue: 'Notification message',
    confirmationTextValue: 'Understood'
};

export default function App () {
    return (
        // He's in absolute position, better if it placed in top of the other components
        <CustomizedModal 
            closeButtonText={closeButtonTextData.closeButtonTextValue} 
            textNotification={closeButtonTextData.textNotificationValue} 
            confirmationText={closeButtonTextData.confirmationTextValue} 
        />
    );
}