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

---


Hello, this is a simple modal component who can be customized.
(A style css is already apply on the component but you can customized the text notification and the button text)

Quick start :
1 - If you want to use the library package, you need to install it with the npm command :
npm i @makabay/customizedmodal

Otherwise clone the project on github

2 - Import the component : 
```js 
// On a Npm library package use case
import { CustomizedModal } from '@makabay/customizedmodal'

// On github clone use case (from ./example/App.tsx)
import CustomizedModal from '../lib/components/CustomizedModal';

```
3 - Define a state who will be shared with the component initialize with boolean (false).
```js 
const [modal, setModal] = useState(false);
```

4 - Define the props component value
```js
const closeButtonTextData = {
    closeButtonTextValue: 'Close',
    textNotificationValue: 'Notification message',
    confirmationTextValue: 'Understood'
};
```

5 - Define the component with his props :
```js
Example :
<CustomizedModal
    closeButtonText={closeButtonTextData.closeButtonTextValue} 
    textNotification={closeButtonTextData.textNotificationValue} 
    confirmationText={closeButtonTextData.confirmationTextValue} 
    modalState={modal}
    changeModalState={setModal}
/>
```

---

I will show you an example of use case comented.

```js
// We will need to share the parent state to our "CustomizedModal" component
import { useState } from "react";

// Components
// On a Npm library package use case
// import { CustomizedModal } from '@makabay/customizedmodal'

// On github clone use case (from ./example/App.tsx)
import CustomizedModal from '../lib/components/CustomizedModal';

// You can replace this App component by the component where you want placed the modal
export default function App () {
    // Here we defined a booleen state hook
    const [modal, setModal] = useState(false);

    // This is the function who will open the modal
    function change () {
        setModal(!modal);
    }

    // This is for CustomizedModal (props) component, it will be your custom text button or message
    const closeButtonTextData = {
        closeButtonTextValue: 'Close',
        textNotificationValue: 'Notification message',
        confirmationTextValue: 'Understood'
    };

    return (
        <>
            {/* A button (example) who will serve of trigger for open modal */}
            <button onClick={change}>
                Open modal {modal} {/* This is just for see the modal state */}
            </button>

            {/* 
            - This is the component -
            He's in absolute position, it's better if it placed in top of the other components on the page
            */}

            {/* 
            - Explaination of the props component -
            closeButtonText={} : will be the text on the close button - string/number
            textNotification={} : will be the modal text message - string/number
            confirmationText={} : will be the text on the confirm button - string/number
            modalState={} : will be the state shared between your component (parent) and the CustomizedModal component (children) - hook (useState) the state initialize with boolean
            changeModalState={} : will be the state method serve to change the state value - hook (useState) the setState function
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