import React from 'react'
import data from '../data.js'
import { FaTh } from 'react-icons/fa'
function Users() {
    return (
        <div>
            <table border>
                <thead>
                    <tr className='text-white'>
                        <td>ID</td>
                        <td>First_name</td>
                        <td>last_name</td>
                        <td>Avatar</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map(val => {
                        return (
                            <>
                                <tr className='text-white'>
                                    <td>{val.id}</td>
                                    <td>{val.first_name}</td>
                                    <td>{val.last_name}</td>
                                    <td><img src={val.avatar} alt="" width={100} /></td>
                                </tr>
                                
                                
                            </>
                        )
                    })}
                </tbody>
            </table>

        </div >
    )
}

export default Users