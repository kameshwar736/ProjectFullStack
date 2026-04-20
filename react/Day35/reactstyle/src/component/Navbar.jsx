import logo from '/favicon.svg'

const Navbar = () => {

    const tittleProject = "ReactStyle"
    return (

        <>
            <div className="rootdiv">
                <div><img src={logo} alt="" /></div>
                <h1>{tittleProject}</h1>
                <div className="lidiv">
                    <p>home</p>
                    <p>Servies</p>
                    <p>Setting</p>
                </div>
            </div>

        </>

    )
}

export default Navbar