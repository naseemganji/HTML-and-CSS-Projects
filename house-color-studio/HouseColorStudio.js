import React, { useState } from 'react';

const HouseColorStudio = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    // Logic for handling file upload
    const uploadedImage = event.target.files[0];
    if (uploadedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(uploadedImage);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>🎨 HouseColor Studio</h1>
      <p>Upload your house photo or select a sample image to get started.</p>

      {/* Image Upload and Sample Gallery */}
      <div style={{ marginBottom: '20px' }}>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <p style={{ marginTop: '10px' }}>Or choose a sample house:</p>
        {/* Placeholder for sample gallery */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ width: '100px', height: '80px', border: '1px solid #ccc', cursor: 'pointer', textAlign: 'center', lineHeight: '80px' }}>Sample 1</div>
          <div style={{ width: '100px', height: '80px', border: '1px solid #ccc', cursor: 'pointer', textAlign: 'center', lineHeight: '80px' }}>Sample 2</div>
        </div>
      </div>

      {/* Canvas Area for Image Preview */}
      <div style={{ border: '2px dashed #ddd', padding: '20px', minHeight: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {image ? (
          // Placeholder for canvas-based image editing
          <img src={image} alt="Uploaded house" style={{ maxWidth: '100%', maxHeight: '400px' }} />
        ) : (
          <p>Your image will appear here.</p>
        )}
      </div>

      {/* Placeholder for Color Picker and Palette Suggestions */}
      <div style={{ marginTop: '20px' }}>
        <h3>Color Tools</h3>
        <div style={{ display: 'flex', gap: '20px' }}>
          {/* Placeholder for color picker */}
          <div style={{ width: '150px', height: '150px', border: '1px solid #ccc' }}>Color Picker</div>
          {/* Placeholder for palette buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button>Modern Palette</button>
            <button>Coastal Palette</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseColorStudio;