import React from 'react';

const DicomViewer = ({ file, metadata }) => {
  return (
    <div className="space-y-4">
      <img src={file} alt="DICOM" className="mx-auto border" />
      <div className="p-4 border rounded bg-gray-50">
        <h2 className="font-bold">Metadata</h2>
        <pre className="bg-gray-100 p-2 rounded">{JSON.stringify(metadata, null, 2)}</pre>
      </div>
    </div>
  );
};

export default DicomViewer;
