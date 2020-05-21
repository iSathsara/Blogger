import React, {Component} from "react";
import TableBody from "./TableBody";

class Table extends Component{

    static defaultProps = {
           headerValue:[],
           bodyValues:[],
           isAction: false,
           deleteFn: undefined,
           editFn: undefined,
           editBtnOtherProps: {},


    };

    render() {

        return(

                <table className="table">

                    <TableBody bodyValues={this.props.TableBodyValues}
                               isAction={this.props.isAction}
                               deleteFn={this.props.deleteFn}
                               editFn={this.props.editFn}
                               editBtnOtherProps={this.props.editBtnOtherProps}


                    />
                </table>


        )
    }

}

export default Table;
