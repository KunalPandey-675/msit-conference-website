"use client";

export default function CMTAcknowledgment() {
  return (
    <section className="w-full bg-blue-50 mb-9 border-t border-gray-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">CMT Acknowledgment</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          The peer-review process for this conference was managed using Microsoft CMT (
          <a
            href="https://cmt3.research.microsoft.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://cmt3.research.microsoft.com
          </a>
          ). Microsoft provided this service free of charge, covering all cloud, development, and support costs.
        </p>
      </div>
    </section>
  );
}
