import React, { Fragment, useState } from 'react';
import Message from './Message'
import Progress from './Progress'
import axios from 'axios';

const FileUploader = () => {
    const [file, setFile] = useState("");
    const [filename, setFilename] = useState('Choose a PE file');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);



    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name)
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file)

        try {
            const res = await axios.post('http://localhost:8080/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: ProgressEvent => {
                    setUploadPercentage(parseInt(Math.round(ProgressEvent.loaded * 100 /
                        ProgressEvent.total
                    )))

                    // Clear percentage
                    setTimeout(() => setUploadPercentage(0), 10000);
                }


            })

            const { fileName, filePath } = res.data;

            setUploadedFile({ fileName, filePath });
            setMessage('File is already uploaded')
        } catch (err) {
            setMessage(err.response.data.error)
        }

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
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" type="submit">Submit</button>
                    </div>
                </div>

                <Progress percentage={uploadPercentage}/>
            </form>
        </Fragment>
    )
}

export default FileUploader;


