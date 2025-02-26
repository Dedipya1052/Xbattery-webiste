import React from 'react';
import { ArrowRight, Code, Mail } from 'lucide-react';
import Link from 'next/link';
import DocsLayout from '@/components/ui/DocsLayout';

const DocIntroPage = () => {
  return (
    <DocsLayout>
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-10">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Welcome to Our Documentation
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to integrate and build with our platform
          </p>
        </div>

        {/* Introduction Section */}
        <div className="space-y-4 max-w-3xl mx-auto text-center">
          <p className="text-gray-300 leading-relaxed">
          Our guides and resources help you get started with our platform quickly. The documentation is clear and concise, covering API details like request/response formats, authentication, and usage examples. Whether you're new or experienced, you'll find what you need for seamless integration.          </p>
         
        </div>

        {/* Documentation Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white text-center">
            Available Documentation
          </h2>
          
          <div className="grid gap-4 mt-4">
            <Link 
              href="/docs/api"
              className="block rounded-lg bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 border border-gray-800 
              hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10 group"
            >
              <div className="p-6">
                <div className="flex items-start gap-6">
                  <div className="rounded-lg p-3 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
                    <Code className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        API Documentation
                      </h3>
                      <span className="px-2 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full">
                        Latest
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Complete API reference, authentication guides, and integration examples for our battery monitoring system.
                    </p>
                    <div className="flex items-center text-blue-400 hover:text-blue-300 font-medium group/link">
                      View Documentation
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Coming Soon Section */}
          {/* <div className="mt-8 text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border border-gray-800">
              <p className="text-sm text-gray-400">
                Additional documentation sections coming soon
              </p>
            </div>
          </div> */}
        </div>

        {/* Common Topics */}
        {/* <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white">Common Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Authentication",
              "Rate Limits",
              "Error Handling",
              "Best Practices"
            ].map((topic) => (
              <Link
                key={topic}
                href={`/docs/api/${topic.toLowerCase().replace(' ', '-')}`}
                className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-800 
                hover:border-blue-500/50 group transition-all"
              >
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {topic}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
              </Link>
            ))}
          </div>
        </div> */}

        {/* Help Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center space-y-4">
            <h2 className="text-xl font-medium text-white">Need Help?</h2>
            <p className="text-gray-400">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <a 
              href="mailto:support@xbattery.energy"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
             Contact
            </a>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
};

export default DocIntroPage;