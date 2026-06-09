import Link from "next/link";
import Footer from "./components/Footer";

const SUPPORT_EMAIL = "galiette@testing-orbit.com";
const REQUEST_ACCESS_LINK = `mailto:${SUPPORT_EMAIL}?subject=Brevio%20beta%20access%20request`;

const STEPS = [
  {
    step: "1",
    title: "Connect Gmail, read-only",
    description:
      "You connect your Gmail with read-only access. Brevio can read, but never send, modify, label, archive, or delete anything.",
  },
  {
    step: "2",
    title: "Brevio finds what matters",
    description:
      "Brevio reads new messages in your inbox and identifies a small subset as genuinely important.",
  },
  {
    step: "3",
    title: "A founder reviews each alert",
    description:
      "Every candidate alert in this beta is reviewed by Brevio's founder in a private channel before it reaches your phone.",
  },
  {
    step: "4",
    title: "Approved alerts arrive as iMessage",
    description:
      "Approved alerts land on your phone as a short iMessage — the important parts, nothing else.",
  },
  {
    step: "5",
    title: "Reply STOP anytime",
    description:
      "Reply STOP to any Brevio message to stop all future alerts. Reply START to turn them back on.",
  },
];

const NOT_DOING = [
  "Brevio does not send email for you.",
  "Brevio does not modify, label, archive, or delete anything in your Gmail.",
  "Brevio does not read your calendar today.",
  "Brevio does not sell your data.",
  "Brevio does not use your email content to train AI models.",
];

const FAQ = [
  {
    q: "What data does Brevio read?",
    a: "Brevio requests read-only access to your Gmail (the gmail.readonly scope). It reads new inbox messages to identify which are important and produce a one-sentence reason. It never sends, modifies, labels, archives, or deletes anything. See the Privacy Policy for the full detail.",
  },
  {
    q: "Can I stop the alerts?",
    a: "Yes. Reply STOP to any Brevio iMessage and Brevio sends one confirmation, then nothing further. Reply START to re-enable. You can also revoke Gmail access at any time from your Google account permissions.",
  },
  {
    q: "What is the beta?",
    a: "Brevio is in a closed beta with a small number of invited users. Every alert is reviewed by the founder before it is sent. Features, behavior, and scope will change as the beta progresses.",
  },
  {
    q: "Does Brevio read my calendar?",
    a: "Not today. A read-only Calendar feature is planned; it will require its own consent and will be announced in the Privacy Policy before it ships.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg"></div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Brevio
              </span>
            </div>
            <a
              href={REQUEST_ACCESS_LINK}
              className="hidden sm:inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Request access
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center px-4 py-1 mb-6 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">
              Closed beta
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
              Brevio
            </h1>
            <p className="text-xl sm:text-2xl text-slate-700 mb-4 leading-relaxed">
              Brevio is an executive assistant in beta that watches your Gmail
              and tells you only what&apos;s important.
            </p>
            <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
              You stay in control. Brevio surfaces information — it does not send
              email on your behalf, does not write to your calendar, and does not
              act without your approval. Every alert in this beta is reviewed by
              Brevio&apos;s founder before it reaches your phone.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={REQUEST_ACCESS_LINK}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Request access
              </a>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-slate-700 rounded-full font-semibold border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                How it works
              </a>
            </div>

            <p className="text-sm text-slate-400 mt-8">
              Gmail read-only · iMessage alerts · Founder-reviewed
            </p>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-slate-900">
            How it works today
          </h2>
          <p className="text-center text-slate-600 mb-16 text-lg">
            From inbox to iMessage, with a human in the loop.
          </p>
          <div className="space-y-6">
            {STEPS.map((step) => (
              <div
                key={step.step}
                className="flex items-start gap-5 bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center text-xl font-bold">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Brevio does not do */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            What Brevio does not do
          </h2>
          <ul className="space-y-4">
            {NOT_DOING.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-3 bg-white rounded-xl p-5 shadow-md border border-slate-200"
              >
                <svg
                  className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-center text-slate-500 mt-8 text-sm">
            A read-only Calendar feature is planned; it will require its own
            consent and will be announced in the{" "}
            <Link href="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>{" "}
            before it ships.
          </p>
        </div>
      </section>

      {/* Beta status (replaces pricing) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-slate-900">Beta status</h2>
          <p className="text-lg text-slate-600">
            Brevio is in a closed beta with a small number of invited users.
            There is no pricing yet — features, behavior, and scope will change
            as the beta progresses.
          </p>
          <a
            href={REQUEST_ACCESS_LINK}
            className="inline-flex items-center justify-center mt-10 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Request access
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {FAQ.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-200"
              >
                <h3 className="text-lg font-semibold mb-3 text-slate-900">
                  {faq.q}
                </h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-900">
            Want in on the beta?
          </h2>
          <p className="text-xl text-slate-600 mb-10">
            Brevio is invite-only for now. Email us to request access or ask a
            question.
          </p>
          <a
            href={REQUEST_ACCESS_LINK}
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Request access
          </a>
          <p className="text-sm text-slate-500 mt-6">
            Questions:{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-blue-600 hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
