import React, { useRef, useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

function ImageUpload(props) {
    const [file, setFile] = useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false);

    const filePickerRef = useRef();

    useEffect(() => {
        if (!file) {
          return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
          setPreviewUrl(fileReader.result);
        };
        fileReader.readAsDataURL(file);
      }, [file]);
    
      function pickedHandler(event) {
        //console.log("come to pick")
        let pickedFile;
        let fileIsValid = isValid;
        //console.log(event.target.files);
        if (event.target.files && event.target.files.length === 1) {
          pickedFile = event.target.files[0];
          setFile(pickedFile);
          setIsValid(true);
          fileIsValid = true;
        } else {
          setIsValid(false);
          fileIsValid = false;
        }
        props.onInput(props.id, pickedFile, fileIsValid);
      };
    
      function pickImageHandler() {
        filePickerRef.current.value = "";
        filePickerRef.current.click();
        
        //console.log(props.initSrc);
      };

      function cancelImageHandler() {
        let pickedFile;
        let fileIsValid = false;
        setFile(pickedFile);
        setIsValid(false);
        setPreviewUrl();
        props.onInput(props.id, pickedFile, fileIsValid);
      }

    

    return (
        <Form.Group controlId="formImageUpload">
            <Form.Label>{props.label || "Hình ảnh sản phẩm"}</Form.Label>
            <input
                id={props.id}
                ref={filePickerRef}
                style={{ display: 'none' }}
                type="file"
                accept=".jpg,.png,.jpeg"
                onChange={pickedHandler}
            />
            <div className="text-center">
                <div className="mb-3">
                    {(previewUrl || props.initSrc) && <img width={props.imgWidth || 200} height={props.imgHeight || 200} 
                    src={props.initSrc ? process.env.REACT_APP_PHOTO_URL +  props.initSrc : previewUrl } alt="Preview" />}
                    {(!previewUrl && !props.initSrc) && <p>Chọn một tấm hình</p>}
                </div>
                <Button type="button" onClick={pickImageHandler}>
                    CHỌN HÌNH
                </Button>
                <Button type="button" onClick={cancelImageHandler} className="btn btn-warning ml-3">
                    HUỶ HÌNH
                </Button>
            </div>
            {(!isValid && !props.initSrc) && <p className="text-danger">{props.errorText}</p>}
        </Form.Group>
    );
} 

export default ImageUpload;