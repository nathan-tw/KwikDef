import React, { useState, useEffect } from "react";
import {
    Button,
    Container,
    PopoverBody,
    PopoverHeader,
    UncontrolledPopover,
    Modal,
    ModalBody,
  } from "reactstrap";
import axios from "axios";

function StaticInfo(props){
    const [modal1, setModal1] = useState(false);
    const data = props.data
    return(
        <div>
            <Button 
            color="primary"
            className="mr-1"
            onClick={() => setModal1(true)}>More Information
                <Modal isOpen={modal1} toggle={() => setModal1(false)}>
                    <div className="modal-header justify-content-center">
                        <button
                            className="close"
                            type="button"
                            onClick={() => setModal1(false)}
                        >
                        <i className="now-ui-icons ui-1_simple-remove"></i>
                        </button>
                        <h4 className="title title-up">More Information</h4>
                    </div>
                    <ModalBody>
                        <h5 className="title">Dlls</h5>
                        {data.dlls.map(dll => <p>{dll}</p>)}
                        <h5 className="title">Import API Calls</h5>
                        {data.imported_api.map(api => <p>{api}</p>)}
                        <h5 className="title">Number of Sections</h5>
                        <p>4</p>
                    </ModalBody>
                </Modal>
            </Button>
        </div>
    )
}
export default StaticInfo