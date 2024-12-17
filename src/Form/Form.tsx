import { useEffect, useState } from "react";
import styles from "./form.module.scss";
const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // состояние были ли мы внутри или нет
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  //
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState("Password не может быть пустым");
  // 
  const [formValid, setFormValid] = useState(false)

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "email") {
      setEmailDirty(true);
    }
    if (e.target.name === "password") {
      setPasswordDirty(true);
    }
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!re.test(String(e.target.value).toLocaleLowerCase())) {
      setEmailError('Некоректный Email');
    } else {
      setEmailError('');
    }
  }

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if(e.target.value.length < 5) {
      setPasswordError('Пароль должен быть не менее 5 символов')
      if(!e.target.value) {
        setPasswordError('Password не может быть пустым')
      }
    } else {
      setPasswordError('')
    }
  }


  useEffect(() => {
    if(emailError || passwordError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError])



  return (
    <div className="container">
      <h1 className={styles.title}>Простая Регистрация</h1>
      <form className={styles.form}>
        <div className={styles.block}>
          <input
            value={email}
            onChange={e => emailHandler(e)}
            className={styles.input}
            onBlur={(e) => blurHandler(e)}
            type="text"
            name="email"
            placeholder="Enter zoor email..."
          />
          {emailDirty && emailError && (
            <div className={styles.error}>{emailError}</div>
          )}
        </div>
        <div className={styles.block}>
          <input
            value={password}
            onChange={e => passwordHandler(e)}
            className={styles.input}
            onBlur={(e) => blurHandler(e)}
            type="password"
            name="password"
            placeholder="Enter your password..."
          />
          {passwordDirty && passwordError && (
            <div className={styles.error}>{passwordError}</div>
          )}
        </div>
        <button disabled={!formValid} className={styles.submit} type="submit">Registration</button>
      </form>
    </div>
  );
};

export default Form;
