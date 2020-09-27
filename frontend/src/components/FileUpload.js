import React, { Fragment, useState } from 'react';
import axios from 'axios';

const FileUploader = () => {
    const [file, setFile] = useState("");
    const [filename, setFilename] = useState('Choose a PE file');
    const [uploadedFile, setUploadedFile] = useState({});



    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name)
    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file)

        try{
            const res = await axios.post('http://localhost:8080/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            res.then(res => console.log(res))
            
    
            // setUploadedFile({ fileName, filePath });
        } catch (err) {
            console.log(err.response.data.error)
        }
        
    }

    return (
        <Fragment>
            <form onSubmit={onSubmit}>
                <div className="input-group is-invalid">
                    <div className="custom-file">
                        <input type="file" id="submitFile" className="custom-file-input" onChange={onChange} required/>
                        <label className="custom-file-label">{filename}</label>
                    </div>
                    <div className="input-group-append">
                        <button className="btn btn-outline-primary" type="submit">Submit</button>
                    </div>   
                </div>
            </form>
        </Fragment>
    )
}

export default FileUploader;


