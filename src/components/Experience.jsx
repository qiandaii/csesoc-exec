import { Stars } from "./Pattern3";

export function ExperienceSection() {

  return (
    <div className="h-full gap-2 flex-col full w-full flex">

      <p className="text-lg font-bold text-[#5e4b3b]">Experience</p>
      <div className="text-[0.70rem] md:text-[0.45rem] lg:text-[0.80rem] pb-2 flex flex-col gap-2">
        <p>
          As part of my role as an Outreach Director, I manage the Outreach portfolio budget, separate to the rest of CSESoc. 
          I work closely with the school to allocate expenses towards a variety of inclusive events, and handle reimbursement claims throughout the year.
        </p>

        <p>
          Other responsibilities I held in this role include communicating online and in-person with other societies and external companies to organise 
          both small and large scale events, the most memorable including our beginners Sign Language Workshop last year, partnering with Sweeney Interpreting, ADASoc and APRS, 
          and our annual Wheelchair Basketball Tournament hosted alongside BITSA and Wheelchair Sports Australia.
        </p>

        <p>
          I also had the lucky opportunity to host both our 2024 Tiktok x Postgraduate Drinks with Academics Night and 2025 International Women's Day Networking Night, meeting
          and posing questions to industry professionals and academics, sharing aspirations for newer initiatives and building connections.
        </p>
      </div>


      <div className="flex lg:flex-row md:flex-row flex-col">
        <div className="flex gap-2 justify-center">
          <div className="w-35 md:w-25 lg:w-55 flex flex-col gap-2">
            <img src="postgradDrinks.jpg" className="h-20 w-35 md:h-15 md:w-25 lg:h-30 lg:w-55 object-cover boo" alt="Postgraduate Drinks with Academics - Panel"></img>
            <p className="text-[0.5rem] md:text-[0.4rem] lg:text-[0.6rem] text-center">Postgraduate Drinks with Academics - Panel</p>
          </div>

          <div className="w-35 md:w-25 lg:w-55 flex flex-col gap-2">
          <img src="iwd.JPG" className="h-20 w-35 md:h-15 md:w-25 lg:h-30 lg:w-55 object-cover boo" alt="International Women's Day - Hosting Atlassian, IMC, Quantium, Trade Desk, Domain, etc."></img>
          <p className="text-[0.5rem] md:text-[0.4rem] lg:text-[0.6rem] text-center">International Women's Day - Hosting Atlassian, IMC, Quantium, Trade Desk, Domain, etc.</p>
          </div>
        </div>

        <div className="text-xs lg:text-sm md:text-[0.6rem] pl-6">
          <p className="font-bold text-[#5e4b3b] mb-2">Roles I've taken on</p>
          ⋆ CSESoc Outreach Subcom <span className="pl-3 pb-2 text-xs">2024</span>
          <br></br>
          ⋆ CSESoc Outreach Director <span className="pl-3 pb-2 text-xs">2025</span>
          <br></br>
          ⋆ CSESoc Peer Mentor <span className="pl-3 pb-2 text-xs">2025</span>
        </div>
      </div> 
    </div>
  )
}
