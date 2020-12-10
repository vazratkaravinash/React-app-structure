import { compose } from 'redux'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { urls } from '../../url'
import { appConfig } from '../../constants'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { toast } from 'react-toastify';

export let enhancer = compose(
    withRouter,
    LoginComponent => ({
        ...props
    }) => {
        let [username, setUsername] = useState('')
        let [password, setPassword] = useState('')
        let [errorMessage, setErrorMessage] = useState(null)
        let [disableLoginButton, setDisableLoginButton] = useState(true)
        let [loader, setLoader] = useState(false)
        const handleSubmit = (e) => {
            e.preventDefault();
            login()
        }
        useEffect(() => {
            if (username != '' && password != '') {
                setDisableLoginButton(false)
            }
            else {
                setDisableLoginButton(true)
            }
        }, [username, password])
        const login = () => {
            let params = {
                "username": username,
                "password": password
            }
            setLoader(true)
            axios.post(`${appConfig.host}${urls.login}`, params).then(result => {
                console.log(result)
                debugger
                setLoader(false)
                if (result.data.statusCode === 200) {
                    localStorage.setItem('user',JSON.stringify(result.data.object.user))
                    if (result.data.object.user.user_role === 'Admin') {
                        props.history.push('/admin/dashboard');
                    }
                    else {
                        props.history.push('/dashboard');
                    }
                    toast.success("Login successfully!")
                }
                else if (result.data.statusCode === 400) {
                    toast.success(result.data.message)
                    setErrorMessage(result.data.message)
                }

            }).catch(error => {
                setLoader(false)
                toast.success("Something went wrong.")
                setErrorMessage("Something went wrong.")
            });
        }

        const handleChange = (e) => {
            switch (e.target.name) {
                case 'username': setUsername(e.target.value); break;
                case 'password': setPassword(e.target.value); break;
            }
        }

        const handleSignUpChange = (e) => {
            props.history.push("/register")
        }
        return (
            <LoginComponent
                {...props}
                {...{
                    //   currentData,
                    handleChange,
                    handleSubmit,
                    username,
                    password,
                    errorMessage,
                    handleSignUpChange,
                    loader
                }}
            />
        )
    }
)

export default enhancer
