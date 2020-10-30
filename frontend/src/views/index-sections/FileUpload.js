import React, { Fragment, useState } from "react";
import Progress from "./Progress";
import axios from "axios";
import {
  Input,
  Alert,
  Container,
  Label,
  FormGroup,
  Button,
} from "reactstrap";

const FileUploader = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose a PE file");
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [loading, setLoading] = useState(true);

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    const analysisTypes = document.getElementsByName("analysisType");
    let analysisType = "";
    analysisTypes.forEach(elem=>{
      if (elem.checked) {
        analysisType = elem.value
      }
    })
    formData.append("analysisType", analysisType)
    const res = await axios.post(
      "http://localhost:8080/file/submit",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (ProgressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((ProgressEvent.loaded * 100) / ProgressEvent.total)
            )
          );

          // Clear percentage
          setTimeout(() => setUploadPercentage(0), 10000);
          setMessage(
            "File is already uploaded, you can now check it in report page"
          );
          
        },
      }
    );
    localStorage.setItem(filename, res.data.md5);
  };

  return (
    <Fragment>
      {/* {message ? <Message msg={message} /> : null} */}
      {message ? (
        <Alert color="info">
          <Container>
            <div className="alert-icon">
              <i className="now-ui-icons travel_info"></i>
            </div>
            <strong>Done! </strong>
            {message}
            <button
              type="button"
              className="close"
              onClick={() => setMessage("")}
            >
              <span aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </span>
            </button>
          </Container>
        </Alert>
      ) : null}
      <form onSubmit={onSubmit}>
        <p className="category">快篩選擇</p>
        <FormGroup check className="form-check-radio">
          <Label check>
            <Input
              value="static"
              id="analysisType"
              name="analysisType"
              type="radio"
            ></Input>
            <span className="form-check-sign"></span>
            快速靜態分析
          </Label>
        </FormGroup>
        <FormGroup check className="form-check-radio">
          <Label check>
            <Input
              defaultChecked
              id="analysisType"
              name="analysisType"
              type="radio"
              value="dynamic"
            ></Input>
            <span className="form-check-sign"></span>
            深度動靜態分析
          </Label>
        </FormGroup>
        <div className="input-group is-invalid my-3">
          <div className="custom-file">
            <input
              type="file"
              id="submitFile"
              className="custom-file-input"
              onChange={onChange}
              required
            />
            <label className="custom-file-label">{filename}</label>
          </div>
        </div>
        <Progress percentage={uploadPercentage} />
        <div className="input-group-append"></div>
        <button className="btn btn-outline-primary" type="submit">
          Submit
        </button>
      </form>
    </Fragment>
  );
};

export default FileUploader;
