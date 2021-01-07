import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import useHttpClient from '../../../share/hook/http-hook';
import SpinnerView from '../../ClientView/CommonView/SpinnerView/SpinnerView';
import AlertPanel from '../../ClientView/CommonView/AlertPanel/AlertPanel';

function InfoManagerView(props) {
    let infoData = props.infoData;
    const initInputs = getInitValues(infoData.info);

    // inputs of the form
    const [inputs, setInputs] = useState(initInputs);

    // To check if update successfully
    //const [updated, setUpdated] = useState(false);

    // For validate form
    const [validated, setValidated] = useState(false);

    // header to send request
    const headers = { 'Content-Type': 'application/json' };

    // handle message after update
    const [successMessage, setSuccessMessage] = useState();
    const [errorMessage, setErrorMessage] = useState();


    // For sending request
    const { isLoading, alert, error, sendRequest, alertHandler } = useHttpClient();

    // For update info request
    async function updateInfo(body) {
        try {
            const response = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/info', 
            'PATCH', body, headers, 'include');
            //setUpdated(true);
            setSuccessMessage('Cập nhật thông tin thành công');
            return response;
        } catch (err) {
            //TODO: why not trigger alert here
            
        };

    }

    function getInitValues(data) {
        const result = {
            name: data.name,
            shortAddress: data.shortAddress,
            address: data.address,
            phoneNumber: data.phoneNumber,
            email: data.email,
            intro: data.intro,
            fullIntro: data.fullIntro,
            bestDrinksIntro: data.bestDrinksIntro,
            hours: data.hours,
            hour0: data.hoursDetail[0].time,
            hour1: data.hoursDetail[1].time,
            hour2: data.hoursDetail[2].time,
            hour3: data.hoursDetail[3].time,
            hour4: data.hoursDetail[4].time,
            hour5: data.hoursDetail[5].time,
            hour6: data.hoursDetail[6].time,
        }
        //console.log(result);
        return result;

    }

    // Handle event when value of a form change
    function handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }


    // Handle event when submit the change to the info
    async function handleSubmit(event) {
        setSuccessMessage();
        setErrorMessage();
        //setUpdated(false);
        const form = event.currentTarget;
        setValidated(true);
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (form.checkValidity() === false) {
            setErrorMessage('Kiểm tra lại thông tin điền cần điền cho đúng');
            return;
        }

        const newInfo = { ...infoData.info };
        newInfo.name = inputs.name;
        newInfo.shortAddress = inputs.shortAddress;
        newInfo.address = inputs.address;
        newInfo.phoneNumber = inputs.phoneNumber;
        newInfo.email = inputs.email;
        newInfo.intro = inputs.intro;
        newInfo.fullIntro = inputs.fullIntro;
        newInfo.bestDrinksIntro = inputs.bestDrinksIntro;
        newInfo.hours = inputs.hours;
        for (let index = 0; index < newInfo.hoursDetail.length; index++) {
            newInfo.hoursDetail[index].time = inputs["hour" + index];
        }
        //console.log(inputs);
        //console.log(newInfo);
        const response = await updateInfo(JSON.stringify(newInfo));
        infoData = { ...response };
        updateInfodata(response);
    }


    // Handle event when reset the form
    function resetForm() {
        setInputs(getInitValues(infoData.info));
        //setUpdated(false);
        setValidated(true);
        scrollToTop();
        setSuccessMessage();
        setErrorMessage();
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }


    // Update the main page when info is update
    function updateInfodata(newInfodata) {
        props.updateInfodata(newInfodata);
    }

    return (
        <div className="mt-5 pt-5 pb-5">
          <AlertPanel onClose={alertHandler} heading="Lỗi khi cập nhật thông tin quán" content={error} alert={alert}></AlertPanel>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={8}>
                        <h1 className="text-center">Thay đổi thông tin quán cà phê</h1>
                            {successMessage &&
                                <h6 className="text-primary">
                                    {successMessage}
                                </h6>
                            }
                        {
                            !isLoading &&
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Tên</Form.Label>
                                    <Form.Control name="name" type="text" required
                                        placeholder="Tên quán"
                                        value={inputs.name}
                                        onChange={handleInputChange} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Thêm tên quán vào
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formShortAddress">
                                    <Form.Label>Địa chỉ (form ngắn)</Form.Label>
                                    <Form.Control name="shortAddress" type="text" required
                                        placeholder="Địa chỉ (form ngắn)"
                                        value={inputs.shortAddress}
                                        onChange={handleInputChange} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Điền địa chỉ (form ngắn) vào
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formAddress">
                                    <Form.Label>Địa chỉ đầy đủ</Form.Label>
                                    <Form.Control name="address" type="text" required
                                        placeholder="Địa chỉ đầy đủ"
                                        value={inputs.address}
                                        onChange={handleInputChange} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Điền địa chỉ đầy đủ vào
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formPhoneNumber">
                                    <Form.Label>Số điện thoại</Form.Label>
                                    <Form.Control name="phoneNumber" type="text" required
                                        placeholder="XXXX XXXXXX"
                                        value={inputs.phoneNumber}
                                        onChange={handleInputChange} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Thêm số điện thoại vào
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control name="email" type="email" required
                                        placeholder="Email"
                                        value={inputs.email}
                                        onChange={handleInputChange} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Thêm email vào
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formIntro">
                                    <Form.Label>Lời giới thiệu ngắn</Form.Label>
                                    <Form.Control name="intro" as="textarea" required rows={3}
                                        placeholder="Lời giới thiệu ngắn"
                                        value={inputs.intro}
                                        onChange={handleInputChange} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Thêm lời giới thiệu ngắn vào.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formFullIntro">
                                    <Form.Label>Lời giới thiệu đầy đủ</Form.Label>
                                    <Form.Control name="fullIntro" as="textarea" rows={5} required
                                        placeholder="Lời giới thiệu đầy đủ"
                                        value={inputs.fullIntro}
                                        onChange={handleInputChange} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Thêm lời giới thiệu đầy đủ vào
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formBestDrinksIntro">
                                    <Form.Label>Lời giới thiệu đồ uống đặc biệt</Form.Label>
                                    <Form.Control name="bestDrinksIntro" as="textarea" rows={3} required
                                        placeholder="Lời giới thiệu đồ uống đặc biệt"
                                        value={inputs.bestDrinksIntro}
                                        onChange={handleInputChange} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Thêm lời giới thiệu đồ uống đặc biệt
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formHours">
                                    <Form.Label>Tóm tắt giờ mở cửa</Form.Label>
                                    <Form.Control name="hours" as="textarea" rows={3} required
                                        placeholder="Tóm tắt giờ mở cửa"
                                        value={inputs.hours}
                                        onChange={handleInputChange} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Tóm tắt giờ mở cửa
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Label>Giờ mở cửa chi tiết</Form.Label>
                                <div className="pl-5">
                                    {
                                        infoData.info.hoursDetail.map((item, index) => {
                                            return (
                                                <Form.Group controlId={"formHour" + index} key={index}>
                                                    <Form.Label className="small">{"Hour for " + item.day}</Form.Label>
                                                    <Form.Control name={"hour" + index} type="text" required
                                                        placeholder="HH:mm - HH:mm"
                                                        value={inputs["hour" + index]}
                                                        onChange={handleInputChange} />
                                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                                    <Form.Control.Feedback type="invalid">
                                                        Thêm giờ mở cửa cho ngày này
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            );
                                        })
                                    }
                                </div>
                                <Button variant="primary" type="submit">
                                    Cập nhật
                                </Button>
                                <Button className="ml-5" variant="warning" type="button" onClick={resetForm}>
                                    Huỷ bỏ
                                </Button>
                                <div>
                                    {errorMessage &&
                                        <h6 className="text-danger mt-3 float-left">
                                            {errorMessage}
                                        </h6>
                                    }
                                </div>
                            </Form>
                        }
                        {
                            isLoading && <SpinnerView role="loading" />
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default InfoManagerView;