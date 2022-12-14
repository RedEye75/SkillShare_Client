// // header.tsx
// @import '../styles/theme-variables.scss';

// import { FC, useContext } from 'react';
// import { ThemeContext } from '../contexts/theme-context';
// import logoIcon from '../images/logo-icon.png';
// import './styles.scss';
// const Header: FC = () => {
//   const { theme, setTheme } = useContext(ThemeContext);
//   const handleThemeChange = () => {
//     const isCurrentDark = theme === 'dark';
//     setTheme(isCurrentDark ? 'light' : 'dark');
//   };
//   return (
//     <header className="header">
//       <div className="header-content">
//         <a href="/" className="logo-section">
//           <img src={logoIcon} alt="logo" />
//           <span>Light/Dark mode app</span>
//         </a>
//         <div className="toggle-btn-section">
//           <div className={`toggle-checkbox m-vertical-auto`}>
//             <input
//               className="toggle-btn__input"
//               type="checkbox"
//               name="checkbox"
//               onChange={handleThemeChange}
//               checked={theme === 'light'}
//             />
//             <button type="button" className={`toggle-btn__input-label`} onClick={handleThemeChange}></button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };
// export default Header;
// .header {
//   @include themify($themes) {
//     background: themed('headerFooterBackground');
//   }
// }.theme-light .header {
//     background: #fff;
//  }
//  .theme-dark .header {
//     background: #36394c;
//  }
