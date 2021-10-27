import { useLocation } from 'react-router-dom';
import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ handleClick }) => {
  let anchor;
  const { pathname } = useLocation();
  if (pathname === '/') { anchor = '#home' }
  else anchor ="#searchField"
  return (
    <div className={s.wrapper}>
      <button type="button" className={s.Button} onClick={handleClick}>
        Load more
      </button>
      <div className={s.returnButton}>
        <a href={anchor} className={s.returnButtonLink}>
          Back
        </a>
      </div>
    </div>
  );
};
export default Button;

Button.propTypes = {
  handleClick: PropTypes.func,
};

