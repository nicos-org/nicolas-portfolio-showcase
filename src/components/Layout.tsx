import { ReactNode, useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { ChevronUp } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConsoleMode, setIsConsoleMode] = useState(false);
  const [is90sMode, setIs90sMode] = useState(false);

  const menuOptions = isConsoleMode 
    ? ["Exit Console Mode", "Show me the source code", "I loved the 90's, take me there please"]
    : is90sMode
    ? ["Exit 90's Mode", "Show me the source code", "I am actually a software engineer - make the website for a technical public"]
    : ["I am actually a software engineer - make the website for a technical public", "Show me the source code", "I loved the 90's, take me there please"];

  const handleMenuOption = (option: string) => {
    if (option === "I am actually a software engineer - make the website for a technical public") {
      setIsConsoleMode(true);
    } else if (option === "Exit Console Mode") {
      setIsConsoleMode(false);
    } else if (option === "I loved the 90's, take me there please") {
      setIs90sMode(true);
    } else if (option === "Exit 90's Mode") {
      setIs90sMode(false);
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {is90sMode ? (
        <div className="min-h-screen" style={{
          backgroundImage: 'url("/wallpaper_clouds.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          fontFamily: 'MS Sans Serif, Arial, sans-serif'
        }}>
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ 
                color: '#000080', 
                textShadow: '2px 2px 0px #ffffff',
                fontFamily: 'MS Sans Serif, Arial, sans-serif'
              }}>
                nicolasloefflerperez.com Needs Your Help! Enter the{' '}
                <a 
                  href="https://nicolasloefflerperez.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                  style={{ color: '#0000FF' }}
                >
                  website-link and contact me!
                </a>
              </h1>
            </div>

            {/* Windows 95 Style Window */}
            <div className="bg-gray-300 border-2 border-gray-400 shadow-lg mb-8" style={{ 
              borderTopColor: '#ffffff', 
              borderLeftColor: '#ffffff',
              borderRightColor: '#808080',
              borderBottomColor: '#808080'
            }}>
              {/* Title Bar */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-2 py-1 flex justify-between items-center" style={{
                background: 'linear-gradient(to right, #000080, #0000FF)'
              }}>
                <span className="font-bold text-sm">Welcome to nicolasloefflerperez.com</span>
                <div className="flex space-x-1">
                  <div className="w-4 h-4 bg-gray-400 border border-gray-600 flex items-center justify-center text-xs">_</div>
                  <div className="w-4 h-4 bg-gray-400 border border-gray-600 flex items-center justify-center text-xs">□</div>
                  <div className="w-4 h-4 bg-gray-400 border border-gray-600 flex items-center justify-center text-xs">×</div>
                </div>
              </div>

              {/* Window Content */}
              <div className="p-4 bg-white">
                {/* 4x3 Icon Grid */}
                <div className="grid grid-cols-4 gap-4 mb-4">
                  {/* Row 1 */}
                  <div className="flex flex-col items-center text-center">
                    <img src="/icon_01_windows.png" alt="Windows" className="w-20 h-20 mb-2 object-contain" />
                    <span className="text-xs font-bold text-black">For New Users Only</span>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-2 bg-green-600"></div>
                    <span className="text-xs font-bold text-black">Internet TCP/IP Connectivity</span>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-2 bg-yellow-500"></div>
                    <span className="text-xs font-bold text-black">32-bit Hardware Drivers</span>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-2 bg-blue-500"></div>
                    <span className="text-xs font-bold text-black">32-bit Shareware</span>
                  </div>

                  {/* Row 2 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-2 bg-purple-600"></div>
                    <span className="text-xs font-bold text-black">Virtual Servers Incorporated</span>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-2 bg-red-600"></div>
                    <span className="text-xs font-bold text-black">Internet Hyper-Glossary</span>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-2 bg-orange-500"></div>
                    <span className="text-xs font-bold text-black">Shareware CD-ROM</span>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-2 bg-indigo-500"></div>
                    <span className="text-xs font-bold text-black">Search the Site</span>
                  </div>

                  {/* Row 3 */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-2 bg-blue-600"></div>
                    <span className="text-xs font-bold text-black">QuickTutors 95</span>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-2 bg-green-500"></div>
                    <span className="text-xs font-bold text-black">Advertise at Windows95.com</span>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-2 bg-teal-600"></div>
                    <span className="text-xs font-bold text-black">About Windows95.com</span>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-2 bg-pink-500"></div>
                    <span className="text-xs font-bold text-black">About the Author</span>
                  </div>
                </div>

                {/* Footer within window */}
                <div className="flex justify-between text-xs text-gray-600">
                  <span>©1996 Windows95.com</span>
                  <span>Webmaster Services by Nicolas Löffler Perez aka Nicolas Perez Gonzalez</span>
                </div>
              </div>
            </div>

            {/* Under Construction Text */}
            <div className="text-center mb-4">
              <p className="text-lg font-bold text-black mb-2" style={{ 
                fontFamily: 'MS Sans Serif, Arial, sans-serif',
                textShadow: '1px 1px 0px #ffffff'
              }}>
                This part of Nico's website is under construction
              </p>
              <img src="/under_construction.png" alt="Under Construction" className="mx-auto" />
            </div>

            {/* Purple-Green Banner */}
            <div className="bg-gradient-to-r from-purple-600 to-green-600 text-white p-4 mb-6 text-center">
              <div className="flex items-center justify-center space-x-4">
                <img src="/image_nico_amld.png" alt="Visual InterDev" className="h-12 w-auto" />
                <div>
                  <h2 className="text-xl font-bold mb-2">Develop dynamic websites</h2>
                  <p className="text-lg mb-1">CLICK HERE FOR A FREE DOWNLOAD</p>
                  <p className="text-sm">Microsoft® Visual InterDev</p>
                </div>
                <div className="bg-gray-600 px-3 py-1 text-xs">
                  Site Builder Network
                </div>
              </div>
            </div>

            {/* Advertising Text */}
            <div className="text-center mb-6">
              <p className="text-lg font-bold text-black">
                Find out how to get{' '}
                <a href="#" className="text-blue-600 hover:underline" style={{ color: '#0000FF' }}>
                  Free Advertising
                </a>{' '}
                on Windows95.com!
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center space-x-2 mb-8">
              {['Home', 'Advertise', 'Shareware', 'Search', 'E-mail'].map((button) => (
                <button
                  key={button}
                  className="px-4 py-2 bg-gray-300 border-2 border-gray-400 text-black font-bold text-sm hover:bg-gray-400"
                  style={{
                    borderTopColor: '#ffffff',
                    borderLeftColor: '#ffffff',
                    borderRightColor: '#808080',
                    borderBottomColor: '#808080'
                  }}
                >
                  {button}
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="text-center">
              <h1 className="text-2xl font-bold text-black mb-4">Welcome to Windows95.com™</h1>
              <h1 className="text-2xl font-bold text-black mb-4">Welcome to Windows95.com™</h1>
              <h1 className="text-2xl font-bold text-black">Welcome to Windows95.com™</h1>
            </div>
          </div>
        </div>
      ) : isConsoleMode ? (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
          <div className="w-full max-w-6xl h-[90vh] bg-black border border-gray-600 rounded-lg overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-300 text-sm font-mono">Terminal - Nicolas Portfolio</div>
              <div className="w-6"></div>
            </div>
            
            {/* Terminal Content */}
            <div className="h-full bg-black text-green-400 font-mono text-sm p-4 overflow-y-auto">
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-blue-400">user@portfolio:~$</span>
                  <span className="ml-2">whoami</span>
                </div>
                <div className="text-green-400">Nicolas Löffler-Perez</div>
                <div className="text-gray-500">Data Scientist, Founder, Researcher, and Problem Solver</div>
                <div className="h-4"></div>
                
                <div className="flex items-center">
                  <span className="text-blue-400">user@portfolio:~$</span>
                  <span className="ml-2">cat about.txt</span>
                </div>
                <div className="text-green-400">About Me</div>
                <div className="text-gray-300 ml-4">
                  I'm Nicolas Löffler-Perez, a Data Scientist at Swissmedic where I work at the<br/>
                  intersection of data science, machine learning, and pharmaceutical regulation.<br/>
                  My role involves analyzing complex datasets to ensure drug safety and support<br/>
                  regulatory decision-making.
                </div>
                <div className="text-gray-300 ml-4">
                  With a background in engineering and machine learning, I specialize in developing<br/>
                  data-driven solutions that transform raw information into actionable insights.
                </div>
                <div className="h-4"></div>
                
                <div className="flex items-center">
                  <span className="text-blue-400">user@portfolio:~$</span>
                  <span className="ml-2">ls projects/</span>
                </div>
                <div className="text-green-400">Pharmaceutical Market Oversight</div>
                <div className="text-gray-300 ml-4">Developed MediCrawl and NightCrawler at Swissmedic to identify non-compliant and illegal medicaments sold in ecommerce</div>
                <div className="text-gray-500 ml-4">Tags: Machine Learning, Healthcare, Python, Microservices, Azure, Crawling</div>
                <div className="text-gray-500 ml-4">Date: 2021-2025</div>
                <div className="h-2"></div>
                
                <div className="text-green-400">Regulatory Data Dashboard</div>
                <div className="text-gray-300 ml-4">Built an interactive dashboard for monitoring drug approval processes and compliance metrics.</div>
                <div className="text-gray-500 ml-4">Tags: Data Viz, React, D3.js</div>
                <div className="text-gray-500 ml-4">Date: 2023</div>
                <div className="h-2"></div>
                
                <div className="text-green-400">Statistical Modeling Framework</div>
                <div className="text-gray-300 ml-4">Created a reusable framework for statistical analysis in pharmaceutical research.</div>
                <div className="text-gray-500 ml-4">Tags: R, Statistics, Package Dev</div>
                <div className="text-gray-500 ml-4">Date: 2023</div>
                <div className="h-4"></div>
                
                <div className="flex items-center">
                  <span className="text-blue-400">user@portfolio:~$</span>
                  <span className="ml-2">cat education.txt</span>
                </div>
                <div className="text-green-400">Education</div>
                <div className="text-gray-300 ml-4">PhD in Chemical and Biomolecular Engineering - Johns Hopkins University (2014-2019)</div>
                <div className="text-gray-300 ml-4">Master's in Engineering Science - Biomedical Engineering - Pontifical Catholic University of Chile (2013-2014)</div>
                <div className="text-gray-300 ml-4">Bachelor's in Physics - Pontifical Catholic University of Chile (2008-2012)</div>
                <div className="h-4"></div>
                
                <div className="flex items-center">
                  <span className="text-blue-400">user@portfolio:~$</span>
                  <span className="ml-2">cat skills.txt</span>
                </div>
                <div className="text-green-400">Expertise</div>
                <div className="text-gray-300 ml-4">Statistical Analysis | Machine Learning | Python & R | Data Visualization</div>
                <div className="text-gray-300 ml-4">Regulatory Data Science | Healthcare Analytics</div>
                <div className="h-4"></div>
                
                <div className="flex items-center">
                  <span className="text-blue-400">user@portfolio:~$</span>
                  <span className="ml-2 animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </>
      )}
      
      {/* Question Bubble - Fixed Position */}
      <div className="fixed bottom-6 left-6 z-50 flex items-end gap-3">
        <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer">
          <img
            src="/question_bubble.png"
            alt="Question bubble"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative">
          <div 
            className="bg-background/90 backdrop-blur-sm border border-border rounded-lg px-4 py-2 shadow-lg cursor-pointer hover:bg-background/95 transition-colors duration-200 flex items-center gap-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <p className="text-sm font-medium text-foreground whitespace-nowrap">
              wanna make this interesting?
            </p>
            <ChevronUp className={`h-4 w-4 text-foreground transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
          </div>
          
          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute bottom-full left-0 mb-2 w-80 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-xl overflow-hidden">
              {menuOptions.map((option, index) => (
                <div
                  key={index}
                  className="px-4 py-3 text-sm text-foreground hover:bg-muted/50 cursor-pointer transition-colors duration-200 border-b border-border last:border-b-0"
                  onClick={() => handleMenuOption(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Layout;
