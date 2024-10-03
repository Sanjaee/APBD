import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center fixed top-0 w-full z-30 px-20 h-28 border'>
      <img className='w-32' src="https://data.go.id/assets/image-8@2x.png" alt="logo" />
      <div className='flex items-center gap-5'>
      <Link to="/" className='font-bold'>Datasets</Link>
      <Link to="/" className='font-bold'>Data Insight</Link>
      <Link to="/" className='font-bold'>Publikasi</Link>
      <Link to="/" className='font-bold'>Tentang</Link>
      <Link to="/" className='font-bold'>Regulasi SDI</Link>

      <Link to="/login" className='bg-red-600 ml-10  text-white font-bold py-2 items-center flex text-2xl rounded-2xl px-8 '>
        Login
      </Link>
      </div>
    </div>
  )
}

export default Navbar
