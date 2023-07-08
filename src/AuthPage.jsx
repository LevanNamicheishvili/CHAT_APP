import axios from "axios";

const AuthPage = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        const { value } = e.target[0];
        axios.post(
            'http://localhost:3001/authenticate',
            { username: value }
        )
        props.onAuth({ username: value, secret: value })
    }

    return (
        <div className="background">
            <form onSubmit={onSubmit} className="form-card">
                <div className="form-title">
                    სალამი 👋
                </div>

                <div className="form-subtitle">
                    შეიყვანეთ სახელი და დაიწყეთ მიმოწერა...
                </div>

                <div className="auth">
                    <div className="auth-label">სახელი</div>
                    <input className="auth-input" name="username" />
                    <button className="auth-button" type="submit">შესვლა</button>
                </div>
            </form>
        </div>
    );
}

export default AuthPage