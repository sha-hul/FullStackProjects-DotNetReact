import logo from "../Image/logo512.png";

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img 
                            src={logo} 
                            alt="Logo" 
                            width="30" 
                            height="24" 
                            className="d-inline-block align-text-top" 
                        />
                        <h2 className="d-inline p-4">React-CountOpedia</h2>
                    </a>
                </div>
            </nav>
            <p className="text-info p-0 m-0 text-center bg-secondary">The Application for counter</p>
        </div>
    );
};

export default Header;
