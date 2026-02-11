'use client';

import { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

export default function Home() {
  const qrCanvasRef = useRef<HTMLCanvasElement>(null);

  // WhatsApp number and link
  const WHATSAPP_NUMBER = '17186769888';
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi`;

  // Generate QR code
  useEffect(() => {
    if (qrCanvasRef.current) {
      QRCode.toCanvas(
        qrCanvasRef.current,
        WHATSAPP_LINK,
        {
          width: 300,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF',
          },
        },
        (error) => {
          if (error) console.error('QR Code generation error:', error);
        }
      );
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Orbit
              </span>
            </div>
            <a
              href={WHATSAPP_LINK}
              className="hidden sm:inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Start Chatting
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Meet Orbit
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 mb-4 leading-relaxed">
              Your AI assistant that lives with you on WhatsApp.
            </p>
            <p className="text-lg text-slate-500 mb-12">
              Let Orbit check-out your shopping carts, plan your next vacation, find those concert tickets, and much more.
            </p>

            {/* QR Code Section */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 mb-8 border border-slate-200">
              <div className="flex flex-col items-center">
                <canvas ref={qrCanvasRef} className="mb-6 rounded-2xl shadow-lg" />
                <p className="text-slate-600 font-medium mb-4">
                  Scan to start chatting on WhatsApp
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <a
                    href={WHATSAPP_LINK}
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Open WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400">
              Available 24/7 · Powered by AI · Secure & Private
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            What Orbit Can Do For You
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '✈️',
                title: 'Travel Planning',
                description: 'Book flights and hotels with ease. Orbit finds the best deals and handles all the details.',
              },
              {
                icon: '🛍️',
                title: 'Smart Shopping',
                description: 'Compare prices across stores, complete checkouts, and track your orders automatically.',
              },
              {
                icon: '🍕',
                title: 'Food Delivery',
                description: 'Order from your favorite restaurants. Orbit remembers your preferences and past orders.',
              },
              {
                icon: '🎫',
                title: 'Event Tickets',
                description: 'Never miss a concert or game. Orbit finds and secures tickets for you.',
              },
              {
                icon: '📅',
                title: 'Calendar Management',
                description: 'Sync with your calendar and email for intelligent daily briefings.',
              },
              {
                icon: '💳',
                title: 'Secure Payments',
                description: 'Bank-level security with encrypted payment processing and receipts.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
            Simple Pricing
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">
            Choose the plan that fits your lifestyle
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: 'Free',
                price: '$0',
                period: 'forever',
                features: [
                  '10 messages/month',
                  'Basic shopping assistance',
                  'Price comparisons',
                  'Standard support',
                ],
                cta: 'Get Started',
                highlighted: false,
              },
              {
                name: 'Starter',
                price: '$9',
                period: '/month',
                features: [
                  '100 messages/month',
                  'Travel booking',
                  'Food delivery',
                  'Priority support',
                ],
                cta: 'Start Free Trial',
                highlighted: false,
              },
              {
                name: 'Plus',
                price: '$19',
                period: '/month',
                features: [
                  '500 messages/month',
                  'Calendar integration',
                  'Daily briefings',
                  'Wardrobe styling',
                  '24/7 priority support',
                ],
                cta: 'Start Free Trial',
                highlighted: true,
              },
              {
                name: 'Pro',
                price: '$49',
                period: '/month',
                features: [
                  'Unlimited messages',
                  'All features',
                  'Dedicated support',
                  'Custom integrations',
                  'API access',
                ],
                cta: 'Contact Sales',
                highlighted: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-2xl scale-105 border-4 border-blue-400'
                    : 'bg-white text-slate-900 shadow-lg border border-slate-200'
                } transition-all duration-300 hover:-translate-y-1`}
              >
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <span className="bg-white text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className={plan.highlighted ? 'text-blue-100' : 'text-slate-500'}>
                    {plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <svg
                        className={`w-5 h-5 mr-2 mt-0.5 ${
                          plan.highlighted ? 'text-blue-200' : 'text-blue-600'
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className={plan.highlighted ? 'text-white' : 'text-slate-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_LINK}
                  className={`block w-full text-center py-3 rounded-full font-semibold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'How does Orbit work?',
                a: 'Simply scan the QR code or click the button above to start chatting with Orbit on WhatsApp. Tell Orbit what you need, and it will handle the rest - from research to booking to checkout.',
              },
              {
                q: 'Is my payment information secure?',
                a: 'Absolutely. We use bank-level encryption and comply with PCI DSS standards. Your payment details are encrypted and never stored in plain text. We partner with Stripe for secure payment processing.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes! You can upgrade, downgrade, or cancel your subscription at any time. No long-term commitments required.',
              },
              {
                q: 'What happens when I reach my message limit?',
                a: "You'll receive a notification when you're close to your limit. You can upgrade to a higher tier at any time, or wait until next month when your limit resets.",
              },
              {
                q: 'Does Orbit have access to my WhatsApp messages?',
                a: 'No. Orbit only sees messages you send directly to the Orbit WhatsApp number. Your private conversations remain private.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                <h3 className="text-lg font-semibold mb-3 text-slate-900">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-900">
            Ready to simplify your life?
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Join thousands of users who let Orbit handle the busywork.
          </p>
          <a
            href={WHATSAPP_LINK}
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Start Chatting Now
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
                <span className="text-xl font-bold">Orbit</span>
              </div>
              <p className="text-slate-400">
                Your AI assistant that lives on WhatsApp.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2026 Orbit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
