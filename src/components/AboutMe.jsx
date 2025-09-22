

export function AboutMeSection() {

  return (
    <>
      <img></img>
      <p className="bg-[#97ccc9] font-bold text-white px-1">Recent Messages</p>

      <div className="message flex border-b border-dotted border-gray-400">
      <img src="profilePic.png" className="w-10 h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 mt-2 bg-[#97ccc9] rounded-md boo"></img>
        <p className="w-[85%] p-2">hi! my name is qiandai .𖥔 ݁ ! i am a second year maths and computer science student, and also currently an Outreach Director for CSESoc! some things to know about me..</p>
      </div>

      <div className="message flex border-b border-dotted border-gray-400 py-2">
        <div className="w-10 h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 bg-[#97ccc9] rounded-md boo"></div>
        <div className="flex flex-col p-2">
          <p className="pb-2">Qiandai Huang &#9829; these photos</p>
          <div className="flex gap-2">
            <img src="outreach25beach.JPG" alt="outreach 25 at the beach!" className="w-20 h-15 boo border border-2 border-white"></img>
            <img src="flowerEvent.JPG" alt="buckets of flowers" className="w-20 h-15 boo border border-2 border-white"></img>
            <img src="outreach24.jpg" alt="outreach 24 at the beach!" className="w-20 h-15 boo border border-2 border-white"></img>
          </div>
        </div>
      </div>


      <div className="message flex border-b border-dotted border-gray-400">
      <img src="profilePic.png" className="w-10 h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 mt-2 bg-[#97ccc9] rounded-md boo"></img>
        <p className="w-[85%] p-2">i love consuming media !! it is my favourite way to pass time, whether it's reading, watching anime, movies, listening to music, making playlists ♫</p>
      </div>

      <div className="message flex border-b border-dotted border-gray-400">
      <div className="w-10 h-10 md:w-10 md:h-10 lg:w-10 lg:h-10 mt-2 bg-[#97ccc9] rounded-md boo"></div>
        <p className="w-[85%] p-2">i spend a lot of time playing open world games, where my most hours are on minecraft, botw, and pokemon go ehe. outside of that, i also like playing Some sports like badminton and tennis !</p>
      </div>

      <p className="text-right text-lg p-2 text-[#60b4ad]">.. and I'm running for <b>Co-President</b> and <b>Treasurer</b> for CSESoc 2026!</p>
    </>
  )
}