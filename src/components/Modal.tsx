import { useState } from "react"

type ModalChildrenProps = {
    children?: JSX.Element | JSX.Element[];
}

const Modal = (props: ModalChildrenProps) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="modal">
            <button className="btn btn-modal" onClick={() => setIsOpen((open) => !open)}>
                {isOpen ? "-" : "+"}
            </button>
            {isOpen && props.children}
        </div>
    )
}
export default Modal;