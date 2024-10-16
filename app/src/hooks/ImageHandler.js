import { Connection } from "./Web3";

const handler = async (setFiles) => {
  const fs = await Connection.getting();
  if (fs) setFiles(fs);
};

const uploadFile = async (file, setFile, setPreview, setImage, setFiles) => {
    const result = await Connection.uploading(file);
    if(result) {
      setFile(null);
      setPreview(null);
      setImage(null);
      handler(setFiles);
    }
}

const previewImage = (event, setPreview, setFile, setImage) => {
  let selectedFile = event.target.files?.[0]; 
  setFile(selectedFile);  
  setImage(selectedFile); 

  if (selectedFile) {
    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      setPreview(loadEvent.target.result); 
    }
    reader.readAsDataURL(selectedFile);
  }
};


export {handler, uploadFile, previewImage}