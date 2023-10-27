# HRNET : modal component library

This template provides a modal component library for any react application
of your choice.


## Installing the library in you application

If you are developing an application :

- To install the HRNet-Library at the root of the application, run 
   > npm i hrnet-library2

- To import the modal component in you application, import it at the root of the chosen page :

```js
   import { Modal } from "hrnet-library2";
   import { useModal } from "hrnet-library2";
```

- In the render part, import the modal like in the above example :
```js
   <Modal
        isShown={isShown}
        onHide={toggle}
        message={"Employee " + firstName + " " + lastName + " created !"}
      />
```
