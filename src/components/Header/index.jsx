import logo from '../../assets/logo.png';
function Header() {
  return (
    <>
      <nav className='bg-slate-900 w-full'>
        <div className='flex flex-col gap-2 items-center mx-auto justify-between py-9 sm:w-5/6 sm:flex-row'>
          <img src={logo} alt='logo' title='logo' className='w-56' />
          <p className='text-white font-serif text-xl'>
            React Course - Project 1
          </p>
        </div>
      </nav>
    </>
  );
}

export default Header;
