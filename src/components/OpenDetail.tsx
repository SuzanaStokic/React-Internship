import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";

type OpenDetailChildrenProps = {
    children?: JSX.Element | JSX.Element[];
    onClose: any;
}

const OpenDetail = (props: OpenDetailChildrenProps) => {

    return createPortal (

        <div className="portal">
            <div className="modal">
                <button className="btn btn-modal" onClick={props.onClose}><HiXMark /></button>
                <div>{props.children}</div>
            </div>
        </div>, document.body

    );
}
export default OpenDetail;
