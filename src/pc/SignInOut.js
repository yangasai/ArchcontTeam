import React, {useCallback, useEffect, useState} from "react";

function SignInOut({ hideSignInOut }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isSignIn, setIsSignIn] = useState(true);

    const handleClose = useCallback(() => {
        setIsVisible(false);
        setTimeout(hideSignInOut, 300);
    }, [hideSignInOut]);

    useEffect(() => {
        setIsVisible(true);
        const handleClickOutside = (event) => {
            const container = document.querySelector('.container_signIn');
            if (container && !container.contains(event.target)) {
                handleClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            setIsVisible(false);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClose]);

    const toggleMode = (mode) => {
        setIsSignIn(mode === 'signIn');
    };

    // Для входа/регистрации
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordConfirmError, setPasswordConfirmError] = useState('');

    const handleBlur = (field) => {
        if (field === 'username' && !username) {
            setUsernameError('Пожалуйста, введите E-mail/Логин');
        } else {
            setUsernameError('');
        }

        if (field === 'email' && !email) {
            setEmailError('Пожалуйста, введите E-mail');
        } else {
            setEmailError('');
        }

        if (field === 'password' && !password) {
            setPasswordError('Пожалуйста, введите пароль');
        } else {
            setPasswordError('');
        }

        if (field === 'passwordConfirm' && !passwordConfirm) {
            setPasswordConfirmError('Пожалуйста, введите повторно пароль');
        } else {
            setPasswordConfirmError('');
        }
    };

    // Функция для отображения формы входа
    const renderSignInForm = () => (
        <div className="container_hSignIn">
            <div className="h_signInOut">С возвращением,</div>
            <div className="h_signInOut">Рады снова тебя видеть!</div>

            <form className="inputSignIn">
                <label htmlFor="username">E-mail/Логин</label><br />
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onBlur={() => handleBlur('username')}
                    placeholder={usernameError ? 'Пожалуйста, введите E-mail/Логин' : ''}
                    style={{ borderColor: usernameError ? 'red' : '' }}
                /><br />

                <label htmlFor="password">Пароль</label><br />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => handleBlur('password')}
                    placeholder={passwordError ? 'Пожалуйста, введите пароль' : ''}
                    style={{ borderColor: passwordError ? 'red' : '' }}
                /><br />
                <button className="password">Забыли пароль?</button>
            </form>
        </div>
    );

    // Функция для отображения формы регистрации
    const renderSignUpForm = () => (
        <div className="container_hSignIn">
            <div className="h_signInOut">Впервые здесь?</div>
            <div className="h_signInOut" style={{ opacity: '0.6', fontSize: '18px' }}>
                Пройди небольшую регистрацию и открой больше возможностей
            </div>

            <form className="inputReg">
                <label htmlFor="username">Логин</label><br />
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onBlur={() => handleBlur('username')}
                    placeholder={usernameError ? 'Пожалуйста, введите Логин' : ''}
                    style={{ borderColor: usernameError ? 'red' : '' }}
                /><br />

                <label htmlFor="e-mail">E-mail</label><br />
                <input
                    type="email"
                    name="e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => handleBlur('email')}
                    placeholder={emailError ? 'Пожалуйста, введите email' : ''}
                    style={{ borderColor: emailError ? 'red' : '' }}
                /><br />

                <label htmlFor="password">Пароль</label><br />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onBlur={() => handleBlur('password')}
                    placeholder={passwordError ? 'Пожалуйста, введите пароль' : ''}
                    style={{ borderColor: passwordError ? 'red' : '' }}
                /><br />

                <label htmlFor="passwordConfirm">Повторите пароль</label><br />
                <input
                    type="password"
                    name="passwordConfirm"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    onBlur={() => handleBlur('passwordConfirm')}
                    placeholder={passwordConfirmError ? 'Пожалуйста, введите повторно пароль' : ''}
                    style={{ borderColor: passwordConfirmError ? 'red' : '' }}
                /><br />
            </form>
        </div>
    );


    return (
        <div className={`container_signIn ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="signInOut_1">
                <button
                    className={`SignIn ${isSignIn ? 'active' : ''}`}
                    onClick={() => toggleMode('signIn')}
                    disabled={isSignIn}
                >
                    Войти
                </button>
                <button
                    className={`Regis ${!isSignIn ? 'active' : ''}`}
                    onClick={() => toggleMode('regis')}
                    disabled={!isSignIn}
                >
                    Регистрация
                </button>
            </div>
            <div className="signInOut_2">
                {isSignIn ? renderSignInForm() : renderSignUpForm()}
            </div>
            <div className="signInOut_3">
                {isSignIn ? (
                    <button className="h_SignIn">Войти</button>
                ) : (
                    <button className="h_SignIn">Зарегистрироваться</button>
                )}
            </div>
        </div>
    );
}

export default SignInOut;