import { CSVLink } from 'react-csv';
import { ErrorBar } from './ErrorBar';
import { FaDownload } from 'react-icons/fa';
import { useHarperDB } from 'use-harperdb';
import React, { useEffect, useState } from 'react';

/* Component that does CSV download of the app */
export const Downloads = () => {
  const [data, loading, error] = useHarperDB({
    query: { operation: 'sql', sql: 'select * from candidates.profiles' },
  });

  const [csvData, setCSVData] = useState([]);

  useEffect(() => {
    const csvArr = [];
    data &&
      data.forEach((item) => {
        csvArr.push({
          username: item.username,
          expertise: item.expertise,
          profileURL: item.profileURL,
          skillsets: item.skillsets.join(','),
        });
      });
    setCSVData(csvArr);
  }, [data]);

  // Header of the excel sheet that we see when downloaded.
  const headers = [
    { label: 'Candidate Name', key: 'username' },
    { label: 'Candidate experience level', key: 'expertise' },
    { label: 'Linkedin profile URL', key: 'profileURL' },
    { label: 'Primary skillsets', key: 'skillsets' },
  ];

  if (!loading && error) {
    return <ErrorBar message="Download failed! Please try later" />;
  }

  return (
    <div className="at-middle">
      <div className="download-btn-group">
        <button className="download-btn">
          <span className="mr-2">
            <FaDownload />
          </span>
          <CSVLink
            filename="LinkedInCandidateProfiles.csv"
            data={csvData}
            headers={headers}
          >
            Download as CSV
          </CSVLink>
        </button>
      </div>
    </div>
  );
};
