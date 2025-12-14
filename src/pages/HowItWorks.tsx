import { Trash2, Scan, Smartphone, Gift } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Trash2,
      number: '01',
      title: 'Place Waste in Device',
      description: 'Simply drop your recyclable items into the EcoBrain smart bin. Our device accepts plastic, paper, metal, and glass.',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Scan,
      number: '02',
      title: 'AI Identifies the Type',
      description: 'Advanced sensors and AI technology instantly recognize the waste type and sort it accordingly. A unique QR code is generated.',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Smartphone,
      number: '03',
      title: 'Scan with Mobile App',
      description: 'Use the EcoBrain mobile app to scan the QR code. Your recycling action is logged instantly to your personal account.',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Gift,
      number: '04',
      title: 'Earn Points & Rewards',
      description: 'Collect points for every item recycled. Redeem your points for exciting rewards, discounts, and special offers.',
      color: 'from-blue-400 to-blue-600'
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How EcoBrain Works
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Four simple steps to start making a difference. Recycling has never been easier or more rewarding.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl transform rotate-3 opacity-10`}></div>
                    <div className={`relative bg-gradient-to-br ${step.color} p-12 rounded-3xl flex items-center justify-center`}>
                      <step.icon className="h-32 w-32 text-white" />
                    </div>
                  </div>
                </div>

                <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <span className="text-6xl font-bold text-gray-200">
                      {step.number}
                    </span>
                    <div className={`h-1 w-20 bg-gradient-to-r ${step.color}`}></div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {step.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-green-100">
              Join thousands of users making a real environmental impact
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                Download the App
              </button>
              <button className="bg-green-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-900 transition-colors border-2 border-green-500">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
