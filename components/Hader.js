//import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link'
import Style from '../styles/Header.module.css'
const Header = () => {
  return (
    <div className={Style.container}>
      <div className="d-flex  justify-content-between container">
        <div className='mt-3'>
          <ul className={Style.samt}>
            <li>
              <Link href="">Logo</Link>
            </li>
          </ul>
        </div>
        <div className='mt-3'>
          <ul className={Style.samt}>
            <li>
              <Link href="">Account</Link>
            </li>
            <li>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Header