import Navigation from "../Navigation/Navigation";


const navigation = [
  { lebel: "Form", link: "/" },
  { lebel: "Test", link: "/test" },
];

const Footer = () => {
  return (
    <footer>
       <div className="container">
        <Navigation navigation={navigation} classNameNav='footer-nav'/>
       </div>
    </footer>
  );
}
 
export default Footer;