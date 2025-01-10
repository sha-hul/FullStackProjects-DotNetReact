import logo from "../../Image/logo512.png";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark" 
            style={{borderBottom:"1px solid gray",boxShadow:"0px 2px 3px 0px gray"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img 
                            src={logo} 
                            alt="Logo" 
                            width="30" 
                            height="24" 
                            className="d-inline-block align-text-top" 
                        />
                        <h2 className="d-inline p-4">React-CycleOpedia</h2>
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;