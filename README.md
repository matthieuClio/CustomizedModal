# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


Hello, this is a modal component who can be customized.
I will show you an example of use comented.

(You will have a style already apply on the component.)

```js
// We will need to share the parent state to our "CustomizedModal" component
import { useState } from "react";

// Components
import CustomizedModal from './modal/CustomizedModal';


// This App component can the component where you want placed the modal
export default function App () {
    // Here we defined a booleen state hook
    const [modal, setModal] = useState<boolean>(false);

    // This is the function who will open the modal
    function change () {
        setModal(!modal);
    }

    // For CustomizedModal (props) component, it will be your custom text button or message
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

            {/* 
            - This is the component -
            He's in absolute position, better if it placed in top of the other components
            */}
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
```