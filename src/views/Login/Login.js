import React, {useState} from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import {Row} from 'antd'
import {$login} from '../../api/api'
import Notification from '../../components/Notification';
import {useNavigate} from "react-router-dom";
import "./Login.scss";

//登陆模式，1为用户，2为医生，3为管理员
let mode = 0;

export function Login(){
    //导航
    let navigate = useNavigate();
    //表单
    let [form] = Form.useForm();
    //按钮互斥效果
    const [disabled1, setDisabled1] = useState(false);
    const [disabled2, setDisabled2] = useState(false);
    const [disabled3, setDisabled3] = useState(false);

    //定义状态
    let [notiState, setNotiState] = useState({type: '', description: ''})
    //表单成功提交方法
    const onFinish = (values) => {
        let {message, statusCode} = $login(values, mode).then(
            response =>{
                message = response.data;
                // console.log(message)
                statusCode = response.data.statusCode;
                // console.log(statusCode)
                //状态码为成功
                if(statusCode === 1){
                    //设置session
                    sessionStorage.setItem('token', response.data.token);
                    console.log(response.data)
                    setNotiState({type: 'success', description: "登录成功"})
                    // console.log("mode = ", mode);
                    //跳转到功能页面
                    if(mode === 1){
                        navigate('/UserFunctionPage');
                    }
                    else if(mode === 2){
                        navigate('/DoctorFunctionPage');
                    }
                    else{
                        navigate('/ManagerFunctionPage')
                    }

                }
                else{
                    setNotiState({type: 'error', description: "登录失败"})
                    //还原
                }
            }
        )

    };

    const onChange1 = (e) => {
        setDisabled2(!disabled2);
        setDisabled3(!disabled3);
        mode = 1;
    };
    const onChange2 = (e) => {
        setDisabled1(!disabled1);
        setDisabled3(!disabled3);
        mode = 2;
    };
    const onChange3 = (e) => {
        setDisabled1(!disabled1);
        setDisabled2(!disabled2);
        mode = 3;

    };
    const onClick = (e) => {

    }

    return(
        <div className='login'>
            <div className='content'>
                <h2>体检预约系统</h2>
                <Form
                    name="basic"
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 18,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{

                    }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="账号"
                        name="id"
                        rules={[
                            {
                                required: true,
                                message: '请输入你的账号',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入你的密码',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 4,
                            span: 20,
                        }}
                    >
                        <Row>
                            <Checkbox disabled={disabled1} onChange={onChange1} >预约者登录</Checkbox>
                            <Checkbox disabled={disabled2} onChange={onChange2} >医生登录</Checkbox>
                            <Checkbox disabled={disabled3} onChange={onChange3} >管理员登录</Checkbox>
                        </Row>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 10,
                            span: 14,
                        }}
                    >
                        <Button type="primary" htmlType="submit" onClick={onClick}>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <Notification notiMsg={notiState}/>
        </div>
    )
}