import React, { useState, useEffect } from 'react';
import { Button, Container, Table, Row, Col, Form, Image } from 'react-bootstrap';
import SpinnerView from '../../ClientView/CommonView/SpinnerView/SpinnerView';
import AlertPanel from '../../ClientView/CommonView/AlertPanel/AlertPanel';// handle error
// For send request and handle request error
import useHttpClient from '../../../share/hook/http-hook';

import ImageUpload from '../ManagerCommonView/ImageUpload/ImageUpload';

function ProductManagerView() {
    // Current list of show products
    const [products, setProducts] = useState([]);

    // Current list of all products
    const [allProducts, setAllProducts] = useState([]);

    // List of categories
    const [categories, setCategories] = useState([]);

    // Error message title
    const [headingError, setHeadingError] = useState("");

    // http-hook
    const { isLoading, alert, error, sendRequest, alertHandler } = useHttpClient();

    // Check if add or update product
    const [isAdd, setIsAdd] = useState(false);
    const [isUpdate, setIsUpdate] = useState(false);

    // To show message when something update success
    const [successMessage, setSuccessMessage] = useState();
    const [errorMessage, setErrorMessage] = useState();

    // For validate form
    const [validated, setValidated] = useState(false);

    // input form
    const [inputs, setInputs] = useState({
        name: '',
        price: '',
        content: '',
        categoryId: '',
        productImage: false
    });

    // CategoryFilter
    const [categoryFilter, setCategoryFilter] = useState();

    // file image to upload
    const [fileUpload, setFileUpload] = useState(null);

    // useEffect to fetch the data for the first time only without redenring
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseCategories = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/category', 'GET', null, {});
                setCategories(responseCategories.category);
                setCategoryFilter(responseCategories.category._id);
                const response = await sendRequest(process.env.REACT_APP_BACKEND_URL + '/products', 'GET', null, {});
                setProducts([...response.products]);
                setAllProducts([...response.products])
            } catch (err) {
                setHeadingError("Lỗi khi tải về thông tin menu");
            };
        };
        fetchData();

    }, [sendRequest]);

    // Handle select hone image
    function categoryFilterHandler(event) {
        setCategoryFilter(event.target.value);
        setSuccessMessage();
        if (event.target.value === 'all') {
            setProducts([...allProducts]);
        } else {
            const shownProducts =
                allProducts.filter(product => product.category._id === event.target.value);
            setProducts(shownProducts);
        }
    }

    // Send request to delete a product
    async function deleteAProduct(id) {
        let response = await requestCall(process.env.REACT_APP_BACKEND_URL + '/products/' + id, 'DELETE',
            null, {}, "Lỗi khi xoá sản phẩm");
        if (response) {
            setProducts(products.filter(product => product._id !== id));
            setAllProducts(allProducts.filter(product => product._id !== id));
            setSuccessMessage("Xoá sản phẩm thành công");
        }
        return response;
    }

    // Handle add new Product
    // Send request to add a product
    async function addAProduct() {
        //const newCategory = categories[categories.findIndex(category => category.name === inputs.categoryName)];
        const formData = setFormData();
        //inputs.category = inputs.categoryId;
        //console.log(inputs);
        //const body = JSON.stringify(inputs);
        let response = await requestCall(process.env.REACT_APP_BACKEND_URL + '/products', 'POST', formData,
            {}, "Lỗi khi thêm sản phẩm");
        if (response) {
            const newCategory = categories[categories.findIndex(category => category._id === inputs.categoryId)];
            response.product.category = newCategory;
            //setProducts([...products, response.product]);
            const newAllProducts = [...allProducts, response.product];
            setAllProducts(newAllProducts);
            setCategoryFilter(newCategory._id);
            const shownProducts =
                newAllProducts.filter(product => product.category._id === newCategory._id);
            setProducts(shownProducts);
            setSuccessMessage("Thêm sản phẩm thành công");

            //console.log(response);
        }
        setIsAdd(false);
        setInputs({
            name: '',
            price: '',
            content: '',
            categoryId: '',
            productImage: false
        });
        return response;
    }

    // Handle update Product
    // Send request to update a product
    async function updateAProduct(id) {
        const formData = setFormData();
        let response = await requestCall(process.env.REACT_APP_BACKEND_URL + '/products/' + id, 'PATCH',
            formData, {}, "Lỗi khi cập nhật sản phẩm");
        if (response) {
            products[products.findIndex(product => product._id === id)] = response.product;
            setProducts(products);
            allProducts[allProducts.findIndex(product => product._id === id)] = response.product;
            setAllProducts(allProducts);
            setSuccessMessage("Cập nhật sản phẩm thành công");
        }
        setIsUpdate(false);
        //setSelectedProduct(null);
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

    // Handle Cancel add or update a product
    function cancelUpdate() {
        setIsAdd(false);
        setIsUpdate(false);
        setInputs({
            name: '',
            price: '',
            content: '',
            categoryId: '',
            productImage: false
        });
        setSuccessMessage(null);
        setFileUpload(null);
        setValidated(false);
    }

    // Handle input change
    function handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }


    // handle intent to update a product
    function handleMakeChange(product) {
        setValidated(false);
        setIsUpdate(true);
        //setSelectedProduct(product);
        let selectedProduct = { ...product, categoryId: product.category._id }
        setInputs(selectedProduct);
        setFileUpload(null);
    }

    // handle intent to add a product
    function handleMakeAdd() {
        setValidated(false);
        setIsAdd(true);
        setInputs({
            name: '',
            price: '',
            content: '',
            productImage: '',
            categoryId: categories[0]._id || '',
        });
        setFileUpload(null);
    }

    // Handle image upload
    function imageUploadHandler(id, file, isValid) {
        //console.log(file);
        const newInputs = { ...inputs };
        if (isValid) {
            setFileUpload(file);
            newInputs.productImage = false;
        } else {
            setFileUpload(null);
            if (isUpdate) {
                newInputs.productImage =
                    allProducts[allProducts.findIndex(product => product._id
                        === inputs._id)].productImage;
            }

        }
        setInputs(newInputs);
        //console.log(newInputs);
    }


    // Set form data to make a request
    function setFormData() {
        // formData to send request
        const formData = new FormData();
        formData.append('name', inputs.name);
        formData.append('price', inputs.price);
        formData.append('content', inputs.content);
        formData.append('category', inputs.categoryId);
        if (fileUpload !== null) {
            formData.append('imageUpload', fileUpload);
        }
        return formData;
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

        if (form.checkValidity() === false || (isAdd && !fileUpload)) {
            setErrorMessage('Kiểm tra lại thông tin điền cần điền cho đúng');
            return;
        }
        if (isAdd) {
            addAProduct();
        } else {
            updateAProduct(inputs._id);
        }
    }


    return (
        <div className="mt-5 pt-5 pb-5">
            <AlertPanel onClose={alertHandler} heading={headingError} content={error} alert={alert}></AlertPanel>
            {isLoading && <SpinnerView role="loading" />}
            {!isLoading && !isAdd && !isUpdate &&
                <div className="p-1">
                    <div className="text-center">
                        <h2>Quán lý sản phẩm</h2>
                        <Row>
                            <Col xs={8} sm={5} md={3} lg={2}>
                                <Form.Label>Chọn một danh mục</Form.Label>
                                <Form.Control as="select" value={categoryFilter}
                                    onChange={categoryFilterHandler}>
                                    <option value='all' key='all' >
                                        Tất cả
                                        </option>
                                    {categories.map((category, index) =>
                                        <option value={category._id} key={index} >
                                            {category.name}
                                        </option>
                                    )}
                                </Form.Control>
                            </Col>
                        </Row>
                        <Button className="mt-3 mb-3 float-right" variant="primary"
                            type="button" onClick={handleMakeAdd}>
                            Thêm sản phẩm
                        </Button>
                        {successMessage &&
                            <h6 className="text-primary mt-3 float-left">
                                {successMessage}
                            </h6>
                        }
                    </div>

                    <Table striped bordered hover variant="light" size="sm" responsive>
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Hình ảnh</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá</th>
                                <th>Danh mục</th>
                                <th>Nội dung</th>
                                <th>Chỉnh sửa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products.map((product, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index}</td>
                                            <td>
                                                <Image width={50} height={50}
                                                    src={process.env.REACT_APP_PHOTO_URL + product.productImage} rounded />
                                            </td>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.category.name}</td>
                                            <td>{product.content}</td>
                                            <td className="float-right">
                                                <Button variant="warning" type="button" onClick={() => handleMakeChange(product)}>
                                                    Thay đổi
                                                </Button>

                                                <Button className="ml-5" variant="danger"
                                                    type="button" onClick={() => deleteAProduct(product._id)}>
                                                    Xoá
                                                </Button>


                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            }

            {
                !isLoading && (isAdd || isUpdate) &&
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={8}>
                            <h1 className="text-center">{isUpdate ? "Thay đổi sản phẩm" : "Thêm sản phẩm"}</h1>
                            <Form noValidate validated={validated} onSubmit={submitFormHandler}>

                                <Form.Group controlId="formName">
                                    <Form.Label>Tên sản phẩm</Form.Label>
                                    <Form.Control name="name" type="text" required
                                        placeholder="Tên sản phẩm"
                                        value={inputs.name}
                                        onChange={handleInputChange} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Thêm tên sản phẩm
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group controlId="formPrice">
                                    <Form.Label>Giá sản phẩm</Form.Label>
                                    <Form.Control name="price" type="text"
                                        placeholder="Giá sản phẩm"
                                        value={inputs.price}
                                        onChange={handleInputChange} />
                                </Form.Group>

                                <Form.Group controlId="formContent">
                                    <Form.Label>Nội dung sản phẩm</Form.Label>
                                    <Form.Control name="content" type="text"
                                        placeholder="Nội dung sản phẩm"
                                        value={inputs.content}
                                        onChange={handleInputChange} />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        Thêm nội dung sản phẩm
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <ImageUpload
                                    id="imageUpload"
                                    onInput={imageUploadHandler}
                                    errorText="Thêm một tấm hình"
                                    initSrc={inputs.productImage}
                                />
                                <Form.Group controlId="formCategory">
                                    <Form.Label>Danh mục</Form.Label>
                                    <Form.Control as="select" name="categoryId"
                                        value={inputs.categoryId} onChange={handleInputChange}>
                                        {
                                            categories.map((category, index) =>
                                                <option key={index} value={category._id}>{category.name}</option>)
                                        }

                                    </Form.Control>
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

export default ProductManagerView;