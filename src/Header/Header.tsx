import Navigation from "../Navigation/Navigation";
import styles from './header.module.scss';

const navigation = [
  { lebel: "Form", link: "/" },
  { lebel: "Hook-Form", link: "/hookform" },
];


const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <Navigation navigation={navigation} classNameNav='header-nav'/>
      </div>
    </header>
  );
}
 
export default Header;