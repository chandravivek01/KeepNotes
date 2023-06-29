import './App.css';

import notesLogo from './images/notesLogo.JPG'
const Header = () => {
    return (
      <>
        <div className="header">
            <img src={notesLogo} alt="notes"/>
            <h1>VCS Notes</h1>
        </div>
      </>
    );
};

export default Header;