import 'react-toastify/dist/ReactToastify.css';
import { CSVReader } from 'react-papaparse';
import { toastConfig } from '../utils/toast-config';
import { ToastContainer, toast } from 'react-toastify';
import AuthContext from '../contexts/auth-context';
import axios from 'axios';
import React, { useContext } from 'react';

const buttonRef = React.createRef();

/* File upload component */
const Uploads = () => {
  const ctx = useContext(AuthContext);
  const handleOpenDialog = (e) => {
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  const handleOnFileLoad = (data) => {
    if (!data || data.length === 0) {
      toast.error('Aw, it seems there is some issue with the uploaded data.', {
        ...toastConfig,
      });
      return;
    }
    let result = '';
    data.forEach((item) => {
      result =
        result +
        item.data[0] +
        ',' +
        item.data[1] +
        ',' +
        item.data[2] +
        ',' +
        item.data[3].split(',').join('_') +
        '\n';
    });

    var uploadData = JSON.stringify({
      operation: 'csv_data_load',
      schema: 'candidates',
      action: 'insert',
      table: 'uploads',
      data: result,
    });

    if (!ctx.isSuperUser) {
      toast.error('You need to be a super user for file uploads.!', {
        ...toastConfig,
      });
      return;
    }

    var config = {
      method: 'post',
      url: process.env.REACT_APP_DB_URL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${process.env.REACT_APP_AUTH_TOKEN}`,
      },
      data: uploadData,
    };

    axios(config)
      .then(function (response) {
        console.log('Success dude!');
        toast.success('File upload success. Do check the DB!', {
          ...toastConfig,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleRemoveFile = (e) => {
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };

  return (
    <section className="upload-wrapper">
      <div className="upload-container">
        <ToastContainer />
        <h1 className="upload-header-text">Need to quickly upload a CSV ?</h1>
        <p className="upload-desc">No problem! I got you covered.</p>

        <div className="csv-container">
          <CSVReader
            ref={buttonRef}
            onFileLoad={handleOnFileLoad}
            noClick
            noDrag
          >
            {({ file }) => (
              <div className="browse-file-button-wrapper">
                <button
                  type="button"
                  onClick={handleOpenDialog}
                  className="browse-file"
                >
                  Browse file
                </button>
                <div className="browse-file-name">{file && file.name}</div>
                {file && file.name && (
                  <button
                    onClick={handleRemoveFile}
                    className="btn rounded-none"
                  >
                    x
                  </button>
                )}
              </div>
            )}
          </CSVReader>
        </div>
      </div>
    </section>
  );
};

export default Uploads;
