import { compose } from 'redux'
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { data, top_classes } from './config'
import axios from 'axios'
import { urls } from '../../url'
import { appConfig } from '../../constants'
import { withRouter } from 'react-router-dom'

export let enhancer = compose(
    connect(
        ({
            auth
        }) => ({
            auth
        }),
    ),
    withRouter,
    HomeComponent => ({
        auth,
        history,
        ...props
    }) => {
        let [categories, setCategories] = useState([])
        let [loader, setLoader] = useState(false)

        //let [defaultValue,setDefaultValue]= useState()
        let [selectedTargetVal, setSelectedTargetVal] = useState('')
        useEffect(() => {
            if (auth && auth.user_role && auth.user_role === 'Admin') {
                history.push("/admin")
            }
            else {
                setLoader(true)
                axios.get(`${appConfig.host}${urls.categories}`).then(result => {
                    setLoader(false)
                    setCategories(result.data.object)
                }).catch(error => {
                    setLoader(false)
                    console.log(error)
                });
            }
        }, [])

        const updateData = (e) => {
            setSelectedTargetVal(e.target.value)
        }

        return (

            <HomeComponent
                {...props}
                {...{
                    top_classes,
                    categories,
                    updateData,
                    selectedTargetVal,
                    loader
                }}

            />
        )
    }
)

export default enhancer
