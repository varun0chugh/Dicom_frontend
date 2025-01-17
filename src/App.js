import React, { useReducer } from 'react';
import Layout from './components/Layout';
import FileUpload from './components/FileUpload';
import DicomViewer from './components/DicomViewer';
import ImageEditor from './components/ImageEditor';

const initialState = {
  file: null,
  metadata: null,
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_FILE':
      return { ...state, file: action.payload, metadata: null, error: null };
    case 'SET_METADATA':
      return { ...state, metadata: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleAdjustBrightness = (brightness) => {
    fetch('http://127.0.0.1:5000/adjust', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ brightness }),
    }).then(response => response.json())
      .then(data => {
        if (data.message) {
          alert('Image brightness adjusted');
        }
      }).catch(err => {
        dispatch({ type: 'SET_ERROR', payload: err.message });
      });
  };

  return (
    <Layout>
      <div className="container mx-auto space-y-4">
        <h1 className="text-center text-2xl font-bold">DICOM Viewer</h1>
        <FileUpload dispatch={dispatch} />
        {state.error && <p className="text-red-500">{state.error}</p>}
        {state.file && state.metadata ? (
          <DicomViewer file={state.file} metadata={state.metadata} />
        ) : (
          state.file && <ImageEditor imageSrc={state.file} onAdjustBrightness={handleAdjustBrightness} />
        )}
      </div>
    </Layout>
  );
};

export default App;
