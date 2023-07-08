import Image from "next/image";

const Experience = () => {
    return ( 
        <section id="experience" className="text-white h-screen w-full px-52 font-main">
            <div id="title" className="">
                <hr className="h-[5px] my-7 w-[10%] bg-primary border-0"/>
                <p className="text-5xl font-medium text-white mb-5">Education <span className="text-primary">and</span> Work Experiences</p>
            </div>

            <div id="education" className="mb-12">
                <div className="flex items-center">
                    <div className="bg-white w-28 h-1"></div>
                    <div className="relative w-16 h-16 bg-white rounded-full p-3">
                        <Image src="/icons/edu.png" alt="" fill></Image>
                    </div>
                </div>
                <div className="flex">
                    <div className="bg-white w-1 -mt-8"></div>
                    <div className="w-full pl-8 mt-6 flex flex-col gap-3">
                        <p className="text-4xl font-medium">Nanyang Technological University</p>
                        <p className="text-2xl">July 2021 - May 2025 &#40;Expected&#41;</p>
                        <ul className="flex flex-col text-xl gap-2">
                            <li className="flex items-center"><span className="inline-block bg-primary rounded-full p-1 mr-5"></span>Majoring in Mechanical Engineering with Robotics and Mechatronics specialisation, and with Minor in Business</li>
                            <li className="flex items-center "><span className="inline-block bg-primary rounded-full p-1 mr-5"></span>Recipient of Prestasi Talenta Scholarship, a fully funded scholarship by the Ministry of Education and Culture</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div id="experience">
                <div className="flex items-center">
                    <div className="bg-white w-28 h-1"></div>
                    <div className="w-16 h-16 bg-white rounded-full p-3">
                        <div className="relative w-full h-full rounded-full">
                            <Image src="/icons/work.png" alt="" fill></Image>
                        </div>
                    </div>
                </div>
                <div className="flex mb-8" id="kpmg">
                    <div className="bg-white w-1 -mt-8"></div>
                    <div className="w-full pl-8 mt-6 flex flex-col gap-3">
                        <p className="text-4xl font-medium">Software Engineer <span className="text-primary">&#40;Front-end&#41;</span> Intern @ KPMG Singapore</p>
                        <p className="text-2xl">December 2022 - January 2025 &#40;2 months&#41;</p>
                        <ul className="flex flex-col text-xl gap-2">
                            <li className="flex items-center"><span className="inline-block bg-primary rounded-full p-1 mr-5"></span>Tools: Next.JS, TypeScript, Material-UI, react-query, Styled Components, Azure DevOps</li>
                            <li className="flex items-center "><span className="inline-block bg-primary rounded-full p-1 mr-5"></span>Developed and migrated an ethics-line web application for KPMG clients to a new seamless React user-interface built with Next.JS</li>
                            <li className="flex items-center "><span className="inline-block bg-primary rounded-full p-1 mr-5"></span>Performed a state management using react-query and built a reusable real-time dashboard analytics, tables, chat box, and client-admin components with Material-UI and Styled Components</li>
                            <li className="flex items-center "><span className="inline-block bg-primary rounded-full p-1 mr-5"></span>Improved the system latency and accessibility of the application</li>
                        </ul>
                    </div>
                </div>
                <div className="flex" id="atmri">
                    <div className="bg-white w-1 -mt-8"></div>
                    <div className="w-full pl-8 mt-6 flex flex-col gap-3">
                        <p className="text-4xl font-medium">Summer Research Intern @ ATMRI &#40;Air Traffic Management Research Institute&#41;</p>
                        <p className="text-2xl">June 2023 - July 2023 &#40;2 months&#41;</p>
                        <ul className="flex flex-col text-xl gap-2">
                            <li className="flex items-center"><span className="inline-block bg-primary rounded-full p-1 mr-5"></span>Tools: XML, Python, ATS Scripting, Embedded System</li>
                            <li className="flex items-center "><span className="inline-block bg-primary rounded-full p-1 mr-5"></span>Developed and migrated an ethics-line web application for KPMG clients to a new seamless React user-interface built with Next.JS</li>
                            <li className="flex items-center "><span className="inline-block bg-primary rounded-full p-1 mr-5"></span>Performed a state management using react-query and built a reusable real-time dashboard analytics, tables, chat box, and client-admin components with Material-UI and Styled Components</li>
                            <li className="flex items-center "><span className="inline-block bg-primary rounded-full p-1 mr-5"></span>Improved the system latency and accessibility of the application</li>
                        </ul>
                    </div>
                </div>
            </div>


            
            
            
            
        </section>
     );
}
 
export default Experience;