import React, { Fragment } from 'react'
import enhancer from './enhancer'
import './style.scss'

function Register(props) {
    const {
        handleSubmit,
        handleChange,
        username,
        nikname,
        password,
        errorMessage,
        handleSignInChange,
    } = props
    return (
        <Fragment>
            <div class="row m-5 p-5 text-center wrapper-register">
                <form onSubmit={handleSubmit}>
                    <div className="col-md-12 text-center">
                        <h3 class="text-dark mb-2">Sign Up</h3>
                    </div>
                    <div class="col-md-12 m-2 p-2">
                        <input
                            type="text"
                            class="form-control border-left-0"
                            id="fname"
                            placeholder="Username"
                            name="username"
                            value={username}
                            onChange={e => { handleChange(e) }}
                            required />

                    </div>
                    <div class="col-md-12 m-2 p-2">
                        <input
                            type="text"
                            class="form-control border-left-0"
                            id="lname"
                            placeholder="Nik Name"
                            name="nikname"
                            value={nikname}
                            onChange={e => { handleChange(e) }}
                            required />

                    </div>
                    <div class="col-md-12 m-2 p-2">

                        <input
                            type="password"
                            class="form-control border-left-0"
                            id="pass"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={e => { handleChange(e) }}
                            required />
                    </div>
                    <div class="col-md-12 text-center">
                        <button
                            type="submit"
                            className=""
                        >
                            Sign Up
                                                                            </button>
                    </div>
                    <div class="col-md-12">
                        <p>Already have an account ? <label
                            class="sortable d-inline-block blue-link"
                            onClick={e => handleSignInChange(e)}>
                            Sign In
                                                                    </label> now</p>
                    </div>
                    <div class="text-danger">
                        {errorMessage}
                    </div>
                </form>
            </div>
        </Fragment >

    )
}

export default enhancer(Register)


