import React, { Component } from 'react';
import { Card, Button, Modal } from 'antd'
import './ui.less'

class Modals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        }
    }
    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-warp">
                    <Button type="primary" onClick={() => this.handleOpen('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal3')}>顶部20px弹框</Button>
                    <Button type="primary" onClick={() => this.handleOpen('showModal4')}>水平垂直居中</Button>
                </Card>
                <Modal
                    title="React Message"
                    visible={this.state.showModal1}
                    onCancel={() => {
                        this.setState({
                            showModal1: false
                        })
                    }}
                >
                    <p>你点击了React Modal!!!</p>
                </Modal>
                <Modal
                    title="React Message"
                    visible={this.state.showModal}
                    onCancel={() => {
                        this.setState({
                            showModal: false
                        })
                    }}
                >
                    <p>你点击了React Modal!!!</p>
                </Modal>
                <Modal
                    title="React Message"
                    visible={this.state.showModal}
                    onCancel={() => {
                        this.setState({
                            showModal: false
                        })
                    }}
                >
                    <p>你点击了React Modal!!!</p>
                </Modal>
                <Modal
                    title="React Message"
                    visible={this.state.showModal}
                    onCancel={() => {
                        this.setState({
                            showModal: false
                        })
                    }}
                >
                    <p>你点击了React Modal!!!</p>
                </Modal>
                <Modal
                    title="React Message"
                    visible={this.state.showModal}
                    onCancel={() => {
                        this.setState({
                            showModal: false
                        })
                    }}
                >
                    <p>你点击了React Modal!!!</p>
                </Modal>
            </div>
        );
    }
    handleOpen = (type) => {
        this.setState({
            showModal: true
        })
    }
}

export default Modals;