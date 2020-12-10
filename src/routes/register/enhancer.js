import { compose } from 'redux'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { urls } from '../../url'
import { appConfig } from '../../constants'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify';

export let enhancer = compose(
    withRouter,
    RegisterComponent => ({
        ...props
    }) => {
        const [username, setUsername] = useState('')
        const [nikname, setNikname] = useState('')
        const [password, setPassword] = useState('')

        const handleSubmit = (e) => {
            e.preventDefault();
            registerUser()
        }

        const registerUser = () => {
            let params
            debugger
            params = {
                "user_id": username,
                "nik_name": nikname,
                "password": password,
                "user_role": "learner"
            }

            axios.post(`${appConfig.host}${urls.register}`, params).then(result => {
                if (result.data.statusCode === 200) {
                    toast.success("User Added!");
                    props.history.push('/');
                }
                else {
                    toast.error("Error in user registration!");
                }
            }).catch(error => {
                toast.error("Error in user registration!");
            });
        }

        const handleChange = (e) => {
            switch (e.target.name) {
                case 'username': setUsername(e.target.value); break;
                case 'nikname': setNikname(e.target.value); break;
                case 'password': setPassword(e.target.value); break;

            }
        }

        const handleSignInChange = (e) => {
            props.history.push("/")
        }

        return (
            <RegisterComponent
                {...props}
                {...{
                    handleSubmit,
                    handleChange,
                    username,
                    nikname,
                    password,
                    handleSignInChange  
                }}
            />
        )
    }
)

export default enhancer
