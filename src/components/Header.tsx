import Logo from './Logo';
import Search from './Search';
const links = ['Find Work', 'Hire Pro', 'Inspiration', 'Community', 'Market'];

function Header() {
  return (
    <div className="navbar px-5 mb-10">
      <Logo />
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
