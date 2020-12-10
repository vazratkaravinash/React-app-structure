import React, { Fragment } from 'react'
import enhancer from './enhancer'
import './style.scss'
import Loading from '../../shared/Components/Loading'

function Login(props) {
    let {
        handleChange,
        handleSubmit,
        username,
        password,
        errorMessage,
        disableLoginButton,
        handleSignUpChange,
        loader
    } = props
    return (
        <Fragment>
            {loader ? <Loading isLoading={true}></Loading> : (
                <div class="container">
                    <div class="mt-4">
                        {/* <img src={appLogo} class="w-20" /> */}
                    </div>
                    <div class="row">
                        <div class="col-md-12 p-0 mr-0">
                            <div class="w-100 mx-auto row mx360 mt-5">
                                <div class="col-12">
                                    <div class="my-4">
                                        <h3 class="text-dark mb-3">Sign In</h3>
                                    </div>

                                    <div >
                                    </div>
                                    <form onSubmit={handleSubmit} class="login-form mt-4">
                                        <div>
                                            <div class="input-email mt-3 input-group">
                                                <div class="input-group-prepend">
                                                    <input
                                                        class="input-log p-2"
                                                        name="username"
                                                        placeholder="Username"
                                                        value={username}
                                                        name="username"
                                                        onChange={e => { handleChange(e) }}
                                                        required />
                                                </div>
                                            </div>
                                            {/* <span class="text-danger er-msg">Please enter valid email</span> */}
                                            <div class="input-div mt-2 input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <input
                                                        class="input-log ng-dirty ng-valid ng-touched p-2"
                                                        value={password}
                                                        name="password"
                                                        onChange={e => { handleChange(e) }} placeholder="Password"
                                                        required
                                                        type="password" />
                                                </div>
                                            </div>
                                            {/* <span class="text-danger er-msg">Password required</span> */}
                                            <div class="overflow-hidden">
                                                <div class="sign-in my-2 pull-left">
                                                    <button
                                                        type="submit"
                                                        className="ml-2 btn btn-outline-danger"
                                                        disabled={disableLoginButton}>Sign In</button>
                                                </div>
                                            </div>
                                            <div class="clearfix"></div>
                                            <div class="my-4 click-log">
                                                Haven’t registered yet? {' '}
                                                <label
                                                    class=" sortable d-inline-block text-teal font-weight-bold"
                                                    onClick={e => handleSignUpChange(e)}>
                                                    Sign Up
                                                </label>{' '}now
                                        </div>
                                            <div class="text-danger">
                                                {errorMessage}
                                            </div>
                                        </div>

                                    </form>
                                </div >
                            </div >
                        </div >
                    </div >
                </div >
            )}</Fragment >
    )
}

export default enhancer(Login)


