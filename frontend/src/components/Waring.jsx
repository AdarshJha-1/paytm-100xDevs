import {Link} from 'react-router-dom'

const Waring = ({text, link, goto}) => {
  return (
    <div className='flex items-center justify-center gap-1 py-3'>
        <span>{text}</span>
        <Link className='underline' to={goto}>
            {link}
        </Link>
    </div>
  )
}

export default Waring