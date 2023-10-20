import { Modal } from './component/modal/Modal'
import { useModal } from './component/modal/useModal';

// import { Modal, useModal } from '../dist/main'


export default function App(){
    const { isShown, toggle } = useModal();


    return(
        <>
        <button onClick={toggle}> Open Modal</button>
        <Modal
        isShown={isShown}
        onHide={toggle}
        message={"Message whatever !"}
        
        />
        </>
    )
}