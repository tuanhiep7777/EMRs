import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/index';
import { getUserInfo } from '../redux/actions/index';

class User extends Component {

    componentWillMount() {
        this.props.getUserInfo(this.props.userInfo.email);
        
    }

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
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getUserInfo: email => {
//             dispatch(actions.getUserInfo(email));
//         }
//     }
// };

// export const getUserInfo = (email) => {
//     return (dispatch) => {
//         dispatch({
//             type: types.GET_USER_INFO,
//             userInfo: response.data
//         }
//     }
// }

export default connect(mapStateToProps, { getUserInfo })(User);
