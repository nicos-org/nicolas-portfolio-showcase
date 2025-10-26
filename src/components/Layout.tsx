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

  const menuOptions = isConsoleMode 
    ? ["Exit Console Mode", "Show me the source code", "Make it more interactive"]
    : ["I am actually a software engineer - make the website for a technical public", "Show me the source code", "Make it more interactive"];

  const handleMenuOption = (option: string) => {
    if (option === "I am actually a software engineer - make the website for a technical public") {
      setIsConsoleMode(true);
    } else if (option === "Exit Console Mode") {
      setIsConsoleMode(false);
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {isConsoleMode ? (
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
