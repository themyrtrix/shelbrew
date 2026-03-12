

function Login() {
    return (
        <>
            <h1>Admin Login</h1>
            <form className="login-form">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default Login