const Footer = () =>{

    return (
        <>

        <footer>
            <div className="footer_add_recipe">
                <button>Add new recipe</button>
            </div>
            <div className="footer_registration">
                <form className="registration_form">
                <label htmlFor="userName">Name</label>
                <input 
                    type="text" 
                    id="name"
                    name="name"
                />
                <input
                    type="submit"
                    id="registrationButton"
                    value="Register"
                />
                </form>
            
            </div>
        </footer>
        </>
    )
}

export default Footer;