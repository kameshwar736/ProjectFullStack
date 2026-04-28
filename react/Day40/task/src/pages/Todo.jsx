import React, { useEffect, useState } from 'react'

const Todo = () => {


    const [resultTodo, setResultTodo] = useState([])

    useEffect(() => {
        const fetchApi = async () => {

            const getData = await fetch('https://dummyjson.com/todo')
            const changedata = await getData.json()

            setResultTodo(changedata.todos)

           
            


        }

    fetchApi()
    }, [])

    
    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>userId</th>
                        <th>todo</th>
                        <th>completed</th>
                    </tr>
                </thead>
                <tbody>
                    {resultTodo.map((e)=>(

                        <tr key={e.id}>
                            <td>{e.userId}</td>
                            <td>{e.todo}</td>
                            <td style={e.completed?{color:'green'}:{color:'red'}}>{e.completed?"completed":"Not completed"}</td>
                        </tr>
                
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Todo