import { Gift, Star, Trophy, Zap, ShoppingBag, Coffee, Ticket, Award } from 'lucide-react';

export default function Rewards() {
  const rewards = [
    {
      icon: ShoppingBag,
      title: 'Shopping Vouchers',
      points: '500 points',
      description: '100DZD off at partner stores',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Coffee,
      title: 'Cafe Credits',
      points: '300 points',
      description: 'Free coffee at local cafes',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Ticket,
      title: 'Event Tickets',
      points: '1000 points',
      description: 'Concert and movie tickets',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Gift,
      title: 'Eco Products',
      points: '750 points',
      description: 'Sustainable lifestyle products',
      color: 'from-blue-400 to-blue-600'
    },
    {
      icon: Award,
      title: 'Premium Membership',
      points: '2000 points',
      description: '3 months of premium features',
      color: 'from-green-400 to-green-600'
    },
    {
      icon: Star,
      title: 'Special Deals',
      points: '400 points',
      description: 'Exclusive partner discounts',
      color: 'from-blue-400 to-blue-600'
    }
  ];

  const tiers = [
    { name: 'Bronze', min: 0, max: 500, color: 'bg-orange-400', benefits: ['Basic rewards', 'Monthly newsletter'] },
    { name: 'Silver', min: 500, max: 2000, color: 'bg-gray-400', benefits: ['All Bronze benefits', '10% bonus points', 'Priority support'] },
    { name: 'Gold', min: 2000, max: 5000, color: 'bg-yellow-400', benefits: ['All Silver benefits', '25% bonus points', 'Exclusive rewards'] },
    { name: 'Platinum', min: 5000, max: null, color: 'bg-gray-700', benefits: ['All Gold benefits', '50% bonus points', 'VIP experiences'] }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Rewards Program
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Turn your recycling actions into amazing rewards. The more you recycle, the more you earn!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How Points Work
              </h2>
              <p className="text-lg text-gray-600">
                Earn points for every item you recycle
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border border-green-200 text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">10 pts</div>
                <div className="text-gray-600">Per plastic item</div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-200 text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">15 pts</div>
                <div className="text-gray-600">Per glass/metal item</div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl border border-green-200 text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">50 pts</div>
                <div className="text-gray-600">Daily bonus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Available Rewards
              </h2>
              <p className="text-lg text-gray-600">
                Redeem your points for exciting prizes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rewards.map((reward, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className={`bg-gradient-to-br ${reward.color} p-8 flex items-center justify-center`}>
                    <reward.icon className="h-16 w-16 text-white" />
                  </div>
                  <div className="p-6">
                    <div className="text-green-600 font-semibold text-sm mb-2">
                      {reward.points}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {reward.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {reward.description}
                    </p>
                    <button className="w-full bg-gray-100 text-gray-900 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                      Redeem Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Membership Tiers
              </h2>
              <p className="text-lg text-gray-600">
                Level up to unlock exclusive benefits
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {tiers.map((tier, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border-2 border-gray-200 overflow-hidden hover:border-green-400 transition-colors"
                >
                  <div className={`${tier.color} h-3`}></div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {tier.name}
                    </h3>
                    <div className="text-sm text-gray-600 mb-4">
                      {tier.min} - {tier.max || '∞'} points
                    </div>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <div className="bg-green-600 w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
