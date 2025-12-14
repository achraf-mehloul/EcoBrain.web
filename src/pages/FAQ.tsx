import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does the EcoBrain device work?',
      answer: 'The EcoBrain device uses advanced AI sensors and computer vision to automatically identify different types of recyclable materials. Simply place your waste item in the device, and it will scan, identify, and generate a QR code that you can scan with the mobile app to track your recycling action and earn points.'
    },
    {
      question: 'What types of materials can EcoBrain recognize?',
      answer: 'EcoBrain can identify and sort multiple types of recyclable materials including plastic bottles, aluminum cans, glass containers, paper products, and various types of cardboard. Our AI is constantly learning and improving to recognize more materials with even greater accuracy.'
    },
    {
      question: 'How do I earn and redeem rewards?',
      answer: 'You earn points every time you recycle an item using the EcoBrain device. Different materials earn different amounts of points. Once you accumulate enough points, you can redeem them through the mobile app for various rewards including shopping vouchers, cafe credits, event tickets, and eco-friendly products.'
    },
    {
      question: 'Is the mobile app free to download?',
      answer: 'Yes, the EcoBrain mobile app is completely free to download and use on both iOS and Android devices. All core features including tracking your recycling, viewing your environmental impact, and redeeming rewards are available at no cost.'
    },
    {
      question: 'How accurate is the waste recognition technology?',
      answer: 'Our AI-powered recognition system achieves 99.5% accuracy in identifying common recyclable materials. The system continuously learns from each scan, improving its accuracy over time. In rare cases where the system is uncertain, it will prompt for manual confirmation.'
    },
    {
      question: 'Can I use EcoBrain without purchasing the device?',
      answer: 'The EcoBrain device is required to automatically identify and track your recycling. However, you can download the app to explore features, learn about recycling, and find public EcoBrain devices in your community at participating locations like shopping centers and community centers.'
    },
    {
      question: 'What happens to the waste after I place it in the device?',
      answer: 'After identification and QR code generation, the waste is stored in separate compartments within the device based on material type. The device alerts for collection when compartments are full, and materials are sent to appropriate recycling facilities to be processed and given new life.'
    },
    {
      question: 'How long does it take to process each item?',
      answer: 'The EcoBrain device processes each item in under 2 seconds. The AI identification happens almost instantly, and the QR code is generated immediately, making the recycling process quick and convenient.'
    },
    {
      question: 'Is there a warranty on the EcoBrain device?',
      answer: 'Yes, all EcoBrain devices come with a comprehensive 2-year warranty that covers manufacturing defects and technical issues. We also offer extended warranty options and excellent customer support to ensure your device works perfectly.'
    },
    {
      question: 'Can businesses and organizations use EcoBrain?',
      answer: 'Absolutely! We offer special enterprise solutions for businesses, schools, and organizations looking to improve their recycling rates and engage their community. Contact our business team to learn about bulk pricing, custom installations, and analytics dashboards.'
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Find answers to common questions about EcoBrain
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-8">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-green-600 flex-shrink-0 transition-transform ${
                        openIndex === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openIndex === index && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Still Have Questions?
            </h2>
            <p className="text-xl text-green-100">
              Our support team is here to help you with any questions or concerns
            </p>
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
