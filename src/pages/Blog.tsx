import { Calendar, User, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: '10 Easy Ways to Reduce Plastic Waste',
      excerpt: 'Discover practical tips to minimize your plastic footprint and contribute to a cleaner environment.',
      author: 'Sarah Green',
      date: 'March 15, 2025',
      image: 'https://images.pexels.com/photos/3850512/pexels-photo-3850512.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Tips'
    },
    {
      title: 'The Science Behind AI Waste Recognition',
      excerpt: 'Learn how our advanced technology identifies and sorts different types of recyclable materials.',
      author: 'Dr. Michael Chen',
      date: 'March 10, 2025',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Technology'
    },
    {
      title: 'Community Spotlight: Local Heroes Making a Difference',
      excerpt: 'Meet the recycling champions in your neighborhood who are leading the environmental movement.',
      author: 'Emma Wilson',
      date: 'March 5, 2025',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Community'
    },
    {
      title: 'Understanding the Global Recycling Crisis',
      excerpt: 'An in-depth look at current recycling challenges and how technology is providing solutions.',
      author: 'Ahmed Hassan',
      date: 'February 28, 2025',
      image: 'https://images.pexels.com/photos/3186574/pexels-photo-3186574.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Environment'
    },
    {
      title: 'New Features: What\'s Coming to EcoBrain App',
      excerpt: 'Exciting updates and features that will make recycling even more rewarding and enjoyable.',
      author: 'Product Team',
      date: 'February 20, 2025',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Updates'
    },
    {
      title: 'Success Story: How One City Achieved 90% Recycling Rate',
      excerpt: 'Discover how EcoBrain technology helped transform waste management in Portland.',
      author: 'Sarah Green',
      date: 'February 15, 2025',
      image: 'https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Case Study'
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              EcoBrain Blog
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              News, insights, and stories about sustainable living and smart recycling
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <article
                  key={index}
                  className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <button className="flex items-center space-x-2 text-green-600 font-semibold hover:space-x-3 transition-all">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-green-100">
              Get the latest environmental news and recycling tips delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto pt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
