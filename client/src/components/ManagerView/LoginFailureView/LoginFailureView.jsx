import React from 'react';
import { Jumbotron } from 'react-bootstrap';

function LoginFailureView() {
    return (
        <Jumbotron className="bg-transparent mt-5">
            <h1 className="text-danger">Đăng nhập không thành công!</h1>
            <p>
                Tài khoản của bạn không có quyền đăng nhập vào trang này hoặc xãy ra lỗi trong khi đăng nhập.
            </p>
        </Jumbotron>
    )
}

export default LoginFailureView;