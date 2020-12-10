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
        let [imgPath, setImagePath] = useState('')
        let [randomNumber, setRandomNumber] = useState('-1')
        let [counter, setCounter] = useState(0);
        let [score, setScore] = useState(0);
        let [time, setTimer] = useState(0);
        let [isFiveSecoundFlag, setIsFiveSecoundFlag] = useState(true);
        const clickRandom = () => {
            let no = parseInt(Math.random() * 1000) % 6;
            setImagePath(`../../assets/${no + 1}.png`)
            setRandomNumber(no);
            setScore(score + no + 1);
            setCounter(counter + 1);
        }
        useEffect(()=> {
            setScore(0)
        }, [])
        useEffect(() => {
            setInterval(() => {
                setTimer(time => time + 1);
            }, 1000);
        })
        useEffect(() => {
            if (counter === 3) {
                submitScore();
            }
            setIsFiveSecoundFlag(true)
            console.log("before")
            let timer = setTimeout(() => {
                setIsFiveSecoundFlag(false)
                console.log("after")

            }, 5000)
            return () => clearTimeout(timer);
        }, [counter])

        const submitScore = () => {
            let user = JSON.parse(localStorage.getItem('user'))
            let params = {
                user_id: user.user_id,
                score: score,
                time: time
            }
            axios.post(`${appConfig.host}${urls.addScore}`, params).then(result => {

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
                    imgPath,
                    clickRandom,
                    randomNumber,
                    counter,
                    score,
                    isFiveSecoundFlag,
                    logout
                }}
            />
        )
    }
)

export default enhancer
