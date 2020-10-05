import React, { Fragment, useState } from 'react';
import Message from './Message'
import Progress from './Progress'
import Report from './Report'
import axios from 'axios';

const FileUploader = () => {
    const [file, setFile] = useState("");
    const [filename, setFilename] = useState('Choose a PE file');
    const [message, setMessage] = useState("");
    const [uploadPercentage, setUploadPercentage] = useState(0);
    const [loading , setLoading] = useState(true);


    const handleResult = () => {
        var x = document.getElementById("finalResult");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }


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
                'MD5': 'slji'
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
            {message ? <Message msg={message} /> : null}
            <form onSubmit={onSubmit}>
                <div className="input-group is-invalid my-3">
                    <div className="custom-file">
                        <input type="file" id="submitFile" className="custom-file-input" onChange={onChange} required />
                        <label className="custom-file-label">{filename}</label>
                    </div>
                </div>

                <Progress percentage={uploadPercentage} />

                <button className="btn btn-outline-primary" type="submit" onClick={handleResult}>Submit</button>

            </form>
            <div id='finalResult' style={{display: "none"}}>
                <Report loading={loading} />
            </div>
        </Fragment>

    )
}

export default FileUploader;


