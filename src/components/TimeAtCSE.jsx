import { useState } from "react"


export function TimeAtCSESection() {
  const [ articleType, setArticleType ] = useState("subcom")

  function setColor(current) {
    if (articleType === current) {
      return "bg-[#d2f2e8]"
    }
    return "bg-[#e8e5e4]"
  }


  return (
    <>
      <div className="h-full">

        <div className="flex gap-1 border-b border-[#e8e5e4]">
          <button className={`py-2 w-50 rounded-t-md glass-tab ${setColor("subcom")}`} onClick={() => setArticleType("subcom")}>Subcom Experience</button>
          <button className={`py-2 w-50 rounded-t-md glass-tab ${setColor("director")}`} onClick={() => setArticleType("director")}>Director Experience</button>
        </div>

        <article className="p-2 h-full w-full">
          <div className="h-[45%]">
            {articleType === "subcom" && (
              <>
                <div className="text-[0.85em] h-[97.5%] flex flex-col gap-2">
                  <p>
                    In my first year, I was exposed to the average university experience; going to tutorials and labs alone (ó﹏ò｡), then heading back home. It was underwhelming, 
                    but luckily I found CSESoc, joining the Outreach portfolio ! 
                  </p>
                  
                  <p>
                    Through my experience as an Outreach subcommittee member, I've opened up socially a Lot more and found lab partners, mentors, and most of all, friends.
                    Not just within the internal team, but in the events that we've pushed out, meeting the wider CSESoc community to understand the variety of perspectives and voices that Outreach caters to.
                  </p>
                  
                  <p>
                    Outreach's goal is to help all students find their sense of belonging; and it was then I realised I wanted to ensure that everyone got to find and experience what I have, and continue to do so as a director.
                  </p>
                </div>

                <p className="pt-6 text-[0.90em] pb-2">You may have walked by or joined in on some events that I've helped run in 2024...</p>

                <div className="flex gap-4 w-full justify-center">
                  <div className="w-40 flex flex-col gap-2">
                    <img src="pride.JPG" className="h-26 w-40 object-cover event" alt="Pride Creation Station - Painting Canvas and Totes"></img>
                    <p className="text-[0.6rem] text-center">Pride Creation Station - Painting Canvas and Totes</p>
                  </div>
                  <div className="w-40 flex flex-col gap-2">
                    <img src="learnToSignBanner.jpg" className="h-26 w-40 object-cover event" alt="Learn to Sign - Sign Language Workshop!"></img>
                    <p className="text-[0.6rem] text-center">Learn to Sign - Sign Language Workshop!</p>
                  </div>
                  <div div className="w-40 flex flex-col gap-2">
                    <img src="prideSnacks.JPG" className="h-26 w-40 object-cover event" alt="Pride Creation Station - Rainbow Snack Platter"></img>
                    <p className="text-[0.6rem] text-center">Pride Creation Station - Rainbow Snack Platter</p>
                  </div>
                  <div className="w-40 flex flex-col gap-2">
                    <img src="humansOfCse.png" className="h-26 w-40 object-cover event" alt="Humans of CSE - July Edition"></img>
                    <p className="text-[0.6rem] text-center">Humans of CSE - July 2024 Edition</p>
                  </div>
                </div>
              </>

            )}
            {articleType === "director" && (
              <>
                <p className="text-[0.83em] h-[97.5%] flex flex-col gap-2">
                  
                  <p>
                    Now, as an Outreach director, my experience has been even more fulfilling, leading my own subcommittee with my codirectors, and overlooking their interesting, genius ideas to foster 
                    an inclusive environment !! 
                  </p>

                  <p>
                  We've planned over 10 events this year, opening networking opportunities to women in technology and postgraduate students, celebrating pride and multiculturalism, 
                  and also focusing on mental wellness and the environment.
                  </p>

                  <p>
                    This doesn't include our ongoing initiatives; our CSESoc Logo changes on all social media platforms, a collaboration 
                    with our talented Creative team to highlight awareness days and cultural festivities, and our monthly Humans of CSE articles, 
                    where we interview and spotlight student experiences from different groups in the CSE community!
                  </p>
                </p>

                <p className="pt-6 text-[0.90em] pb-2">You may have walked by or joined in on some events that I've helped run in 2025...</p>  

                <div className="flex gap-4 w-full justify-center">
                <div className="w-40 flex flex-col gap-2">
                  <img src="wheelchair.JPG" className="h-26 w-40 object-cover event" alt="Wheelchair Basketball - Midgame"></img>
                  <p className="text-[0.6rem] text-center">Wheelchair Basketball - Midgame</p>
                </div>

                <div className="w-40 flex flex-col gap-2">
                  <img src="multicultural.jpg" className="h-26 w-40 object-cover event" alt="Multicultural BBQ - Food, Dessert and Drinks!"></img>
                  <p className="text-[0.6rem] text-center">Multicultural BBQ - Food, Dessert and Drinks!</p>
                </div>

                <div className="w-40 flex flex-col gap-2">
                  <img src="photobooth.JPG" className="h-26 w-40 object-cover event" alt="Lights, Camera, Compile! - Outreach Photoshoot"></img>
                  <p className="text-[0.6rem] text-center">Lights, Camera, Compile! - Outreach Photoshoot</p>
                </div>

                <div className="w-40 flex flex-col gap-2">
                  <img src="flowers.JPG" className="h-26 w-40 object-cover event" alt="Flower Exchange - Dethorning before handing out"></img>
                  <p className="text-[0.6rem] text-center">Flower Exchange - Dethorning before handing out</p>
                </div>

              </div>
              </>
            )}
          </div>





          <div className="flex w-full justify-center">


          </div>
        </article>
      </div>
    </>
  )
}