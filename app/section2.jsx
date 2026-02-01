import css from './Section2.css'
import img1  from '../images/img1.jpg'
import Image from 'next/image'
export default function Section2() {
    
   return(
    <div>
        <Image
        src={img1}
        alt="card" />
        <p>gyg</p>
    </div>
   )

}