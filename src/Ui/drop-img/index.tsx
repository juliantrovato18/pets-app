import React, {useState, useEffect, useCallback} from "react";
import { useDropzone } from "react-dropzone";
import { useImage, usePetData } from "hooks";



export function MyDropzone(props) {
    
    const [image, setImage] = useImage();
    const [pet, setPet] = usePetData();


  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
        const reader = new FileReader();
        reader.onload = (e)=>{
          const result = e.target.result;
            setImage(result)
            setPet({...pet, image:result});
        }
        reader.readAsDataURL(file);
    });

  }, [image])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {
        image ?
          <div>
            <img src={image} />
          </div> :
          <div>
            <img src="../../../img/uploader.png"  />
          </div>
      }
    </div>
  )
}




