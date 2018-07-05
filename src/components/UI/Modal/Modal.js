import React, {Component} from 'react';
import classes from './Modal.css';
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../Backdrop/Backdrop";


class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        //only update if showChanges
        if (nextProps.show !== this.props.show) {
            return true;
        } else {
            return false;
        }
    }

    componentWillUpdate() {
        console.log(`[Modal] componentWillUpdate`,);
    }

    render() {
        return (
            <Auxiliary>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed}

                />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0',
                    }}
                >
                    {this.props.children}
                </div>
            </Auxiliary>
        );
    }

}

export default Modal;
// const modal = (props) => {
//     return (
//         <Auxiliary>
//             <Backdrop
//                 show={props.show}
//                 clicked={props.modalClosed}
//
//             />
//         <div
//             className={classes.Modal}
//             style={{
//                 transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
//                 opacity: props.show ? '1': '0',
//             }}
//         >
//             {props.children}
//         </div>
//         </Auxiliary>
//     );
// };
//
// export default modal;