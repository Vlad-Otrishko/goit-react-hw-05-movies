import { NavLink} from 'react-router-dom';
import s from './Navigation.module.css';
import PropTypes from 'prop-types';


const Navigation = ({ address, pageName }) => {


    return (
      <nav id='home'>
        <NavLink exact to={address[0]} className={s.link} activeClassName={s.activeLink}>
          {pageName[0]}
        </NavLink>
        <NavLink to= {address[1]} className={s.link} activeClassName={s.activeLink}>
          {pageName[1]}
        </NavLink>
      </nav>
    );

}
export default Navigation;

Navigation.propTypes = {
  address: PropTypes.arrayOf(PropTypes.string),
  pageName: PropTypes.arrayOf(PropTypes.string),
};
