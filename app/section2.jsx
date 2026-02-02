import './Section2.css'
import img1  from '../images/img1.jpg'
import Image from 'next/image'
import src1 from '../images/product-cover-5.svg'
import src2 from '../images/fixed-height.svg'
import src3 from '../images/fixed-height (1).svg'
export default function Section2() {
    
   return(
    <div className='divv'>
        <div className="img_ar">
        <Image
        src={img1}
        alt="card"
        width={500}
        className='img1' />
        </div>

        <div className="txt_ar">
            <div className="part_1">
                <div>
                 <Image
                     src={src1}
                     alt='src1'
                 />
                    <h4>Graphic Design</h4>
                    <p>English Department</p>
                    <p>$16.48 <span>$6.48</span></p>
                </div>
                <div>
                    <Image
                        src={src2}
                     alt='src1'
                    />
                    <h4>Graphic Design</h4>
                    <p>English Department</p>
                    <p>$16.48 <span>$6.48</span></p>
                </div>
                <div>
                    <Image
                        src={src3}
                     alt='src1'
                    />
                    <h4>Graphic Design</h4>
                    <p>English Department</p>
                    <p>$16.48 <span>$6.48</span></p>
                </div>
            </div>

            <div className="part_2">
                <div>
                    <Image
                        src={src1}
                     alt='src1'
                     />
                    <h4>Graphic Design</h4>
                    <p>English Department</p>
                    <p>$16.48 <span>$6.48</span></p>
                </div>
                <div>
                    <Image
                        src={src2}
                     alt='src1'
                    />
                    <h4>Graphic Design</h4>
                    <p>English Department</p>
                    <p>$16.48 <span>$6.48</span></p>
                </div>
                <div>
                    <Image
                       src={src3}
                     alt='src1'
                    />
                    <h4>Graphic Design</h4>
                    <p>English Department</p>
                    <p> $16.48 <span>$6.48</span></p>
                </div>
            </div>
        </div>
    </div>
   )

}