import React, { useState } from 'react';

const ImageEditor = ({ imageSrc, onAdjustBrightness }) => {
  const [brightness, setBrightness] = useState(1);
  const [zoom, setZoom] = useState(1);
  const [crop, setCrop] = useState({ x: 0, y: 0, width: 100, height: 100 });

  const handleBrightnessChange = (e) => {
    setBrightness(e.target.value);
    onAdjustBrightness(e.target.value);
  };

  const handleZoomChange = (e) => {
    setZoom(e.target.value);
    // Call backend API for zoom here
  };

  const handleCrop = () => {
    // Call backend API for crop here
  };

  return (
    <div className="image-editor">
      <div className="controls">
        <label>Brightness:</label>
        <input
          type="range"
          min="0"
          max="2"
          step="0.1"
          value={brightness}
          onChange={handleBrightnessChange}
        />
        <label>Zoom:</label>
        <input
          type="range"
          min="1"
          max="3"
          step="0.1"
          value={zoom}
          onChange={handleZoomChange}
        />
        <button onClick={handleCrop}>Crop</button>
      </div>

      <img src={imageSrc} alt="DICOM" style={{ transform: `scale(${zoom})` }} />
    </div>
  );
};

export default ImageEditor;
