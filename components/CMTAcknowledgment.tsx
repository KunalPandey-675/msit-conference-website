"use client";

import { Button } from "@/components/ui/button"
import { Award } from "lucide-react"

export default function CMTAcknowledgment() {
  return (
    <section className="w-full bg-blue-50 mb-9 border-t border-gray-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">CMT Acknowledgment</h2>
        <p className="text-sm text-gray-700 leading-relaxed mb-6">
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
        <Button 
          onClick={() => window.location.href = '/acknowledgment'}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          <Award className="w-4 h-4 mr-2" />
          View Full Acknowledgments
        </Button>
      </div>
    </section>
  );
}
