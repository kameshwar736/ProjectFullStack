import React, { useEffect, useState } from 'react'

const Home = () => {

    const [result, setResult] = useState([])

    useEffect(() => {

        const getData = async () => {
            const getProduct = await fetch('https://dummyjson.com/products')
            const changeData = await getProduct.json()
            setResult(changeData.products)
        }

        getData()
    }, [])

    return (
        <>

            <table border={1}>

                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product </th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>

                    {result.map((e) => (
                    <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.title}</td>
                        <td>{e.price}</td>
                    </tr>

                    ))}

                </tbody>
            </table>





        </>
    )
}

export default Home