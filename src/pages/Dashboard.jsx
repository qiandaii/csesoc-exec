
import { useEffect, useState } from "react"
import { AboutMeSection } from "../components/AboutMe"
import { TimeAtCSESection } from "../components/TimeAtCSE"
import { ExperienceSection } from "../components/Experience"
import { VisionsAndGoalsSection } from "../components/VisionsAndGoals"
import { Pattern } from "../components/Pattern"
import { BannerPattern } from "../components/Pattern2"
import { ThankYou } from "../components/ThankYou"


export function Dashboard() {

  const [ section, setSection ] = useState(1)
  const [ starHover, setStarHover ] = useState(false)

  function navEndPage() {
    if (section === 5) {
      setSection(1)
    } else {
      setSection(5)
    }
  }

  useEffect(() => {
    if (section === 5 && starHover === false) {
      setStarHover(true)
    } else if (section !== 5 && starHover === true ) {
      setStarHover(false)
    }
  })

  return (
    <>
    <Pattern></Pattern>
    <div className="w-screen h-screen flex items-center justify-center z-0">
      <div className="h-280 w-150 md:h-150 md:w-160 lg:h-200 lg:w-250 flex border border-black rounded-md flex flex-col glass">
        <div className="w-full lg:h-[35%] h-80 flex flex-col-reverse relative">
          <div className="bg-[#5e4b3b] md:h-[65%] lg:h-[65%] h-68 absolute top-0 lg:left-0 w-full z-0 flex justify-end items-center">
            <BannerPattern></BannerPattern>
          </div>
          <div className="user relative mt-100 m-2 md:m-6 lg:m-8 flex flex-between items-end gap-2 md:gap-6 lg:gap-10 z-10">
            <div className="flex gap-4 md:gap-6 lg:gap-10 items-end">
              <img src="profilePic.png" className="w-16 h-16 md:w-30 md:h-30 lg:w-40 lg:h-40 bg-[#97ccc9] rounded-md border border-4 md:border-6 lg:border-8 border-white boo"></img>
              <div className="">
                <p className="text-lg md:text-2xl lg:text-4xl  hover:scale-105">Qiandai Huang</p>
                <p className="text-[#5e4b3b] text-[0.4rem] md:text-[0.5rem] lg:text-[0.8rem]">vote me #1 for copres & treasurer !</p>
              </div>
            </div>
            <div className="flex justify-end ml-auto gap-2">
              <button className="hover:scale-[1.01] event text-[#4fb0a8] border border-[#4fb0a8] rounded-sm text-[0.7rem] lg:text-[1rem] px-2 py-1 ml-auto lg:mb-4" >
                <a href="https://www.instagram.com/qiandaii/">+ Connect</a> 
              </button>
              <button className="hover:scale-105 event text-[#4fb0a8] border border-[#4fb0a8] rounded-sm text-[0.7rem] lg:text-[1rem] px-2 py-1 ml-auto lg:mb-4" 
                onMouseEnter={() => setStarHover(true)}
                onMouseLeave={() => setStarHover(false)}
                onClick={() => navEndPage()}>
                { starHover ? "★" : "☆" }
              </button>
            </div>
          </div>
        </div>

        <hr className="mx-5 mt-2 text-[#4fb0a8] md:mb-0 mb-6 lg:mb-0"></hr>

        
        <div className="w-full lg:h-[65%] h-full flex flex-col md:flex-row lg:flex-row items-center gap-2">
          <div className="component rounded-sm w-full mx-2 h-[10%] md:w-[30%] md:h-[90%] lg:w-[27%] lg:h-[90%] lg:ml-5 flex md:md:flex-col lg:flex-col items-center py-4">
            <button className="text-sm lg:text-[1rem] w-[90%] h-10 rounded-sm glass glass-button m-1" onClick={() => setSection(1)}>About Me</button>
            <button className="text-sm lg:text-[1rem] w-[90%] h-10 rounded-sm glass glass-button m-1" onClick={() => setSection(2)}>My Time in CSESoc</button>
            <button className="text-sm lg:text-[1rem] w-[90%] h-10 rounded-sm glass glass-button m-1" onClick={() => setSection(3)}>Experience</button>
            <button className="text-sm lg:text-[1rem] w-[90%] h-10 rounded-sm glass glass-button m-1" onClick={() => setSection(4)}>Visions & Goals</button>
          </div>

          <div className="component rounded-sm md:w-[65%] lg:w-full md:h-[90%] lg:h-[90%] h-full lg:mr-5 p-5">
            { section === 1 && (<AboutMeSection></AboutMeSection>)}
            { section === 2 && (<TimeAtCSESection></TimeAtCSESection>)}
            { section === 3 && <ExperienceSection></ExperienceSection>}
            { section === 4 && <VisionsAndGoalsSection></VisionsAndGoalsSection>}
            { section === 5 && <ThankYou></ThankYou>}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}