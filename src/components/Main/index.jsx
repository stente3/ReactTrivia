import reactIcon from '../../assets/reactjs-icon.png';

function Main() {
  const reasons = [
    'Was first released in 2013',
    'Was originally created by Jordan Walke',
    'Has well over 100K stars on GitHub',
    'Is maintained by Facebook',
    'Powers thousands of enterprise apps, including mobile apps',
  ];
  return (
    <main className='flex justify-center text-white py-14 relative'>
      <div className='mx-auto w-5/6 z-10'>
        <h1 className='text-6xl font-bold pb-8'>Fun facts about React</h1>
        <ul className='mx-auto w-11/12'>
          {reasons.map((element, index) => {
            return (
              <li
                className='marker:text-sky-400 list-disc pl-5 space-y-3 text-white text-2xl py-3'
                key={index}
              >
                {element}
              </li>
            );
          })}
        </ul>
      </div>
      <img
        src={reactIcon}
        alt='React'
        className='absolute end-0 top-80 w-44 z-0 sm:top-16'
      />
    </main>
  );
}
export default Main;
