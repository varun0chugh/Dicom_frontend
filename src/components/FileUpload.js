import React from 'react';

const FileUpload = ({ dispatch }) => {
  const handleFileChange = async (event) => {
    const uploadedFile = event.target.files[0];

    if (uploadedFile && uploadedFile.name.endsWith('.dcm')) {
      const formData = new FormData();
      formData.append('file', uploadedFile);

      try {
        const response = await fetch('http://127.0.0.1:5000/upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Failed to upload DICOM file');
        }

        const data = await response.json();
        dispatch({ type: 'SET_FILE', payload: 'http://127.0.0.1:5000/image' });
        dispatch({ type: 'SET_METADATA', payload: data.metadata });
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: 'Error uploading file' });
      }
    } else {
      dispatch({ type: 'SET_FILE', payload: URL.createObjectURL(uploadedFile) });
      dispatch({ type: 'SET_METADATA', payload: null });
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <input
        type="file"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
        accept=".dcm"
      />
      <button
        className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        onClick={() => document.querySelector('input[type="file"]').click()}
      >
        Upload File
      </button>
    </div>
  );
};

export default FileUpload;
