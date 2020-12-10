import { compose } from 'redux'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { urls } from '../../url'
import { appConfig } from '../../constants'
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom'

export let enhancer = compose(
    withRouter,
    DashboardComponent => ({
        ...props
    }) => {
        let [users, setUsers] = useState([])
        let [downloadUrl, setDownloadUrl] = useState(`${appConfig.host}${urls.export}`)
        useEffect(() => {
            getUsers()
        }, [])

        const getUsers = () => {
            axios.get(`${appConfig.host}${urls.list}`).then(result => {
                setUsers(result.data.object.users)
            }).catch(error => {
                toast.success("Something went wrong.")
            });
        }
        const exportFile = () => {
            axios.get(`${appConfig.host}${urls.export}`).then(result => {
            }).catch(error => {
                toast.success("Something went wrong.")
            });
        }

        const logout = () => {
            localStorage.removeItem('user');
            props.history.push('/');

        }

        return (
            <DashboardComponent
                {...props}
                {...{
                    users,
                    exportFile,
                    downloadUrl,
                    logout
                }}
            />
        )
    }
)

export default enhancer
