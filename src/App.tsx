import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { MessageCircle, Menu, X } from 'lucide-react'
import HomePage from '@/components/pages/HomePage'
import ResellerPage from '@/components/pages/ResellerPage'

type PageType = 'home' | 'reseller'

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleWhatsApp = () => {
    window.open('https://wa.me/+6281222339257', '_blank')
  }

  const handlePlayStore = () => {
    window.open('https://play.google.com/store/apps/details?id=com.lancar.tvapp&hl=en', '_blank')
  }

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handlePageChange = (page: PageType) => {
    setCurrentPage(page)
    setMobileMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white relative overflow-x-hidden">
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B5CF6]/8 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F59E0B]/8 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#A855F7]/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
        <div className="bg-mesh fixed inset-0 opacity-30"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 glass-card z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg animate-glow p-1">
                <img 
                  src="/splash.png" 
                  alt="Lancartech Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-bold text-gradient-brand">Lancartech</span>
                <div className="text-xs text-gray-400">IPTV Provider</div>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => handlePageChange('home')}
                className={`text-sm font-medium transition-all duration-300 ${ currentPage === 'home' ? 'text-[#8B5CF6] scale-105' : 'text-gray-300 hover:text-white hover:scale-105'}`}
              >
                Home
              </button>
              <button 
                onClick={() => handlePageChange('reseller')}
                className={`text-sm font-medium transition-all duration-300 ${ currentPage === 'reseller' ? 'text-[#8B5CF6] scale-105' : 'text-gray-300 hover:text-white hover:scale-105'}`}
              >
                Reseller
              </button>
              <button 
                onClick={() => {
                  if (currentPage !== 'home') {
                    handlePageChange('home')
                    setTimeout(() => scrollToSection('features'), 100)
                  } else {
                    scrollToSection('features')
                  }
                }}
                className="text-sm font-medium transition-all duration-300 text-gray-300 hover:text-white hover:scale-105"
              >
                Features
              </button>
              <button 
                onClick={() => {
                  if (currentPage !== 'home') {
                    handlePageChange('home')
                    setTimeout(() => scrollToSection('pricing'), 100)
                  } else {
                    scrollToSection('pricing')
                  }
                }}
                className="text-sm font-medium transition-all duration-300 text-gray-300 hover:text-white hover:scale-105"
              >
                Pricing
              </button>
              <button 
                onClick={() => {
                  if (currentPage !== 'home') {
                    handlePageChange('home')
                    setTimeout(() => scrollToSection('contact'), 100)
                  } else {
                    scrollToSection('contact')
                  }
                }}
                className="text-sm font-medium transition-all duration-300 text-gray-300 hover:text-white hover:scale-105"
              >
                Contact
              </button>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button 
                onClick={handleWhatsApp}
                className="hidden sm:flex bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] hover:from-[#7C3AED] hover:to-[#9333EA] text-white shadow-lg transform hover:scale-105 transition-all duration-300 button-glow"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Started
              </Button>
              
              <Button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                variant="ghost"
                size="sm"
                className="lg:hidden text-white hover:text-[#8B5CF6] hover:bg-[#8B5CF6]/10"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass-card border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => handlePageChange('home')}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${ currentPage === 'home' ? 'bg-[#8B5CF6]/20 text-[#8B5CF6]' : 'text-gray-300 hover:text-white hover:bg-zinc-800/50'}`}
              >
                Home
              </button>
              <button 
                onClick={() => handlePageChange('reseller')}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${ currentPage === 'reseller' ? 'bg-[#8B5CF6]/20 text-[#8B5CF6]' : 'text-gray-300 hover:text-white hover:bg-zinc-800/50'}`}
              >
                Reseller
              </button>
              <button 
                onClick={() => {
                  if (currentPage !== 'home') {
                    handlePageChange('home')
                    setTimeout(() => scrollToSection('features'), 100)
                  } else {
                    scrollToSection('features')
                  }
                }}
                className="block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-gray-300 hover:text-white hover:bg-zinc-800/50"
              >
                Features
              </button>
              <button 
                onClick={() => {
                  if (currentPage !== 'home') {
                    handlePageChange('home')
                    setTimeout(() => scrollToSection('pricing'), 100)
                  } else {
                    scrollToSection('pricing')
                  }
                }}
                className="block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-gray-300 hover:text-white hover:bg-zinc-800/50"
              >
                Pricing
              </button>
              <button 
                onClick={() => {
                  if (currentPage !== 'home') {
                    handlePageChange('home')
                    setTimeout(() => scrollToSection('contact'), 100)
                  } else {
                    scrollToSection('contact')
                  }
                }}
                className="block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-gray-300 hover:text-white hover:bg-zinc-800/50"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-zinc-800/50">
                <Button 
                  onClick={handleWhatsApp}
                  className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] hover:from-[#7C3AED] hover:to-[#9333EA] text-white shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      {currentPage === 'home' && (
        <HomePage 
          onScrollToSection={scrollToSection}
          onWhatsApp={handleWhatsApp}
          onPlayStore={handlePlayStore}
        />
      )}
      
      {currentPage === 'reseller' && (
        <ResellerPage onWhatsApp={handleWhatsApp} />
      )}

      {/* Footer */}
      <footer className="bg-[#0F0F0F] border-t border-zinc-800/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center p-1">
                <img 
                  src="/splash.png" 
                  alt="Lancartech Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#F59E0B] bg-clip-text text-transparent">Lancartech</span>
                <div className="text-xs text-gray-400">Professional IPTV Solutions</div>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              #1 SaaS IPTV Provider in Indonesia
            </p>
            <p className="text-gray-500 text-sm">
              © 2025 PT. Lancar Teknologi Indonesia. All rights reserved. | Empowering digital entertainment across Indonesia.
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleWhatsApp}
          className="bg-gradient-to-br from-[#25D366] to-[#20C55E] hover:from-[#20C55E] hover:to-[#16A085] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
          aria-label="Contact WhatsApp"
        >
          <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  )
}

export default App