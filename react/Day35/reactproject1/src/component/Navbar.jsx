import img from "../assets/2.png"

const Navbar = () => {
    return (
        <>

            <div className="parent">
                <img src={img} alt="" />
                <h1>AtoZTech</h1>
                <div className="child">
                    <h4>Home</h4>
                    <h4>About</h4>
                    <h4>profile</h4>
                </div>
            </div>

        </>
    )
}

export default Navbar