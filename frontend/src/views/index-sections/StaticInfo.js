import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
  Table,
  Modal,
  ModalBody,
  Row,
  Col,
} from "reactstrap";
import axios from "axios";

function StaticInfo(props) {
  const [modal1, setModal1] = useState(false);
  const data = props.data;
  return (
    <div>
      <Button color="primary" className="mr-1" onClick={() => setModal1(true)}>
        More Information
        <Modal isOpen={modal1} toggle={() => setModal1(false)} size="lg">
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
            <h5 className="title">Imported apis</h5>
            <Row>
              {data.imported_api.map((api) => (
                <Col md="4">
                  <div>{api}</div>
                </Col>
              ))}
            </Row>
            <h5 className="title">Dlls</h5>
            <Row>
              {data.dlls.map((dll) => (
                <Col md="4">
                  <div>{dll}</div>
                </Col>
              ))}
            </Row>
          </ModalBody>
        </Modal>
      </Button>
    </div>
  );
}
export default StaticInfo;
