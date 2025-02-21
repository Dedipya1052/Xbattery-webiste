import DocsLayout from '@/components/ui/DocsLayout';
import { Copy } from 'lucide-react';
import React from 'react'

const BaseUrl = () => {

    const CopyButton = ({ text }) => (
        <Copy
          className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200"
          onClick={() => handleCopy(text)}
        />
      );

    return (
        <DocsLayout>
        <div className="min-h-screen bg-gray-950 p-2 sm:p-4 md:p-6">
          <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0 text-white px-2 sm:px-4 md:px-8">
           Base URL
          </h1>
    
          <div className="space-y-4 sm:space-y-3 md:space-y-4">
            {/* Base URL Section */}
            <div className="h-[2rem]" id="base-url"></div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-2 sm:px-4 md:px-8">
              <div className="flex-1">
                <div className="bg-gray-900/50 rounded-lg p-4 sm:p-6 h-full">
                  {/* <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                    Base URL
                  </h2> */}
                  <div className="text-sm sm:text-base text-gray-300 space-y-4">
                    <p>
                      All API requests should be made to our secure Xbattery API
                      endpoint:
                    </p>
                    <code className="text-blue-400 block text-sm break-all">
                      https://apidev.xbattery.energy/v1
                    </code>
                    <p>
                      This endpoint provides access to device telemetry data and
                      requires proper authentication for all requests.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[45%] relative">
                <div className="bg-gray-900 rounded-lg p-4 sm:p-6 h-auto sticky top-20 right-0">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs sm:text-xs font-semibold text-gray-400">
                      BASE URL
                    </h3>
                    <CopyButton text="https://apidev.xbattery.energy/v1" />
                  </div>
                  <pre className="text-xs sm:text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap break-all">
                    https://apidev.xbattery.energy/v1
                  </pre>
                </div>
              </div>
            </div>
    
            {/* Authentication Section */}
            {/* <div className="h-[2rem]" id="authentication"></div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-2 sm:px-4 md:px-8">
              <div className="flex-1">
                <div className="bg-gray-900/50 rounded-lg p-4 sm:p-6 h-auto">
                  <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                    Authentication
                  </h2>
                  <div className="space-y-4 text-sm sm:text-base text-gray-300">
                    <p>
                      All API requests require authentication using an API key. Your
                      API key must be included in the request headers under the
                      'ApiKey' field.
                    </p>
                    <div className="bg-gray-800 p-3 sm:p-4 rounded-md">
                      <h3 className="font-semibold mb-2">API Key Format:</h3>
                      <code className="text-blue-400 text-sm break-all">
                        f76d******************d2a
                      </code>
                      <p className="mt-2">
                        For security, the key is partially masked when displayed.
                      </p>
                    </div>
                    <div className="bg-gray-800 p-3 sm:p-4 rounded-md">
                      <h3 className="font-semibold mb-2">Getting an API Key:</h3>
                      <ol className="list-decimal pl-4 space-y-2">
                        <li>
                          Log in to the{" "}
                          <a
                            href="https://customerappdev.xbattery.energy"
                            target="_blank"
                            rel="noreferrer"
                            className=" hover:underline"
                          >
                            customer portal
                          </a>
                        </li>
                        <li>Navigate to "settings/api-keys"</li>
                        <li>Follow the instructions to generate a new API key</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[45%] relative">
                <div className="bg-gray-900 rounded-lg p-4 sm:p-6 h-auto sticky top-20 right-0">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs sm:text-xs font-semibold text-gray-400">
                        AUTHENTICATION EXAMPLE
                      </h3>
                      <div className="flex items-center gap-2">
                        <select
                          className="bg-gray-900 text-gray-400 text-xs sm:text-sm rounded-lg px-3 py-2 
                          border border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 
                          hover:border-gray-700 transition-colors duration-200 appearance-none 
                          cursor-pointer min-w-[100px]"
                          onChange={(e) => setSelectedLang(e.target.value)}
                          value={selectedLang}
                        >
                          <option value="curl" className="bg-gray-900">
                            cURL
                          </option>
                          <option value="javascript" className="bg-gray-900">
                            JavaScript
                          </option>
                          <option value="python" className="bg-gray-900">
                            Python
                          </option>
                        </select>
                        <CopyButton text={authExamples[selectedLang]} />
                      </div>
                    </div>
                    <pre className="text-xs sm:text-xs text-gray-300 overflow-x-auto">
                      {authExamples[selectedLang]}
                    </pre>
                  </div>
                </div>
              </div>
            </div> */}

          </div>
        </div>
        </DocsLayout>
      );
}

export default BaseUrl;
