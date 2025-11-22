import React, { useState, useEffect, useRef } from 'react';
import { Canvas, Image, Rect, Polygon, Line } from 'fabric';
import { Chrome } from '@uiw/react-color';
import sampleImage from './sample-house.jpg'; 

const HouseColorStudio = () => {
  const [image, setImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState('#ff0000');
  const [drawingMode, setDrawingMode] = useState(false);
  const canvasRef = useRef(null);
  const fabricCanvas = useRef(null);
  const points = useRef([]);

  useEffect(() => {
    if (canvasRef.current) {
      fabricCanvas.current = new Canvas(canvasRef.current, {
        isDrawingMode: false,
        selection: true,
        preserveObjectStacking: true,
      });

      fabricCanvas.current.setDimensions({
        width: 800,
        height: 600,
      });

      fabricCanvas.current.on('mouse:down', (options) => {
        if (drawingMode) {
          points.current.push({ x: options.pointer.x, y: options.pointer.y });
          if (points.current.length > 1) {
            const line = new Line([
              points.current[points.current.length - 2].x, 
              points.current[points.current.length - 2].y, 
              options.pointer.x, 
              options.pointer.y
            ], {
              stroke: selectedColor, 
              strokeWidth: 2, 
              selectable: false,
              evented: false,
              strokeDashArray: [5, 5]
            });
            fabricCanvas.current.add(line);
          }
        }
      });

      return () => {
        fabricCanvas.current.dispose();
      };
    }
  }, [drawingMode, selectedColor]);

  useEffect(() => {
    if (image && fabricCanvas.current) {
      Image.fromURL(image, (img) => {
        fabricCanvas.current.clear();
        img.scaleToWidth(fabricCanvas.current.getWidth());
        fabricCanvas.current.add(img);
        fabricCanvas.current.renderAll();
      });
    }
  }, [image]);

  const handleImageUpload = (event) => {
    const uploadedImage = event.target.files[0];
    if (uploadedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(uploadedImage);
    }
  };

  const loadSampleImage = () => {
    setImage(sampleImage);
  };

  const toggleDrawingMode = () => {
    setDrawingMode(!drawingMode);
    fabricCanvas.current.isDrawingMode = false;
    fabricCanvas.current.selection = drawingMode; // Invert logic to switch modes
    fabricCanvas.current.renderAll();
    if (!drawingMode) {
      points.current = [];
    }
  };

  const finishPolygon = () => {
    if (points.current.length > 2) {
      const polygon = new Polygon(points.current, {
        fill: selectedColor,
        opacity: 0.7,
      });
      fabricCanvas.current.add(polygon);
      fabricCanvas.current.renderAll();
      toggleDrawingMode();
    }
  };

  const applySelectedColor = () => {
    const activeObject = fabricCanvas.current.getActiveObject();
    if (activeObject) {
      activeObject.set({ fill: selectedColor });
      fabricCanvas.current.renderAll();
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>🎨 HouseColor Studio</h1>
      <p>Upload your house photo or select a sample image to get started.</p>

      <div style={{ marginBottom: '20px' }}>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
        <p style={{ marginTop: '10px' }}>Or choose a sample house:</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <img 
            src={sampleImage} 
            alt="Sample House" 
            onClick={loadSampleImage}
            style={{ width: '100px', height: '80px', border: '1px solid #ccc', cursor: 'pointer', objectFit: 'cover' }}
          />
        </div>
      </div>

      <div style={{ border: '2px dashed #ddd', padding: '20px', minHeight: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <canvas ref={canvasRef} />
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Color Tools</h3>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <h4>Define a Colorable Area</h4>
            <button onClick={toggleDrawingMode}>
              {drawingMode ? 'Cancel Drawing' : 'Draw Polygon'}
            </button>
            <button onClick={finishPolygon} disabled={!drawingMode}>
              Finish Polygon
            </button>
            <p style={{ fontSize: '12px', textAlign: 'center' }}>
              Click on the canvas to place points. Click "Finish" to complete the shape.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <h4>Color Picker</h4>
            <Chrome
              color={selectedColor}
              onChange={(newColor) => setSelectedColor(newColor.hex)}
            />
            <button onClick={applySelectedColor}>Apply Color</button>
            <p style={{ fontSize: '12px', textAlign: 'center' }}>
              Select a shape, pick a color, then click "Apply Color".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseColorStudio;