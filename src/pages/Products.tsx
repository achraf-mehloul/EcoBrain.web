import { Smartphone, Cpu, Gauge, Zap, Download, Apple } from 'lucide-react';

export default function Products() {
  const deviceFeatures = [
    { icon: Cpu, label: 'AI-Powered Recognition', value: '99.5% accuracy' },
    { icon: Gauge, label: 'Processing Speed', value: 'Under 2 seconds' },
    { icon: Zap, label: 'Energy Efficient', value: 'Low power consumption' },
    { icon: Smartphone, label: 'IoT Connected', value: 'Real-time sync' }
  ];

  const appFeatures = [
    'Real-time waste tracking',
    'Points and rewards dashboard',
    'Environmental impact statistics',
    'QR code scanner',
    'Achievement badges',
    'Community leaderboards',
    'Recycling tips and guides',
    'Reward redemption'
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              EcoBrain Products
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Smart hardware and software working together for a sustainable future
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-blue-200 rounded-3xl transform rotate-3 opacity-30"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                  <img
                    src="/gemini_generated_image_8o6zbq8o6zbq8o6z.png"
                    alt="EcoBrain Device"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Smart Device
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  EcoBrain Smart Bin
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our flagship smart recycling device uses advanced AI and sensors to automatically identify and sort waste. Compact, efficient, and perfect for homes, offices, and public spaces.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  {deviceFeatures.map((feature, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <feature.icon className="h-6 w-6 text-green-600 mb-2" />
                      <div className="text-sm font-semibold text-gray-900 mb-1">
                        {feature.label}
                      </div>
                      <div className="text-xs text-gray-600">
                        {feature.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 space-y-3">
                  <div className="text-3xl font-bold text-green-600">30000DZD</div>
                  <button className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                    Pre-Order Now
                  </button>
                  <p className="text-sm text-gray-500 text-center">
                    Free shipping • 2-year warranty included
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 md:order-2">
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Mobile App
                </div>
                <h2 className="text-4xl font-bold text-gray-900">
                  EcoBrain Mobile App
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Track your environmental impact, earn rewards, and stay motivated with our beautiful and intuitive mobile application. Available for iOS and Android.
                </p>

                <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">Key Features</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {appFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <div className="bg-green-600 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <a
                    href="#"
                    className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Apple className="h-6 w-6" />
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="text-sm font-semibold">App Store</div>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center space-x-3 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Download className="h-6 w-6" />
                    <div className="text-left">
                      <div className="text-xs">Get it on</div>
                      <div className="text-sm font-semibold">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="md:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-green-200 rounded-3xl transform -rotate-3 opacity-30"></div>
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-3xl shadow-2xl">
                    <div className="grid grid-cols-3 gap-4">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                        <div key={i} className="bg-gray-700 rounded-lg aspect-square"></div>
                      ))}
                    </div>
                    <div className="mt-8 bg-gray-700 h-12 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
