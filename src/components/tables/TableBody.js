import React from "react";

const TableBody = ({
                        bodyValues = [],
                        isAction = false,
                        deleteFn = undefined,
                        editFn = undefined,
                        editBtnOtherProps = {},


}) =>{

        return(


                    bodyValues.map((values, index) => {
                        return (

                            <tbody key={index}>

                                <tr>
                                    <th scope="row" style={{fontWeight:"bold", fontSize:"large"}}>{values.title}</th>
                                </tr>
                                <tr>
                                    <td style={{fontWeight:"normal", fontSize:"normal"}}>{values.article}</td>
                                </tr>
                                <tr>
                                    <td style={{fontWeight:"normal", fontSize:"small", fontStyle:"italic"}}>Article By : {values.author}</td>
                                </tr>
                                <tr>
                                </tr>

                                <tr>
                                {
                                    (isAction)? (
                                        <td className={"p-0"}>
                                            <button type="button" className="btn btn-warning mt-1 ml-1" onClick={() => editFn({id:values.title})} {...editBtnOtherProps}>Change article</button>
                                            <button type="button" className="btn btn-danger mt-1 ml-1" onClick={() => deleteFn({id:values.title})}>Delete Article</button>
                                        </td>
                                    ):null
                                }
                                </tr>

                            </tbody>

                        )
                    })





        )

}

export default TableBody;
