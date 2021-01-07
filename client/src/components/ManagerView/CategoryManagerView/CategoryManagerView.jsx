import React, { useState, useEffect } from 'react';
import { Button, Container, Table, Row, Col, Form } from 'react-bootstrap';
import SpinnerView from '../../ClientView/CommonView/SpinnerView/SpinnerView';
import AlertPanel from '../../ClientView/CommonView/AlertPanel/AlertPanel';// handle error
// For send request and handle request error
import useHttpClient from '../../../share/hook/http-hook';

function CategoryManagerView() {
    const [categories, setCategories] = useState([]);
    const [headingError, setHeadingError] = useState("");
    const { isLoading, alert, error, sendRequest, alertHandler } = useHttpClient();
    const [isAdd, setIsAdd] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);

    // To show message when something update success
    const [successMessage, setSuccessMessage] = useState();
    const [errorMessage, setErrorMessage] = useState();

    // Current category is updating
    const [selectedCategory, setSelectedCategory] = useState();

    // Map with name input form to handle update or add category
    const [categoryName, setCategoryName] = useState("");

    // header to send request
    const header = { 'Content-Type': 'application/json' };

    // For validate form
    const [validated, setValidated] = useState(false);



    // useEffect to fetch the data for the first time only without redenring
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseCategories = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/category', 
                'GET', null, {});
                setCategories(responseCategories.category);
            } catch (err) {
                setHeadingError("Lỗi khi tải về thông tin menu");
            };
        };
        fetchData();

    }, [sendRequest]);

    // Send request to delete a category
    async function deleteACategory(id) {
        let response = await requestCall(process.env.REACT_APP_BACKEND_URL + '/category/' + id, 'DELETE', null, {}, "Lỗi khi xoá danh mục");
        if (response) {
            setCategories(categories.filter(category => category._id !== id));
            setSuccessMessage("Xoá danh mục thành công");
        }
        return response;
    }

    // Handle add new Category
    // Send request to add a category
    async function addACategory() {
        const body = JSON.stringify({ name: categoryName });
        let response = await requestCall(process.env.REACT_APP_BACKEND_URL + '/category', 'POST', body,
            header, "Lỗi khi thêm danh mục");
        if (response) {
            setCategories([...categories, response.category]);
            setSuccessMessage("Thêm danh mục thành công");
            //console.log(response);
        }
        setIsAdd(false);
        return response;
    }

    // Handle update Category
    // Send request to update a category
    async function updateACategory(id) {
        selectedCategory.name = categoryName;
        const body = JSON.stringify(selectedCategory);
        let response = await requestCall(process.env.REACT_APP_BACKEND_URL + '/category/' + id, 'PATCH',
            body, header, "Lỗi khi cập nhật danh mục");
        if (response) {
            categories[categories.findIndex(category => category._id === id)] = response.category;
            setCategories(categories);
            setSuccessMessage("Cập nhật danh mục thành công");
        }
        setIsUpdate(false);
        setSelectedCategory(null);
        return response;
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

    // Handle Cancel add or update a category
    function cancelUpdate() {
        setIsAdd(false);
        setIsUpdate(false);
        setCategoryName("");
        setSelectedCategory(null);
        setSuccessMessage(null);
        setErrorMessage();
        setValidated(false);
    }

    // Handle the value change on update/add form
    function handleNameChange(event) {
        setCategoryName(event.target.value);
    }

    // For handler submit form to update or add
    function submitFormHandler(event) {
        const form = event.currentTarget;
        setValidated(true);
        setSuccessMessage();
        setErrorMessage();
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (form.checkValidity() === false) {
            setErrorMessage('Kiểm tra lại thông tin điền cần điền cho đúng');
            return;
        }
        if (isAdd) {
            addACategory();
        } else {
            updateACategory(selectedCategory._id);
        }

    }

    return (
        <div className="mt-5 pt-5 pb-5">
            <AlertPanel onClose={alertHandler} heading={headingError} content={error} alert={alert}></AlertPanel>
            {isLoading && <SpinnerView role="loading" />}
            {!isLoading && !isAdd && !isUpdate &&
                <Container>
                    <div className="text-center">
                        <h2>Quán lý danh mục Menu</h2>
                        <Button className="mt-3 mb-3 float-right" variant="primary" type="button" onClick={() => {
                            setIsAdd(true);
                            setCategoryName("");
                            setValidated(false);
                        }}>
                            Thêm danh mục
                        </Button>
                        {successMessage &&
                            <h6 className="text-primary mt-3 float-left">
                                {successMessage}
                            </h6>
                        }
                    </div>

                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Tên danh mục</th>
                                <th>Số lượng sản phẩm</th>
                                <th>Chỉnh sửa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories.map((category, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>{category.name}</td>
                                            <td>{category.products.length}</td>
                                            <td className="float-right">
                                                <Button variant="warning" type="button" onClick={() => {
                                                    setIsUpdate(true);
                                                    setSelectedCategory(category);
                                                    setCategoryName("");
                                                    setValidated(false);
                                                }}>
                                                    Thay đổi
                                                </Button>
                                                {
                                                    category.products.length === 0 &&
                                                    <Button className="ml-5" variant="danger"
                                                        type="button" onClick={() => deleteACategory(category._id)}>
                                                        Xoá
                                                    </Button>
                                                }

                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                </Container>
            }

            {
                !isLoading && (isAdd || isUpdate) &&
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={8}>
                            <h1 className="text-center">{isUpdate ? "Thay đổi danh mục" : "Thêm danh mục"}</h1>
                            <Form noValidate validated={validated} onSubmit={submitFormHandler}>
                                {
                                    isUpdate &&
                                    <Form.Group controlId="formOldName">
                                        <   Form.Label>Tên danh mục cũ</Form.Label>
                                        <Form.Control name="oldName" type="text" placeholder="Tên danh mục cũ" value={selectedCategory.name} readOnly />
                                    </Form.Group>
                                }
                                <Form.Group controlId="formName">
                                    <Form.Label>{isAdd ? "Tên danh mục" : "Tên danh mục mới"}</Form.Label>
                                    <Form.Control name="name" type="text" required
                                        placeholder="Tên danh mục"
                                        value={categoryName}
                                        onChange={handleNameChange} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Thêm tên danh mục
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Button variant="primary" type="submit" >
                                    {isAdd ? "Thêm" : "Cập nhật"}
                                </Button>
                                <Button className="ml-5" variant="warning" type="button" onClick={cancelUpdate}>
                                    Huỷ bỏ
                                </Button>
                            </Form>
                            <div>
                                {errorMessage &&
                                    <h6 className="text-danger mt-3 float-left">
                                        {errorMessage}
                                    </h6>
                                }
                            </div>
                        </Col>
                    </Row>
                </Container>

            }
        </div>
    );
}

export default CategoryManagerView;