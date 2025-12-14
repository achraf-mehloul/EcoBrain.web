import { Leaf, Award, Smartphone, Recycle, TrendingUp, Shield } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const features = [
    {
      icon: Recycle,
      title: 'Smart Waste Recognition',
      description: 'AI-powered device identifies waste types automatically'
    },
    {
      icon: Award,
      title: 'Rewards System',
      description: 'Earn points and redeem exciting rewards for recycling'
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Track your impact and points through our intuitive app'
    },
    {
      icon: Leaf,
      title: 'Environmental Impact',
      description: 'Contribute to a cleaner, greener planet with every action'
    }
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Protect the Environment with <span className="text-green-600">EcoBrain</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Smart waste management meets artificial intelligence. Recycle smarter, earn rewards, and make a real difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('products')}
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Get Your Device Now
                </button>
                <button
                  onClick={() => onNavigate('how-it-works')}
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-green-600"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/gemini_generated_image_8o6zbq8o6zbq8o6z.png"
                  alt="EcoBrain Device"
                  className="w-full max-w-md mx-auto drop-shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-green-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose EcoBrain?
            </h2>
            <p className="text-lg text-gray-600">
              Revolutionary technology that makes recycling effortless and rewarding
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100 hover:shadow-lg transition-shadow"
              >
                <div className="bg-green-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <TrendingUp className="h-12 w-12 mb-2" />
              </div>
              <div className="text-4xl font-bold">10+</div>
              <div className="text-green-100">Active Users</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Recycle className="h-12 w-12 mb-2" />
              </div>
              <div className="text-4xl font-bold">00+</div>
              <div className="text-green-100">Items Recycled</div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-center">
                <Shield className="h-12 w-12 mb-2" />
              </div>
              <div className="text-4xl font-bold">95%</div>
              <div className="text-green-100">Accuracy Rate</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already contributing to a cleaner planet while earning amazing rewards
          </p>
          <button
            onClick={() => onNavigate('products')}
            className="bg-green-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl text-lg"
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
