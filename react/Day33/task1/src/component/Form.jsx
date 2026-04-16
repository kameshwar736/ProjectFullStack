const Form = ()=>{

return(<>

    <h1>Register Form</h1>
    <table>
        <thead>
            <th>
                <td>

                </td>
                <td>

                </td>
            </th>
        </thead>
        <tbody>
            <tr>
                <td><label>Name</label></td> <td><input type="text" required/></td>
            </tr>
            <tr>
                <td><label>Mobile</label></td> <td><input type="tel" /></td>
            </tr>
            <tr><td><label>Address</label></td> <td><input type="text" /></td></tr>
            <tr><td></td><td><input type="submit" /><input type="reset" /></td></tr>
        </tbody>
    </table>


</>)


}



export default Form