import Logo, { LogoWithTextSM } from './Logo';
import Search from './Search';
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();
  const links = [t('fw'), t('hp'), t('insp'), t('cmty'), t('mkt')];
  return (
    <div className="navbar px-5 mb-10 hidden md:flex ">
      <LogoWithTextSM />
      <div className="flex-1 justify-center gap-10">
        {links.map((link, index) => {
          return (
            <a href="" key={index}>
              <p className="text-white">{link}</p>
            </a>
          );
        })}
      </div>
      <Search />
    </div>
  );
}

export default Header;
