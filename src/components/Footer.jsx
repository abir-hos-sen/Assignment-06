import facebookIcon from '../assets/Facebook.png'
import instagramIcon from '../assets/Instagram.png'
import twitterIcon from '../assets/twte.png'

const Footer = () => {
  return (
    <>
      {/* CTA Banner */}
      <section className="bg-violet-600 pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-[42px] font-black text-white mb-6 leading-tight">
            Ready To Transform Your Workflow?
          </h2>
          <p className="text-violet-100 text-[16px] leading-relaxed mb-10 max-w-2xl mx-auto">
            Join thousands of professionals who are already using Digitools to work smarter. <br />
            Start your free trial today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button className="bg-white text-violet-600 hover:bg-violet-50 font-bold px-8 py-3.5 rounded-full text-sm transition-all shadow-lg">
              Explore Products
            </button>
            <button className="border-2 border-violet-400 text-white hover:bg-violet-700 font-bold px-8 py-3.5 rounded-full text-sm transition-all">
              View Pricing
            </button>
          </div>
          <p className="text-violet-200 text-xs font-medium tracking-wide">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b1221] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-1.5">
              <span className="text-[38px] font-black text-white tracking-tight leading-tight inline-block">
                DigiTools
              </span>
              <p className="text-gray-400 text-sm mt-5 leading-relaxed max-w-[240px]">
                Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-white text-[16px] font-bold mb-6">Product</h4>
              <div className="flex flex-col gap-4 text-sm text-gray-500">
                {['Features', 'Pricing', 'Templates', 'Integrations'].map((l) => (
                  <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white text-[16px] font-bold mb-6">Company</h4>
              <div className="flex flex-col gap-4 text-sm text-gray-500">
                {['About', 'Blog', 'Careers', 'Press'].map((l) => (
                  <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white text-[16px] font-bold mb-6">Resources</h4>
              <div className="flex flex-col gap-4 text-sm text-gray-500">
                {['Documentation', 'Help Center', 'Community', 'Contact'].map((l) => (
                  <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white text-[16px] font-bold mb-6">Social Links</h4>
              <div className="flex gap-4">
                <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-violet-400 hover:scale-110 transition-all shadow-md group">
                  <img src={instagramIcon} alt="instagram" className="w-4.5 h-4.5 object-contain" />
                </a>
                <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-violet-400 hover:scale-110 transition-all shadow-md group">
                  <img src={facebookIcon} alt="facebook" className="w-4.5 h-4.5 object-contain" />
                </a>
                <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-violet-400 hover:scale-110 transition-all shadow-md group">
                  <img src={twitterIcon} alt="twitter" className="w-4.5 h-4.5 object-contain" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800/50 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <span>© 2026 Digitools. All rights reserved.</span>
            <div className="flex gap-8">
              {['Privacy Policy', 'Terms of Service', 'Cookies'].map((l) => (
                <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer