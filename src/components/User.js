import React, { Component } from 'react';
import { connect } from 'react-redux';

class User extends Component {

    render() {
        return (
            <div className="panel panel-default">
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <img src={this.props.userInfo.profilePicture} className="img-thumbnail" alt="Image" />

                </div>

                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

                    <div className="panel panel-default">
                        <div className="panel-heading">Chi tiết</div>
                        <div className="panel-body">
                            <p>Thông tin khách hàng:</p>
                        </div>

                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Họ và tên:</td>
                                    <td>{this.props.userInfo.name}</td>
                                </tr>
                                <tr>
                                    <td>Ngày sinh:</td>
                                    <td>{this.props.userInfo.dateOfBirth}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        );
    }
}

var mapStateToProps = state => {
    return {
        userInfo: state.userInfo
    }
}

export default connect(mapStateToProps, null)(User);
