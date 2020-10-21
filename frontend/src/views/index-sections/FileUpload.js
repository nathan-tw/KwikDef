import React, { Fragment, useState } from "react";
import Progress from "./Progress";
import axios from "axios";
import {
  Input,
  Alert,
  Container,
  Row,
  Col,
  Form,
  FormText,
  Label,
  FormGroup,
  Button,
} from "reactstrap";

const FileUploader = () => {
    const [file, setFile] = useState("");
    const [filename, setFilename] = useState('Choose a PE file');
    const [message, setMessage] = useState("");
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [loading, setLoading] = useState(true);




    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name)
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        const res = await axios.post('http://localhost:8080/file/submit', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onUploadProgress: ProgressEvent => {
                setUploadPercentage(parseInt(Math.round(ProgressEvent.loaded * 100 /
                    ProgressEvent.total
                )))

                // Clear percentage
                setTimeout(() => setUploadPercentage(0), 10000);
            }



        });
        setLoading(false);

        setMessage('File is already uploaded')

    }

    return (
        <Fragment>
            {/* {message ? <Message msg={message} /> : null} */}
            <form onSubmit={onSubmit}>
                <div className="input-group is-invalid my-3">
                    <div className="custom-file">
                        <input type="file" id="submitFile" className="custom-file-input" onChange={onChange} required />
                        <label className="custom-file-label">{filename}</label>
                    </div>
                </div>
                <Progress percentage={uploadPercentage} />
                <div className='input-group-append'>
                    <button className="btn btn-outline-primary" type="submit" >Submit</button>
                </div>

            </form>

        </Fragment>

    )
}

export default FileUploader;
