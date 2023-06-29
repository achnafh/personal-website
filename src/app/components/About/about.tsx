'use-client';

import Image from "next/image";

const skillsIcon = {
    stacks : [
        "git.png", "js.png", "mui.png", "next.png", "python.png", "react.png",
        "redux.png", "tableau.png", "ts.png"
    ]
}

const About = () => {
    return ( 
        <section className="w-full h-auto font-main text-white bg-[#E0DBF0] -z-50">
            <div className="">

            </div>
            <div className = " px-52" id="about-container">
                <div className="" id="about-me-content">
                    <hr className="h-[5px] my-7 w-[10%] bg-dark-blue border-0"/>
                    <p className="text-5xl font-bold text-dark-blue mb-5">About Me.</p>
                    <div className="flex flex-row gap-[5vw] text-lg h-auto">
                        <p className="text-gray-black basis-1/2">I am a sophomore student at the Nanyang Technological University (NTU) pursuing a bachelor&#8217;s degree in Mechanical Engineering, specialising in Robotics and Mechatronics. I am also an awardee of  Prestasi Talenta Scholarship, a fully-funded scholarship from the Ministry of Education and Culture of Indonesia <br/><br/>
I am particularly interested in software development and data analytics for industrial automation. I&#8217;m also passionate in business, finance, and entrepreneurship. <br/><br/>
I am particularly interested in software development and data analytics for industrial automation. I&#8217;m also passionate in business, finance, and entrepreneurship. <br/><br/>
I am particularly interested in software development and data analytics for industrial automation. I&#8217;m also passionate in business, finance, and entrepreneurship.
                        </p>
                        
                        <div className="flex flex-col basis-1/2 items-center">
                            <div className="relative w-[350px] h-[502px]">
                                <Image src="/img/profile-2.jpg" alt="" fill={true} className="rounded-xl drop-shadow-3xl"/>
                            </div>
                            <div className="relative w-[350px] h-[502px] -mt-[520px] -right-5 -z-30">
                                <Image src="/img/rectangle-bg.png" alt="" fill={true} className="rounded-xl drop-shadow-3xl"/>
                            </div>
                            <a href="#" className='bg-dark-blue rounded-lg mt-10 px-12 py-2 drop-shadow-2xl hover:bg-hover-darker-blue tracking-widest'>View Resume</a>
                        </div>
                    </div>
                </div>
                <div className="" id="skills-content">
                    <hr className="h-1 my-5 w-[10%] bg-dark-blue border-0"/>
                    <p className="text-5xl font-bold text-dark-blue mb-2">Skills</p>
                    <div>
                        <div className="" id="tech-stacks">
                            <p className="text-lg text-black">I am experienced in...</p>
                            <div className="flex">
                                <Image src="/icons/python.png" alt="" width={50} height={50} className="block hover:drop-shadow-2xl hover:bg-gray-400"></Image>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>
     );
}
 
export default About;