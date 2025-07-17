import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Crown, Star, DollarSign, Sparkles, MessageCircle, TrendingUp, Shield, Users } from 'lucide-react'

interface ResellerPageProps {
  onWhatsApp: () => void
}

export default function ResellerPage({ onWhatsApp }: ResellerPageProps) {
  const vipPackages = [
    {
      category: "Live TV (No Sports)",
      title: "Paket 1 Device",
      plans: [
        { name: "Live TV No Sports - 1 Bulan", devices: "1 Device", price: "Rp17.500,00" },
        { name: "Live TV No Sports - 3 Bulan", devices: "1 Device", price: "Rp35.000,00" },
        { name: "Live TV No Sports - 6 Bulan", devices: "1 Device", price: "Rp62.500,00" },
        { name: "Live TV No Sports - 12 Bulan", devices: "1 Device", price: "Rp100.000,00" }
      ]
    },
    {
      category: "Live TV (No Sports)",
      title: "Paket 2 Device",
      plans: [
        { name: "Live TV No Sports - 1 Bulan", devices: "2 Devices", price: "Rp17.500,00" },
        { name: "Live TV No Sports - 3 Bulan", devices: "2 Devices", price: "Rp50.000,00" },
        { name: "Live TV No Sports - 6 Bulan", devices: "2 Devices", price: "Rp92.500,00" },
        { name: "Live TV No Sports - 12 Bulan", devices: "2 Devices", price: "Rp175.000,00" }
      ]
    },
    {
      category: "Live TV (No Sports)",
      title: "Paket 3 Device",
      plans: [
        { name: "Live TV No Sports - 1 Bulan", devices: "3 Devices", price: "Rp27.500,00" },
        { name: "Live TV No Sports - 3 Bulan", devices: "3 Devices", price: "Rp70.000,00" },
        { name: "Live TV No Sports - 6 Bulan", devices: "3 Devices", price: "Rp125.000,00" },
        { name: "Live TV No Sports - 12 Bulan", devices: "3 Devices", price: "Rp225.000,00" }
      ]
    },
    {
      category: "Live TV + Sports",
      title: "Paket 1 Device",
      plans: [
        { name: "Live TV + Sports - 1 Bulan", devices: "1 Device", price: "Rp20.750,00" },
        { name: "Live TV + Sports - 3 Bulan", devices: "1 Device", price: "Rp40.000,00" },
        { name: "Live TV + Sports - 6 Bulan", devices: "1 Device", price: "Rp75.000,00" },
        { name: "Live TV + Sports - 12 Bulan", devices: "1 Device", price: "Rp125.000,00" }
      ]
    },
    {
      category: "Live TV + Sports",
      title: "Paket 2 Device",
      plans: [
        { name: "Live TV + Sports - 1 Bulan", devices: "2 Devices", price: "Rp23.250,00" },
        { name: "Live TV + Sports - 3 Bulan", devices: "2 Devices", price: "Rp65.000,00" },
        { name: "Live TV + Sports - 6 Bulan", devices: "2 Devices", price: "Rp112.500,00" },
        { name: "Live TV + Sports - 12 Bulan", devices: "2 Devices", price: "Rp200.000,00" }
      ]
    },
    {
      category: "Live TV + Sports",
      title: "Paket 3 Device",
      plans: [
        { name: "Live TV + Sports - 1 Bulan", devices: "3 Devices", price: "Rp35.250,00" },
        { name: "Live TV + Sports - 3 Bulan", devices: "3 Devices", price: "Rp75.000,00" },
        { name: "Live TV + Sports - 6 Bulan", devices: "3 Devices", price: "Rp137.500,00" },
        { name: "Live TV + Sports - 12 Bulan", devices: "3 Devices", price: "Rp250.000,00" }
      ]
    }
  ]

  return (
    <div className="pt-16 pb-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white text-lg px-6 py-2 mb-4">
            🚀 Reseller Information
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Start Your IPTV Business
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Join our exclusive reseller network and build a profitable IPTV business with our comprehensive platform and competitive pricing structure.
          </p>
        </div>

        {/* Reseller Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-[#18181B] to-[#27272A] border-zinc-700 hover:border-[#8B5CF6]/50 transition-all duration-500">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-[#8B5CF6]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Crown className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <CardTitle className="text-white text-xl">Own Panel</CardTitle>
              <CardDescription className="text-gray-400">
                Get your own branded reseller panel with full control over your business
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-gradient-to-br from-[#18181B] to-[#27272A] border-zinc-700 hover:border-[#F59E0B]/50 transition-all duration-500">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-[#F59E0B]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <CardTitle className="text-white text-xl">High Profits</CardTitle>
              <CardDescription className="text-gray-400">
                Earn up to 40% profit margin on every subscription you sell
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="bg-gradient-to-br from-[#18181B] to-[#27272A] border-zinc-700 hover:border-[#8B5CF6]/50 transition-all duration-500">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-[#8B5CF6]/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <CardTitle className="text-white text-xl">24/7 Support</CardTitle>
              <CardDescription className="text-gray-400">
                Priority support for all your reseller needs and technical issues
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Registration Requirements */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-[#18181B] via-[#27272A] to-[#18181B] border-2 border-[#8B5CF6] relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#8B5CF6] via-[#A855F7] to-[#F59E0B]"></div>
            <div className="absolute top-4 right-4">
              <Badge className="bg-[#F59E0B] text-black font-semibold">
                REGISTRATION REQUIRED
              </Badge>
            </div>
            
            <CardHeader className="text-center pb-6">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#A855F7] rounded-2xl flex items-center justify-center mr-4">
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-3xl text-white mb-1">Reseller Registration</CardTitle>
                  <CardDescription className="text-gray-400 text-lg">
                    One-time deposit to start your business
                  </CardDescription>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-5xl font-bold text-[#8B5CF6]">
                  Rp 10.000.000
                </div>
                <p className="text-gray-400 text-lg">Minimum deposit for reseller registration</p>
                <Badge variant="outline" className="border-[#F59E0B] text-[#F59E0B]">
                  This is not refund
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Star className="w-5 h-5 text-[#F59E0B] mr-2" />
                    Technical Specifications
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>2Mbps HEVC H265 1080p Quality</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Anti Buffer</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>CDN Based</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Extra Bonus on First Top Up / Deposit</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 text-[#F59E0B] mr-2" />
                    Business Benefits
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Up to 40% profit margin</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Recurring monthly income</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Custom pricing control</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>Marketing materials provided</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button 
                onClick={() => window.open('https://wa.me/+6281222339257?text=Hi%20Lancartech%2C%20I%20want%20to%20become%20a%20reseller%20and%20make%20the%20registration%20deposit%20of%20Rp%2010.000.000.%20Please%20guide%20me%20through%20the%20process.', '_blank')}
                className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] hover:from-[#7C3AED] hover:to-[#9333EA] text-white text-lg py-4 shadow-xl transform hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <Crown className="w-5 h-5 mr-2" />
                Start Reseller Registration
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* VIP Pricing Structure */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <Badge className="bg-gradient-to-r from-[#F59E0B] to-[#D97706] text-white text-lg px-6 py-2 mb-4">
              💎 VIP Reseller Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Exclusive Reseller Pricing Structure
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Access to our complete VIP pricing structure with competitive rates for maximum profit margins
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Live TV No Sports Packages */}
            <div>
              <Card className="bg-gradient-to-br from-[#18181B] to-[#27272A] border-zinc-700 mb-8">
                <CardHeader className="text-center">
                  <Badge className="bg-[#8B5CF6]/20 text-[#8B5CF6] border-[#8B5CF6]/30 mb-2">
                    Live TV (No Sports)
                  </Badge>
                  <CardTitle className="text-white text-2xl">VIP Packages</CardTitle>
                  <CardDescription className="text-gray-400">
                    150+ Live TV channels without sports content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {vipPackages.slice(0, 3).map((packageGroup, groupIndex) => (
                      <div key={groupIndex}>
                        <h4 className="font-semibold text-white mb-3 text-center bg-[#8B5CF6]/10 py-2 px-4 rounded-lg">
                          {packageGroup.title}
                        </h4>
                        <div className="space-y-2">
                          {packageGroup.plans.map((plan, planIndex) => (
                            <div key={planIndex} className="flex justify-between items-center p-3 bg-zinc-800/50 rounded-lg">
                              <div>
                                <div className="text-sm text-gray-300">{plan.name}</div>
                                <div className="text-xs text-gray-500">{plan.devices}</div>
                              </div>
                              <div className="text-[#8B5CF6] font-bold">{plan.price}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Live TV + Sports Packages */}
            <div>
              <Card className="bg-gradient-to-br from-[#18181B] to-[#27272A] border-zinc-700 mb-8">
                <CardHeader className="text-center">
                  <Badge className="bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/30 mb-2">
                    Live TV + Sports
                  </Badge>
                  <CardTitle className="text-white text-2xl">VIP Packages</CardTitle>
                  <CardDescription className="text-gray-400">
                    150+ Live TV channels with premium sports content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {vipPackages.slice(3, 6).map((packageGroup, groupIndex) => (
                      <div key={groupIndex}>
                        <h4 className="font-semibold text-white mb-3 text-center bg-[#F59E0B]/10 py-2 px-4 rounded-lg">
                          {packageGroup.title}
                        </h4>
                        <div className="space-y-2">
                          {packageGroup.plans.map((plan, planIndex) => (
                            <div key={planIndex} className="flex justify-between items-center p-3 bg-zinc-800/50 rounded-lg">
                              <div>
                                <div className="text-sm text-gray-300">{plan.name}</div>
                                <div className="text-xs text-gray-500">{plan.devices}</div>
                              </div>
                              <div className="text-[#F59E0B] font-bold">{plan.price}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Features Included */}
        <div className="mb-16">
          <Card className="bg-gradient-to-br from-[#18181B] to-[#27272A] border-zinc-700">
            <CardHeader className="text-center">
              <Badge className="bg-[#8B5CF6]/20 text-[#8B5CF6] border-[#8B5CF6]/30 mb-4">
                All Packages Include
              </Badge>
              <CardTitle className="text-white text-2xl">Premium Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-[#8B5CF6]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Sparkles className="w-6 h-6 text-[#8B5CF6]" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">FHD/HD Quality</h4>
                  <p className="text-gray-400 text-sm">H265 2mbps minimum with high resolution</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-[#F59E0B]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Users className="w-6 h-6 text-[#F59E0B]" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">VOD Content</h4>
                  <p className="text-gray-400 text-sm">Extensive Video on Demand library</p>
                </div>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-[#8B5CF6]/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-[#8B5CF6]" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">24/7 Support</h4>
                  <p className="text-gray-400 text-sm">Round-the-clock customer support</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="flex justify-center">
          <Card className="bg-gradient-to-br from-[#18181B] to-[#27272A] border-2 border-[#8B5CF6] max-w-md w-full">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Ready to Start Your Business?</CardTitle>
              <CardDescription className="text-gray-400 text-lg">
                Contact us now to begin your reseller journey with Lancartech
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={() => window.open('https://wa.me/+6281222339257?text=Hi%20Lancartech%2C%20I%20want%20to%20get%20more%20information%20about%20the%20reseller%20program%20and%20VIP%20pricing%20structure.', '_blank')}
                className="w-full bg-gradient-to-r from-[#25D366] to-[#20C55E] hover:from-[#20C55E] hover:to-[#16A085] text-white text-lg py-4 shadow-xl transform hover:scale-105 transition-all duration-300"
                size="lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact via WhatsApp
              </Button>
              <p className="text-gray-400 text-sm">
                Available 24/7 for reseller inquiries and support
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}