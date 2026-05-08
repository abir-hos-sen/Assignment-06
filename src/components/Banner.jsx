import rocket from '../assets/rocket.png'
import playIcon from '../assets/Play.png'
import bannerImg from '../assets/banner.png'
import groupIcon from '../assets/group.png'

const Banner = () => {
  const badgeIcon = groupIcon; 

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Badge with Icon */}
          <div className="flex items-center justify-center md:justify-start mb-6">
            <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-[11px] font-bold px-3 py-1.5 rounded-full tracking-wide shadow-sm border border-violet-200">
              <img 
                src={badgeIcon} 
                alt="badge-icon" 
                className="w-3 h-3 object-contain"
              />
              New: AI-Powered Tools Available
            </div>
          </div>
          
          {/* Heading */}
          <h1 className="text-[48px] md:text-[64px] font-extrabold text-[#101727] leading-[1.1] md:leading-[72px] mb-6 tracking-tight max-w-[580px] mx-auto md:mx-0">
            Supercharge Your Digital Workflow
          </h1>
          
          {/* Paragraph */}
          <p className="text-gray-500 text-[16px] leading-[1.6] mb-10 max-w-[640px] mx-auto md:mx-0">
            Access premium AI tools, design assets, templates, and productivity <br />
            software—all in one place. Start creating faster today. <br />
            Explore Products
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {/* Explore Products Button */}
            <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold text-[14px] px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-2">
              Explore Products <span className="text-lg">→</span>
            </button>
            
            {/* Watch Demo Button with Icon */}
            <button className="border-2 border-gray-200 text-gray-700 hover:border-violet-600 hover:text-violet-600 font-semibold text-[14px] px-8 py-3.5 rounded-full transition-all flex items-center gap-2 bg-white">
              <img 
                src={playIcon} 
                alt="play icon" 
                className="w-4 h-4"
              />
              Watch Demo
            </button> 
          </div>
        </div>
         
        {/* Image */}
        <div className="flex-1 flex justify-center">
          <img 
            src={bannerImg} 
            alt="Hero Banner" 
            className="rounded-2xl object-cover shadow-lg"
            style={{ width: '480px', height: '560px' }}
          />
        </div>
      </div>
    </section>
  )
}

export default Banner