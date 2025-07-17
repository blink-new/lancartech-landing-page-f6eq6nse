import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Crown, Star, DollarSign, MessageCircle, TrendingUp, Shield, Users, Play, Monitor, Zap } from 'lucide-react'

interface HomePageProps {
  onScrollToSection: (sectionId: string) => void;
  onWhatsApp: () => void;
  onPlayStore: () => void;
}

export default function HomePage({ onScrollToSection, onWhatsApp, onPlayStore }: HomePageProps) {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative pt-16 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center relative z-10">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl animate-pulse p-2">
                  <img 
                    src="/logo.png" 
                    alt="Lancartech Logo" 
                    className="w-20 h-20 object-contain"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#F59E0B] rounded-full flex items-center justify-center">
                  <Crown className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>
            
            <div className="space-y-2 mb-8">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#F59E0B] bg-clip-text text-transparent leading-tight animate-fade-in">
                Lancartech
              </h1>
              <div className="flex items-center justify-center space-x-2">
                <Badge className="bg-[#8B5CF6]/20 text-[#8B5CF6] border-[#8B5CF6]/30">
                  #1 IPTV Provider
                </Badge>
                <Badge className="bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/30">
                  Indonesia
                </Badge>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium animate-slide-up">
              Professional SaaS IPTV Provider in Indonesia
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up">
              Empowering resellers and providing premium IPTV solutions with reliable streaming, comprehensive channel packages, and professional 24/7 support. Join thousands of satisfied customers across Indonesia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                onClick={() => onScrollToSection('pricing')}
                className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] hover:from-[#7C3AED] hover:to-[#9333EA] text-white px-10 py-4 text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                View Pricing Plans
              </Button>
              <Button 
                onClick={onWhatsApp}
                variant="outline"
                className="border-2 border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-black px-10 py-4 text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact WhatsApp
              </Button>
            </div>

            {/* App Download Section */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-[#18181B]/80 to-[#27272A]/80 backdrop-blur-sm rounded-2xl p-8 border border-zinc-800/50 max-w-4xl mx-auto">
                <div className="text-center mb-8">
                  <Badge className="bg-gradient-to-r from-[#8B5CF6]/20 to-[#F59E0B]/20 text-[#8B5CF6] border-[#8B5CF6]/30 mb-6 text-sm px-4 py-2">
                    📱 Mobile App Available
                  </Badge>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    Experience IPTV on Your Mobile
                  </h3>
                  <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                    Download the official Lancartech IPTV app from Google Play Store and enjoy seamless streaming on your mobile device.
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <Button 
                    onClick={onPlayStore}
                    className="relative group bg-gradient-to-br from-[#34A853] via-[#4CAF50] to-[#2E7D32] hover:from-[#2E7D32] hover:via-[#388E3C] hover:to-[#1B5E20] text-white px-8 py-6 text-lg shadow-2xl transform hover:scale-105 transition-all duration-500 flex items-center space-x-4 rounded-2xl overflow-hidden border-2 border-transparent hover:border-[#4CAF50]/30 min-h-[88px]"
                    size="lg"
                  >
                    {/* Animated gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
                    
                    {/* Enhanced Google Play icon */}
                    <div className="relative w-10 h-10 bg-white/95 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      <div className="w-6 h-6 bg-gradient-to-br from-[#34A853] to-[#2E7D32] rounded-xl flex items-center justify-center">
                        <Play className="w-4 h-4 text-white fill-white" />
                      </div>
                    </div>
                    
                    {/* Enhanced text content */}
                    <div className="text-left relative z-10">
                      <div className="text-sm font-medium text-green-100/90 tracking-wide mb-1">GET IT ON</div>
                      <div className="text-2xl font-bold tracking-tight group-hover:tracking-wide transition-all duration-300">Google Play</div>
                    </div>
                    
                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#34A853]/0 via-[#4CAF50]/20 to-[#34A853]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </Button>
                </div>
                
                {/* Additional features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-zinc-800/50">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#8B5CF6]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Monitor className="w-6 h-6 text-[#8B5CF6]" />
                    </div>
                    <h4 className="text-white font-semibold mb-1">HD Streaming</h4>
                    <p className="text-gray-400 text-sm">Crystal clear video quality</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#F59E0B]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Zap className="w-6 h-6 text-[#F59E0B]" />
                    </div>
                    <h4 className="text-white font-semibold mb-1">Fast Loading</h4>
                    <p className="text-gray-400 text-sm">Instant channel switching</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-[#8B5CF6]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-[#8B5CF6]" />
                    </div>
                    <h4 className="text-white font-semibold mb-1">Secure</h4>
                    <p className="text-gray-400 text-sm">Protected streaming</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8B5CF6] mb-2">1000+</div>
                <div className="text-gray-400 text-sm">Active Resellers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F59E0B] mb-2">50K+</div>
                <div className="text-gray-400 text-sm">End Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#8B5CF6] mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F59E0B] mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section id="pricing" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-[#8B5CF6] to-[#F59E0B] text-white mb-4">
              Pricing Plans
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Flexible pricing options for every need - from individual users to business resellers looking to build their IPTV empire.
            </p>
          </div>
          
          {/* Enhanced Reseller Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white text-lg px-6 py-2 mb-4">
                🚀 Reseller Program
              </Badge>
              <h3 className="text-3xl font-bold mb-4 text-white">
                Start Your IPTV Business Today
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Join our exclusive reseller network and build a profitable IPTV business with unlimited growth potential
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-[#18181B] via-[#27272A] to-[#18181B] border-2 border-[#8B5CF6] relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#F59E0B]"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#F59E0B] text-black font-semibold">
                    MOST PROFITABLE
                  </Badge>
                </div>
                
                <CardHeader className="text-center pb-6">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#A855F7] rounded-2xl flex items-center justify-center mr-4">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-3xl text-white mb-1">Reseller Panel</CardTitle>
                      <CardDescription className="text-gray-400 text-lg">
                        Complete Business Solution
                      </CardDescription>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-5xl font-bold text-[#8B5CF6]">
                      Rp 10.000.000
                    </div>
                    <p className="text-gray-400 text-lg">One-time registration deposit</p>
                    <Badge variant="outline" className="border-[#F59E0B] text-[#F59E0B]">
                      This is not refund
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <Star className="w-5 h-5 text-[#F59E0B] mr-2" />
                        Business Features
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Your own branded reseller panel</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Unlimited sub-accounts creation</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Full administrative control</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Real-time analytics dashboard</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Custom pricing control</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                        <DollarSign className="w-5 h-5 text-[#F59E0B] mr-2" />
                        Earning Potential
                      </h4>
                      <ul className="space-y-3">
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Up to 40% profit margin</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Recurring monthly revenue</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>No monthly fees or commissions</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Dedicated account manager</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span>Priority technical support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  

                  
                  <Button 
                    onClick={() => window.open('https://wa.me/+6281222339257?text=Hi%20Lancartech%2C%20I%20want%20to%20start%20my%20IPTV%20business%20with%20the%20Reseller%20Panel%20(Rp%2010.000.000%20deposit).%20Please%20provide%20more%20information', '_blank')}
                    className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] hover:from-[#7C3AED] hover:to-[#9333EA] text-white text-lg py-4 shadow-xl transform hover:scale-105 transition-all duration-300"
                    size="lg"
                  >
                    <Crown className="w-5 h-5 mr-2" />
                    Start Your IPTV Business
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Enhanced End User Section */}
          <div>
            <div className="text-center mb-12">
              <Badge className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white text-lg px-6 py-2 mb-4">
                📺 End User Plans
              </Badge>
              <h3 className="text-3xl font-bold mb-4 text-white">
                Premium IPTV Packages
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Choose the perfect package for your viewing needs with our flexible device options
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-[#18181B] to-[#27272A] border-zinc-700 hover:border-[#F59E0B]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-[#F59E0B]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Monitor className="w-6 h-6 text-[#F59E0B]" />
                  </div>
                  <CardTitle className="text-white text-xl">1 Device Plan</CardTitle>
                  <CardDescription className="text-gray-400">
                    Perfect for individual viewing
                  </CardDescription>
                  <div className="text-4xl font-bold text-[#F59E0B] mt-6">
                    Rp 450.000
                  </div>
                  <p className="text-gray-400">Live TV + VOD / 1 Year</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>1 simultaneous connection</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>150+ Live TV channels</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>VOD content only</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>FHD / HD Quality H265 2mbps minimum with high resolution</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>24/7 customer support</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={() => window.open('https://wa.me/+6281222339257?text=Hi%20Lancartech%2C%20I%20want%20to%20order%20the%201%20Device%20Plan%20(Rp%20450.000)%20for%20Live%20TV%20%2B%20VOD%201%20Year', '_blank')}
                    variant="outline"
                    className="w-full border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-black transition-all duration-300"
                  >
                    Order via WhatsApp
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-[#18181B] to-[#27272A] border-2 border-[#F59E0B] relative overflow-hidden shadow-2xl transform scale-105">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F59E0B] to-[#8B5CF6]"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-[#F59E0B] text-black font-semibold">
                    MOST POPULAR
                  </Badge>
                </div>
                
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-[#F59E0B]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-[#F59E0B]" />
                  </div>
                  <CardTitle className="text-white text-xl">2 Devices Plan</CardTitle>
                  <CardDescription className="text-gray-400">
                    Ideal for families
                  </CardDescription>
                  <div className="text-4xl font-bold text-[#F59E0B] mt-6">
                    Rp 650.000
                  </div>
                  <p className="text-gray-400">Live TV + VOD / 1 Year</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>2 simultaneous connections</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>150+ Live TV channels</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>VOD content only</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>FHD / HD Quality H265 2mbps minimum with high resolution</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Priority customer support</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={() => window.open('https://wa.me/+6281222339257?text=Hi%20Lancartech%2C%20I%20want%20to%20order%20the%202%20Devices%20Plan%20(Rp%20650.000)%20for%20Live%20TV%20%2B%20VOD%201%20Year', '_blank')}
                    className="w-full bg-gradient-to-r from-[#F59E0B] to-[#D97706] hover:from-[#D97706] hover:to-[#B45309] text-black font-semibold transition-all duration-300"
                  >
                    Order via WhatsApp
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-[#18181B] to-[#27272A] border-zinc-700 hover:border-[#F59E0B]/50 transition-all duration-500 transform hover:scale-105 hover:shadow-xl">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-[#F59E0B]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-6 h-6 text-[#F59E0B]" />
                  </div>
                  <CardTitle className="text-white text-xl">3 Devices Plan</CardTitle>
                  <CardDescription className="text-gray-400">
                    Perfect for large families
                  </CardDescription>
                  <div className="text-4xl font-bold text-[#F59E0B] mt-6">
                    Rp 850.000
                  </div>
                  <p className="text-gray-400">Live TV + VOD / 1 Year</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>3 simultaneous connections</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>150+ Live TV channels</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>VOD content only</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>FHD / HD Quality H265 2mbps minimum with high resolution</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>VIP customer support</span>
                    </li>
                  </ul>
                  <Button 
                    onClick={() => window.open('https://wa.me/+6281222339257?text=Hi%20Lancartech%2C%20I%20want%20to%20order%20the%203%20Devices%20Plan%20(Rp%20850.000)%20for%20Live%20TV%20%2B%20VOD%201%20Year', '_blank')}
                    variant="outline"
                    className="w-full border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-black transition-all duration-300"
                  >
                    Order via WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-[#8B5CF6]/20 text-[#8B5CF6] border-[#8B5CF6]/30 mb-4">
              Get in Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Contact our expert team today for personalized consultation and professional support. We're here to help you succeed.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Card className="bg-gradient-to-br from-[#18181B] to-[#27272A] border-zinc-700 hover:border-[#25D366]/50 transition-all duration-500 max-w-md w-full">
              <CardHeader>
                <CardTitle className="text-white flex items-center text-xl">
                  <div className="w-10 h-10 bg-[#25D366]/20 rounded-lg flex items-center justify-center mr-3">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  WhatsApp Support
                </CardTitle>
                <CardDescription className="text-gray-400 text-base">
                  Get instant support and consultation through WhatsApp chat
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  onClick={() => window.open('https://wa.me/+6281222339257', '_blank')}
                  className="w-full bg-gradient-to-r from-[#25D366] to-[#1B5E20] hover:from-[#1B5E20] hover:to-[#0C4B3C] text-white text-lg py-4 shadow-xl transform hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  Contact WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}