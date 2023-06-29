'use client';
import Image from 'next/image';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Landing = () => {
    return ( 
        <section className="w-full h-screen font-main text-white">
            <div className="w-full h-[377px] relative z-[-100]">
                <Image src="/img/bg-landing.png" alt="" fill={true}/>
            </div>
            <div className="px-52">
                <div className="flex flex-col justify-center -mt-48">
                    <p className='text-4xl mr-auto rounded-sm]'>Hey there!</p>
                    <p className='text-5xl font-medium mt-2 p-0 flex'>I&#8217;m 
                    <span className=" bg-[rgba(196,82,215,0.9)] px-1 mx-3">Achnaf</span> H.</p>
                    <p className='text-6xl font-medium mt-8'>Finance Geek and Data Analyst <br/> based in <span className="text-primary underline underline-offset-8">Singapore.</span></p>
                </div>
                <div className="mt-24 text-lg">
                    <ul className="flex gap-4">
                        <li><a href="https://linkedin.com/in/achnafh" target="_blank" className="rounded-2xl w-[140px] bg-dark-blue px-3 py-1 flex items-center justify-center"><span className="mr-2"><Image src="/img/linkedin.png" alt="" width={30} height={30}/></span>LinkedIn</a></li>
                        <li><a href="https://github.com/achnafh" target="_blank" className="rounded-2xl w-[140px] bg-dark-blue px-3 py-1 flex items-center justify-center"><GitHubIcon style={{marginRight:10}}/>GitHub</a></li>
                        <li><a href="mailto:achnafhabib@gmail.com" target="_blank" className="rounded-2xl w-[140px] bg-dark-blue px-3 py-1 flex items-center justify-center"><EmailIcon style={{marginRight:10}}/>Email</a></li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <hr className="h-px my-8 w-16 mr-3 bg-white border-0"/>
                    <p className="text-lg">Scroll for more</p>
                </div>
            </div>
        </section>
     );
}
 
export default Landing;