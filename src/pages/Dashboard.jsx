
import { useState } from "react"
import { AboutMeSection } from "../components/AboutMe"
import { TimeAtCSESection } from "../components/TimeAtCSE"
import { ExperienceSection } from "../components/Experience"
import { VisionsAndGoalsSection } from "../components/VisionsAndGoals"
import { Pattern } from "../components/Pattern"
import { BannerPattern } from "../components/Pattern2"


export function Dashboard() {

  const [ section, setSection ] = useState(1)

  return (
    <>
    <Pattern></Pattern>
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-150 w-150 md:h-150 md:w-160 lg:h-200 lg:w-250 flex border border-black rounded-md flex flex-col glass">
        <div className="w-full h-[35%] flex flex-col-reverse relative">
          <div className="bg-[#5e4b3b] h-[65%] absolute top-0 left-0 w-full z-0 flex justify-end">
            <BannerPattern></BannerPattern>
          </div>
          <div className="user m-2 md:m-6 lg:m-8 flex items-end gap-2 md:gap-6 lg:gap-10 z-10">
            <img src="profilePic.png" className="w-16 h-16 md:w-30 md:h-30 lg:w-40 lg:h-40 bg-[#97ccc9] rounded-md border border-4 md:border-6 lg:border-8 border-white boo"></img>
            <p className="text-xl md:text-2xl lg:text-4xl mb-3">Qiandai Huang</p>

          </div>
        </div>

        <hr className="mx-5 text-[#4fb0a8]"></hr>

        
        <div className="w-full h-[65%] flex items-center gap-2">
          <div className="component rounded-sm w-[27%] h-[90%] ml-5 flex flex-col items-center py-4">
            <button className="text w-[90%] h-10 rounded-sm glass glass-button m-1" onClick={() => setSection(1)}>About Me</button>
            <button className="text w-[90%] h-10 rounded-sm glass glass-button m-1" onClick={() => setSection(2)}>My Time in CSESoc</button>
            <button className="text w-[90%] h-10 rounded-sm glass glass-button m-1" onClick={() => setSection(3)}>Experience</button>
            <button className="text w-[90%] h-10 rounded-sm glass glass-button m-1" onClick={() => setSection(4)}>Visions & Goals</button>
          </div>

          <div className="component rounded-sm w-full h-[90%] mr-5 p-5">
            { section === 1 && (<AboutMeSection></AboutMeSection>)}
            { section === 2 && (<TimeAtCSESection></TimeAtCSESection>)}
            { section === 3 && <ExperienceSection></ExperienceSection>}
            { section === 4 && <VisionsAndGoalsSection></VisionsAndGoalsSection>}
          </div>
        </div>
      </div>
    </div>
    </>
  )
}