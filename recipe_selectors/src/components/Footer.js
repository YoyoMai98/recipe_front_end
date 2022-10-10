import "./Footer.css"

const Footer = () =>{

    return (
        <>

        <footer>
            <div className="footer_add_recipe">
                <h2>Feeling creative to share your recipe?</h2>
                <button>Add new recipe</button>
            </div>
            <div className="footer_registration">
                <form className="registration_form">
                    <div className="name_form">
                        <label htmlFor="userName">Name</label>
                        <input 
                            type="text" 
                            id="name"
                            name="name"
                        />
                    </div>
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