import { MdPostAdd, MdMessage } from 'react-icons/md';
import {Link} from 'react-router-dom';
import classes from './MainHeader.module.css';

function MainHeader({ onCreatePost }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        Front Demo Project
      </h1>
      <p>
        <Link to="/create-post" className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          지원하기
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;