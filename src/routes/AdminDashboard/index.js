import React, { Fragment } from 'react'
import enhancer from './enhancer'
import './style.scss'

function AdminDashboard(props) {
    const {
        users,
        downloadUrl,
        logout
    } = props
    console.log(users)
    return (
        <Fragment>

            <div className="row p-5 m-5 text-center">
                <table>
                    <tr className="p-3 m-2">
                        <td className="m-2 p-3">Sr.</td>
                        <td className="m-2 p-3">Nikname</td>
                        <td className="m-2 p-3">Score</td>
                        <td className="m-2 p-3">Time Taken(in sec)</td>
                    </tr>
                    {users && users.map(user => (
                         <tr>
                            <td>
                                {user.id}
                            </td>
                            <td>
                            {user && user.user && user.user.nik_name ? user.user.nik_name : ''}
                            </td>
                            <td>
                                {user.score}
                            </td>
                            <td>
                                {user.time}
                            </td>
                        </tr>)

                    )}
                </table>
                <div className="mt-2 col-md-12">
                    <button><a href={downloadUrl}>Export</a></button>
                    <button onClick={logout}>Logot</button>

                </div>
            </div>
        </Fragment >
    )
}

export default enhancer(AdminDashboard)


