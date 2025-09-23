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
          <button className={`py-1 w-30 text-[0.7rem] lg:text-[1rem] lg:py-2 lg:w-50 rounded-t-md glass-tab ${setColor("subcom")}`} onClick={() => setArticleType("subcom")}>Subcom Experience</button>
          <button className={`py-1 w-30 text-[0.7rem] lg:text-[1rem] lg:py-2 lg:w-50 rounded-t-md glass-tab ${setColor("director")}`} onClick={() => setArticleType("director")}>Director Experience</button>
          <button className={`py-1 w-18 text-[0.7rem] lg:text-[1rem] lg:py-2 lg:w-30 rounded-t-md glass-tab ${setColor("events")}`} onClick={() => setArticleType("events")}>Events</button>
        </div>

        <article className="p-2 h-full w-full">
          <div className="h-[45%]">
            {articleType === "subcom" && (
              <>
                <div className="text-[0.6rem] md:text-[0.45rem] lg:text-[0.85rem] h-[97.5%] flex flex-col gap-2">
                  <p>
                    In my first year, I was exposed to the average university experience; going to tutorials and labs alone (ó﹏ò｡), then heading back home. It was underwhelming, 
                    but luckily I found CSESoc.
                  </p>
                  
                  <p>
                    Through my experience as an Outreach subcommittee member, I've opened up socially a Lot more and found lab partners, mentors, and most of all, friends.
                    Not just within the internal team, but in the events that we've pushed out, meeting the wider CSESoc community to understand the variety of perspectives and voices that Outreach caters to.
                  </p>
                  
                  <p>
                    Outreach's goal is to help all students find their sense of belonging; and it was then I realised I wanted to ensure that everyone got to find and experience what I have, and continue to do so as a bigger role in CSE.
                  </p>
                </div>

                <p className="lg:pt-6 text-[0.65rem] md:text-[0.5rem] lg:text-[0.85rem] font-bold text-[#57a8a3] pb-2">You may have walked by or joined in on some events that I've helped run in 2024...</p>

                <div className="flex lg:flex-row md:flex-row flex-col gap-4 w-full justify-center">
                  <div className="flex gap-4 justify-center">
                    <div className="w-35 md:w-20 lg:w-38 flex flex-col gap-2">
                      <img src="pride.JPG" className="lg:h-26 lg:w-38 md:h-10 md:w-20 h-22 w-35 object-cover event" alt="Pride Creation Station - Painting Canvas and Totes"></img>
                      <p className="text-[0.6rem] md:text-[0.4rem] lg:text-[0.65rem] text-center">Pride Creation Station - Painting Canvas and Totes</p>
                    </div>
                    <div className="w-35 md:w-20 lg:w-38 flex flex-col gap-2">
                      <img src="learnToSignBanner.jpg" className="lg:h-26 lg:w-38 md:h-10 md:w-20 h-22 w-35 object-cover event" alt="Learn to Sign - Sign Language Workshop!"></img>
                      <p className="text-[0.6rem] md:text-[0.4rem] lg:text-[0.65rem] text-center">Learn to Sign - Sign Language Workshop!</p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <div div className="w-35 md:w-20 lg:w-38 flex flex-col gap-2">
                      <img src="prideSnacks.JPG" className="lg:h-26 lg:w-38 md:h-10 md:w-20 h-22 w-35 object-cover event" alt="Pride Creation Station - Rainbow Snack Platter"></img>
                      <p className="text-[0.6rem] md:text-[0.4rem] lg:text-[0.65rem] text-center">Pride Creation Station - Rainbow Snack Platter</p>
                    </div>
                    <div className="w-35 md:w-20 lg:w-38 flex flex-col gap-2">
                      <img src="humansOfCse.png" className="lg:h-26 lg:w-38 md:h-10 md:w-20 h-22 w-35 object-cover event" alt="Humans of CSE - July Edition"></img>
                      <p className="text-[0.6rem] md:text-[0.4rem] lg:text-[0.65rem] text-center">Humans of CSE - July 2024 Edition</p>
                    </div>
                  </div>
                </div>
              </>

            )}
            {articleType === "director" && (
              <>
                <p className="text-[0.6rem] md:text-[0.38rem] lg:text-[0.75rem] h-[97.5%] flex flex-col gap-2">
                  
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

                  <p>I would love to continue overseeing these initiatives and more, playing a bigger role in the society's flourish, as a part of the executive team in 2026!</p>
                </p>

                <p className="lg:pt-6 text-[0.65rem] md:text-[0.5rem] lg:text-[0.85rem] font-bold text-[#57a8a3] pb-2">You may have walked by or joined in on some events that I've helped run in 2025...</p>  

                <div className="flex flex-col md:flex-row lg:flex-row gap-4 w-full justify-center items-center">

                  <div className="flex gap-4">
                    <div className="w-35 md:w-20 lg:w-38 flex flex-col gap-2">
                      <img src="wheelchair.JPG" className="lg:h-26 lg:w-38 md:h-10 md:w-20 h-22 w-35 object-cover event" alt="Wheelchair Basketball - Midgame"></img>
                      <p className="text-[0.6rem] md:text-[0.4rem] lg:text-[0.65rem] text-center">Wheelchair Basketball - Midgame</p>
                    </div>

                    <div className="w-35 md:w-20 lg:w-38 flex flex-col gap-2">
                      <img src="multicultural.jpg" className="lg:h-26 lg:w-38 md:h-10 md:w-20 h-22 w-35 object-cover event" alt="Multicultural BBQ - Food, Dessert and Drinks!"></img>
                      <p className="text-[0.6rem] md:text-[0.4rem] lg:text-[0.65rem] text-center">Multicultural BBQ - Food, Dessert and Drinks!</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                  <div className="w-35 md:w-20 lg:w-38 flex flex-col gap-2">
                    <img src="photobooth.JPG" className="lg:h-26 lg:w-38 md:h-10 md:w-20 h-22 w-35 object-cover event" alt="Lights, Camera, Compile! - Outreach Photoshoot"></img>
                    <p className="text-[0.6rem] md:text-[0.4rem] lg:text-[0.65rem] text-center">Lights, Camera, Compile! - Outreach Photoshoot</p>
                  </div>

                  <div className="w-35 md:w-20 lg:w-38 flex flex-col gap-2">
                    <img src="flowers.JPG" className="lg:h-26 lg:w-38 md:h-10 md:w-20 h-22 w-35 object-cover event" alt="Flower Exchange - Dethorning before handing out"></img>
                    <p className="text-[0.6rem] md:text-[0.4rem] lg:text-[0.65rem] text-center">Flower Exchange - Dethorning before handing out</p>
                  </div>
                </div>

              </div>
              </>
            )}


            {articleType === "events" && (
              <>
                <p className="text-[0.5rem] lg:text-sm w-full">Here are some of my favourite photos from Outreach events!</p>

                <div className="flex flex-col gap-2 md:gap-2 lg:gap-4 w-full p-2 justify-center items-center">
                  <div className="flex gap-2 md:gap-2 lg:gap-4">
                    <div className="flex-1 flex flex-col gap-1 items-center">
                      <img className="w-23 h-23 md:w-25 md:h-18 lg:w-45 lg:h-30 object-cover event" src="newPride.JPG"></img>
                      <p className="text-[0.4rem] lg:text-[0.6rem] md:text-[0.4rem] text-center">Working together as a team to find the optimal solution in making fairy bread for Pride Creation Station 2024</p>
                    </div>
                    
                    <div className="flex-1 flex flex-col gap-1 items-center">
                      <img className="w-23 h-23 md:w-25 md:h-18 lg:w-45 lg:h-30 object-cover event" src="saikiCupcake.jpg"></img>
                      <p className="text-[0.4rem] lg:text-[0.6rem] md:text-[0.4rem] text-center">Me, super proud of my Saiki K cupcake at Pride Papa's Bakeria (☆☐☆) !!</p>
                    </div>

                    <div className="flex-1 flex flex-col gap-1 items-center">
                      <img className="w-23 h-23 md:w-25 md:h-18 lg:w-45 lg:h-30 object-cover event" src="rainbowSubcom.jpg"></img>
                      <p className="text-[0.4rem] lg:text-[0.6rem] md:text-[0.4rem] text-center">Outreach 2025 under a Double Rainbow (super faint) </p>
                    </div>
                  </div>

                  <div className="flex gap-2 md:gap-2 lg:gap-4">
                    <div className="flex-1 flex flex-col gap-1 items-center">
                      <img className="w-23 h-23 md:w-25 md:h-18 lg:w-45 lg:h-30 object-cover event" src="morningFlowers.JPG"></img>
                      <p className="text-[0.4rem] lg:text-[0.6rem] md:text-[0.4rem] text-center">Subbies at Flemington Flower Markets picking up bouquets for Flower Exchange</p>
                    </div>

                    <div className="flex-1 flex flex-col gap-1 items-center">
                      <img className="w-23 h-23 md:w-25 md:h-18 lg:w-45 lg:h-30 object-cover event" src="postgradWatch.png"></img>
                      <p className="text-[0.4rem] lg:text-[0.6rem] md:text-[0.4rem] text-center">Listening to postgrad lecturers' experiences at Postgrad Drinks</p>
                    </div>

                    <div className="flex-1 flex flex-col gap-1 items-center">
                      <img className="w-23 h-23 md:w-25 md:h-18 lg:w-45 lg:h-30 object-cover event" src="multi.png"></img>
                      <p className="text-[0.4rem] lg:text-[0.6rem] md:text-[0.4rem] text-center">Hard at work under the rain for Multicultural BBQ 2025 !</p>
                    </div>

                  </div>
                </div>

              </>
            )}

          </div>
        </article>
      </div>
    </>
  )
}