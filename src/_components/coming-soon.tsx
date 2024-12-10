import Logo from "../assets/images/logo-white.png"
import BgImg from "../assets/images/FB_IMG_1733590357493.jpg"
import { motion } from "motion/react"

const ComingSoon = ()=> {
    return (
        <>
            <img src={BgImg} className="w-screen h-screen object-cover" />
            <div className="h-screen w-screen bg-[#111]/90 backdrop-blur-sm grid grid-rows-[1fr_.5fr_20px_50px_1fr] place-content-center text-white fixed top-0 left-0 w-full">
            
                <div className="row-start-2 mx-auto">
                    {/* <img src={Logo} alt="aristotle-media logo" className="w-[10%]" /> */}
                    <motion.h1 initial={{opacity: 0, translateY: "-10%", }} animate={{opacity: 1, translateY: 0, transition: { delay: .1 }}} className="text-5xl lg:text-8xl"><span className="font-[900]">Aristotle</span> Media</motion.h1>
                    <motion.div initial={{width: 0}} animate={{width: "70%", transition: { delay: .3 }}} className="mt-1 bg-yellow-200 h-[2px]" />
                    <motion.p initial={{opacity: 0, translateY: "100%", }} animate={{opacity: 1, translateY: 0, transition: { delay: .5 }}} className=" mt-2 text-2xl text-center letter-spacing">Coming Soon</motion.p>
                </div>

                <div className="row-start-4 w-[56%] mx-auto relative">
                    {/* <motion.div className="w-[110%] h-[110%] bg-black/70 rounded-lg absolute left-1/2 -translate-x-1/2 top-0" /> */}
                    <q className="text-sm italic text-center">We are yesterday. We are now. We are the future. Aristotle Media is the goto place for your media work</q>
                </div>
 
                <motion.div className="row-start-5 text-right flex flex-col items-center justify-center" initial={{opacity: 0, translateY: "40%", }} animate={{opacity: 1, translateY: 0, transition: { delay: .8 }}}>
                    <div className="relative w-fit">
                        <p className="text-3xl">Check out our video works <span>via our</span></p>
                        <motion.div initial={{opacity: 0, translateY: "100%", }} animate={{opacity: 1, translateY: 0, transition: { delay: 1 }}} className="absolute bg-yellow-300/60 h-[8px] w-[60%] bottom-[5%] left-0" />
                    </div>
                    <motion.a href="https://drive.google.com/12asdi424i23423i4files/videos" initial={{opacity: 0, translateY: "-40%", }} animate={{opacity: 1, translateY: 0, transition: { delay: 1.4 }}} className="mt-4 px-4 py-2 rounded-full border border-white cursor-pointer underline">Google Drive Link</motion.a>
                </motion.div>
            </div>
        </>
       
    )
}

export default ComingSoon;