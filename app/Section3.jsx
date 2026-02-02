import './Section3.css'
import img1 from '../images/v873batch5-aum-11.jpg'
import img2 from "../images/printed-summer-dress (4) 1.svg";
import Image from 'next/image'

export default function Section3() {
    return (
        <div className='divv'>
            <div className="img_area">
          <Image
             src={img1}
             alt='img1'
             width={600}
             height={700}

          />
           </div>

           <div className="txt_area">
            <h2>MOST POPULAR</h2>
            <p>We focus on ergonomics and meeting <br/>
you where you work. Its only a  <br/>
keystroke away.</p>
           <Image
               src={img2}
               alt='img2'
           />
           <h4>English Department</h4>

           <p>$16.48<span>$6.48</span></p>
           </div>
        </div>
    )
}