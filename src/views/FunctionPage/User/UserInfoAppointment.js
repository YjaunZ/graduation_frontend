import React from "react";
import {Card, Col, Descriptions, Row} from "antd";

export default function UserInfoAppointment(){
    return (
        <div>
            user info appointment
            <div style={{paddingTop: '10px'}}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            <Descriptions title="User Info" >
                                <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
                                <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
                                <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
                                <Descriptions.Item label="Remark">empty</Descriptions.Item>
                                <Descriptions.Item label="Address">
                                    No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                                </Descriptions.Item>
                            </Descriptions>
                        </Card>
                    </Col>
                    {/*<Col span={8}>*/}
                    {/*    <Card title="Card title" bordered={false}>*/}
                    {/*        <Descriptions title="User Info" >*/}
                    {/*            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>*/}
                    {/*            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>*/}
                    {/*            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>*/}
                    {/*            <Descriptions.Item label="Remark">empty</Descriptions.Item>*/}
                    {/*            <Descriptions.Item label="Address">*/}
                    {/*                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China*/}
                    {/*            </Descriptions.Item>*/}
                    {/*        </Descriptions>*/}
                    {/*    </Card>*/}
                    {/*</Col>*/}
                    {/*<Col span={8}>*/}
                    {/*    <Card title="Card title" bordered={false}>*/}
                    {/*        <Descriptions title="User Info" >*/}
                    {/*            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>*/}
                    {/*            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>*/}
                    {/*            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>*/}
                    {/*            <Descriptions.Item label="Remark">empty</Descriptions.Item>*/}
                    {/*            <Descriptions.Item label="Address">*/}
                    {/*                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China*/}
                    {/*            </Descriptions.Item>*/}
                    {/*        </Descriptions>*/}
                    {/*    </Card>*/}
                    {/*</Col>*/}
                </Row>

            </div>
        </div>
    )
}