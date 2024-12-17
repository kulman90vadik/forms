import styles from '../Form/form.module.scss';



const HookForm = () => {
  return (
    <div className="container">
      <h1 className={styles.title}>Регистрация React Hook Form</h1>
      <form className={styles.form}>
        <div className={styles.block}>
            <input
              className={styles.input}
              type="text"
              name="email"
              placeholder="Enter zoor email..."
            />
            {/* {emailDirty && emailError && (
              <div className={styles.error}>{emailError}</div>
            )} */}
          </div>
          <div className={styles.block}>
            <input
              className={styles.input}
              type="password"
              name="password"
              placeholder="Enter your password..."
            />
            {/* {passwordDirty && passwordError && (
              <div className={styles.error}>{passwordError}</div>
            )} */}
          </div>
        <button className={styles.submit} type="submit">Registration</button>
      </form>
    </div> 
  );
}
 
export default HookForm;