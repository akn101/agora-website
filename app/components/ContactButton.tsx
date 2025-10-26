'use client';

export default function ContactButton() {
  const handleClick = () => {
    // Construct email dynamically to avoid scrapers
    const user = 'agora.project';
    const domain = 'akn.org.uk';
    const subject = 'Agora Project Inquiry';
    const body = `Hi,

I'm interested in learning more about Agora and how I can get involved.

Name:
Organization (if applicable):

Message: `;

    window.location.href = `mailto:${user}@${domain}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="text-center">
      <button
        onClick={handleClick}
        className="inline-block px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-all hover:scale-105 shadow-lg"
      >
        Contact Us
      </button>
      <p className="text-sm text-slate-500 mt-6">
        Click above to send us an email
      </p>
    </div>
  );
}
