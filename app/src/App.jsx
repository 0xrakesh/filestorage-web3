import './App.css';
import {useEffect, useState} from 'react'
import {handler, uploadFile, previewImage} from './hooks/ImageHandler'
import Table from './components/Table';
function App({ isNavbarEffectDone }) {

  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState(null);
  const [image, setImage] = useState(null);



  useEffect(() => {
    if(isNavbarEffectDone ) handler(setFiles);
  },[isNavbarEffectDone])


  
  return (
    <div className="App">
      <div className="form" encType="multipart/form-data">
        <label className="label">File Upload</label>
        <input
          className="inputFile"
          type="file"
          name="file"
          onChange={(e) => previewImage(e, setPreview, setFile, setImage)}
        />

      </div>
      {
        preview && 
        <>
          <img className="previewImg" alt='Uploaded Photos' src={preview} style={{ maxWidth: "50svw" }} />
          <br/>
          <button className='upload' onClick={() => uploadFile(file, setFile, setPreview, setImage, setFiles)}>Upload</button>
        </>
      }
      <Table files={files}/>
    </div>
  );
}

export default App;
