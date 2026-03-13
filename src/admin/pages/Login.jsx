

function Login() {
    return (
        <div className="login-screen">
            <h1>Shelbrew</h1>
            <form className="login-form">
                <div className="input-field">
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                </div>
                <button className="login-btn" type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login