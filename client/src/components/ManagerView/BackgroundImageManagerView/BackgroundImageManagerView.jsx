import React, { useState } from 'react';
import { Tabs, Tab, Container, Row, Col, Form, Button } from 'react-bootstrap';
import './style.scss';
import ImageUpload from '../ManagerCommonView/ImageUpload/ImageUpload';
// For send request and handle request error
import useHttpClient from '../../../share/hook/http-hook';
import AlertPanel from '../../ClientView/CommonView/AlertPanel/AlertPanel';// handle error
import SpinnerView from '../../ClientView/CommonView/SpinnerView/SpinnerView';

function BackgroundImageManagerView(props) {
    const infoData = props.infoData;
    const [homeImagesList, setHomeImagesList] = useState(infoData.info.images);
    const [selectedHomeImage, setSelectedHomeImage] = useState({ ...infoData.info.images[0] })

    // menuImage
    const [menuImage, setMenuImage] = useState(infoData.info.menuImage);

    // contactImage
    const [contactImage, setContactImage] = useState(infoData.info.contactImage);


    // To show message when something update success
    const [successMessage, setSuccessMessage] = useState();

    // Error message title
    const [headingError, setHeadingError] = useState("");

    // http-hook
    const { isLoading, alert, error, sendRequest, alertHandler } = useHttpClient();


    // Handle image need to upload
    // file image to upload
    const [fileUpload, setFileUpload] = useState(null);

    // Handle home image upload
    function imageUploadHandler(id, file, isValid) {
        const newSetImage = { ...selectedHomeImage };
        if (isValid) {
            setFileUpload(file);
            newSetImage.src = false;

        } else {
            newSetImage.src =
                homeImagesList[homeImagesList
                    .findIndex(image => image._id === selectedHomeImage._id)].src;
            setFileUpload(null);
        }
        setSelectedHomeImage(newSetImage);
    }

    // Handle menu image upload
    function menuImageUploadHandler(id, file, isValid) {
        if (isValid) {
            setFileUpload(file);
            setMenuImage(false);

        } else {
            setMenuImage(infoData.info.menuImage);
            setFileUpload(null);
        }
    }

    // Handle contact image upload
    function contactImageUploadHandler(id, file, isValid) {
        if (isValid) {
            setFileUpload(file);
            setContactImage(false);

        } else {
            setContactImage(infoData.info.contactImage);
            setFileUpload(null);
        }
    }

    // Handle select hone image
    function homeSelectImageHandler(event) {
        //console.log(homeImagesList);
        const img = homeImagesList[homeImagesList.findIndex(image => image._id === event.target.value)];
        setSelectedHomeImage(img);
    }

    // handle input change
    function inputChangeHandler(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        //setInputs(inputs => ({ ...inputs, [name]: value }));
        setSelectedHomeImage({ ...selectedHomeImage, [name]: value });
    }

    // Handle when swich tab
    function switchTabHandler() {
        //console.log("switch tab");
        setFileUpload(null);
        setSuccessMessage();
        setHeadingError();

        // reset background home image form
        setSelectedHomeImage({ ...infoData.info.images[0] });
    }

    // Handler update home image
    function updateHomeImageHandler() {
        updateBackgroundImage();
    }

    // Handler update home image
    function updateMenuImageHandler() {
        updateMenuImage();
    }

    // Handler update home image
    function updateContactImageHandler() {
        updateContactImage();
    }

    // Handler cancel home update
    function cancelHomeImageUpdate() {
        const img = homeImagesList[homeImagesList.findIndex(image => image._id === selectedHomeImage._id)];
        setSelectedHomeImage(img);
        setFileUpload(null);
        setSuccessMessage();
        setHeadingError();
    }

    // Handle call sendrequest from http-hook
    async function requestCall(url, method, body, headers, errorMessage) {
        setSuccessMessage(null);
        let response = null;
        try {
            response = await sendRequest(url, method, body, headers, 'include');

        } catch (err) {
            setHeadingError(errorMessage);
        } finally {
            return response;
        };

    }

    // Handle update Background Image
    // Send request to update a background image
    async function updateBackgroundImage() {
        const formData = new FormData();
        formData.append('title', selectedHomeImage.title);
        formData.append('content', selectedHomeImage.content);
        if (fileUpload !== null) {
            formData.append('imageUpload', fileUpload);
        }
        let response = await requestCall(process.env.REACT_APP_BACKEND_URL + '/info/bgImage/' + selectedHomeImage._id, 'PATCH',
            formData, {}, "Lỗi khi cập nhật hình trên trang chủ");
        if (response) {
            console.log(response);
            setHomeImagesList([...response.info.images]);
            cancelHomeImageUpdate();
            setSelectedHomeImage(response.info.images[response.info.images.findIndex(image => image._id === selectedHomeImage._id)]);
            setSuccessMessage("Cập nhật hình nền trang chủ thành công");
            setFileUpload(null);
            updateInfodata(response);
        }
        //setSelectedProduct(null);
        return response;
    }

    // Handle update menu Image
    // Send request to update a menu image
    async function updateMenuImage() {
        const formData = new FormData();
        formData.append('imageUpload', fileUpload);
        let response = await requestCall(process.env.REACT_APP_BACKEND_URL + '/info/menuImage',
            'PATCH', formData, {}, "Lỗi khi cập nhật hình trên trang menu");
        if (response) {
            setMenuImage(response.info.menuImage);
            setSuccessMessage("Cập nhật hình nền trang menu thành công");
            setFileUpload(null);
            updateInfodata(response);
        }
        return response;
    }

    // Handle update contact Image
    // Send request to update a contact image
    async function updateContactImage() {
        const formData = new FormData();
        formData.append('imageUpload', fileUpload);
        let response = await requestCall(process.env.REACT_APP_BACKEND_URL + '/info/contactImage',
            'PATCH', formData, {}, "Lỗi khi cập nhật hình trên trang liên lạc");
        if (response) {
            setContactImage(response.info.contactImage);
            setSuccessMessage("Cập nhật hình nền trang liên lạc thành công");
            setFileUpload(null);
            updateInfodata(response);
        }
        return response;
    }

    // Update the main page when info is update
    function updateInfodata(newInfodata) {
        props.updateInfodata(newInfodata);
    }

    return (
        <div className="mt-5 pt-5 pb-5">
            <AlertPanel onClose={alertHandler} heading={headingError} content={error} alert={alert}></AlertPanel>
            {isLoading && <SpinnerView role="loading" />}
            {!isLoading &&
                <Container>
                    <Tabs defaultActiveKey="homePage" id="uncontrolled-tab-background-image"
                        variant="tabs" onSelect={switchTabHandler}>
                        <Tab eventKey="homePage" title="Trang chủ">
                            <div className="text-center pt-4">
                                <h2>Quán lý hình nền trang chủ</h2>
                            </div>
                            <Row className="justify-content-md-center">
                                <Col xs={12} md={8}>
                                    <Form.Group controlId="formSelectImage">
                                        <Form.Label>Select an image</Form.Label>
                                        <Form.Control as="select" value={selectedHomeImage._id} 
                                        onChange={homeSelectImageHandler}>
                                            {homeImagesList.map((image, index) =>
                                                <option value={image._id} key={index} >
                                                    {"Image " + (index + 1)}
                                                </option>
                                            )}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form>

                                        <ImageUpload
                                            id="imageUpload"
                                            onInput={imageUploadHandler}
                                            errorText="Please provide an image."
                                            initSrc={selectedHomeImage.src}
                                            label="Hình nền trang chủ"
                                            imgWidth="400"
                                            imgHeight="200"
                                        />
                                        <Form.Group controlId="formImageTitle">
                                            <Form.Label className="small">Image Title</Form.Label>
                                            <Form.Control name="title" type="text" onChange={inputChangeHandler}
                                                placeholder="Image Title" value={selectedHomeImage.title} />
                                        </Form.Group>
                                        <Form.Group controlId="formImageContent">
                                            <Form.Label className="small">Image Content </Form.Label>
                                            <Form.Control name="content" type="text" onChange={inputChangeHandler}
                                                placeholder="Image Content" value={selectedHomeImage.content} />
                                        </Form.Group>
                                        <Button variant="primary" type="button" onClick={updateHomeImageHandler}>
                                            Cập nhật
                                    </Button>
                                        <Button className="ml-5" variant="warning" type="button" onClick={cancelHomeImageUpdate}>
                                            Huỷ bỏ
                                    </Button>
                                    </Form>
                                    <div>
                                        {successMessage &&
                                            <h6 className="text-primary mt-3 float-left">
                                                {successMessage}
                                            </h6>
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="menuPage" title="Trang menu">
                            <div className="text-center pt-4">
                                <h2>Quán lý hình nền trang menu</h2>
                            </div>
                            <Row className="justify-content-md-center">
                                <Col xs={12} md={8}>
                                    <Form>

                                        <ImageUpload
                                            id="imageMenuUpload"
                                            onInput={menuImageUploadHandler}
                                            errorText="Please provide an image."
                                            initSrc={menuImage}
                                            label="Hình nền Menu"
                                            imgWidth="400"
                                            imgHeight="200"
                                        />
                                        <Button variant="primary" type="button"
                                            onClick={updateMenuImageHandler} disabled={!fileUpload} >
                                            Cập nhật
                                    </Button>
                                    </Form>
                                    <div>
                                        {successMessage &&
                                            <h6 className="text-primary mt-3 float-left">
                                                {successMessage}
                                            </h6>
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </Tab>
                        <Tab eventKey="contactPage" title="Trang liên lạc">
                            <div className="text-center pt-4">
                                <h2>Quán lý hình nền trang liên lạc</h2>
                            </div>
                            <Row className="justify-content-md-center">
                                <Col xs={12} md={8}>
                                    <Form>

                                        <ImageUpload
                                            id="imageContactUpload"
                                            onInput={contactImageUploadHandler}
                                            errorText="Please provide an image."
                                            initSrc={contactImage}
                                            label="Hình nền liên lạc"
                                            imgWidth="400"
                                            imgHeight="200"
                                        />
                                        <Button variant="primary" type="button"
                                            onClick={updateContactImageHandler} disabled={!fileUpload} >
                                            Cập nhật
                                    </Button>
                                    </Form>
                                    <div>
                                        {successMessage &&
                                            <h6 className="text-primary mt-3 float-left">
                                                {successMessage}
                                            </h6>
                                        }
                                    </div>
                                </Col>
                            </Row>
                        </Tab>
                    </Tabs>
                </Container>
            }
        </div>
    );
}

export default BackgroundImageManagerView;