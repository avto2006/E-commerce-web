import css from './header.css'

export default function Header() {

    return (
        <div>
           <nav>
               <h1 className="logo">Bandage</h1>
               <ul className='center'>
              <a href="">  <li>Home</li> </a>
             <a href="">   <li>Shop</li>   </a>
             <a href="">   <li>About</li> </a>
              <a href="">  <li>Blog</li> </a>
              <a href="">  <li>Contact</li> </a>
              <a href="">  <li>Pages</li> </a>
               </ul>
           </nav>
        </div>
    )
}