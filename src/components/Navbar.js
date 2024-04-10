import { useAuth0 } from "@auth0/auth0-react";
function Navbar(){
    const { loginWithRedirect,logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    return(
        <nav className="navbar w-100">
            <div className="container-fluid d-flex w-100">
                <div className="navbar-brand mb-0 h1 text-center fs-1 fw-bold">TaskList - Manage Your Tasks</div>
                {(!isAuthenticated)?<div className="d-flex gap-4">
                    <div className="bg-white py-1 px-3 rounded-pill login-btn text-center text-dark" onClick={()=>loginWithRedirect()}>Signup</div>
                    <div className="bg-white py-1 px-3 rounded-pill login-btn text-center text-dark" onClick={()=>loginWithRedirect()}>Login</div>
                </div>:
                <div className="d-flex gap-4">
                    <div className="bg-white py-1 px-3 rounded-pill login-btn text-center text-dark" onClick={()=>logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</div>
                </div>}
            </div>
        </nav>
    )
}
export default Navbar;