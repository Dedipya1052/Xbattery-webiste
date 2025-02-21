import DocsLayout from '@/components/ui/DocsLayout';
import { Copy } from 'lucide-react';
import React, { useState } from 'react'

const Authentication = () => {

    const [selectedLang, setSelectedLang] = useState("curl");


    const CopyButton = ({ text }) => (
        <Copy
          className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200"
          onClick={() => handleCopy(text)}
        />
      );

      const authExamples = {
        curl: `curl --location 'https://apidev.xbattery.energy/v1/devices/{deviceId}/telemetry' \\
        -H 'ApiKey: f76d******************d2a'`,
        javascript: `var axios = require('axios');
    var config = {
      method: 'get',
      url: 'https://apidev.xbattery.energy/v1/devices/{deviceId}/telemetry',
      headers: {
        'ApiKey': 'f76d******************d2a'
      }
    };
    
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });`,
        python: `import http.client
    
    conn = http.client.HTTPSConnection("apidev.xbattery.energy")
    payload = ''
    headers = {
        'ApiKey': 'f76d******************d2a'
    }
    conn.request("GET", "/v1/devices/{deviceId}/telemetry", payload, headers)
    res = conn.getresponse()
    data = res.read()
    print(data.decode("utf-8"))`,
      };
    

    return (
        <DocsLayout>
        <div className="min-h-screen bg-gray-950 p-2 sm:p-4 md:p-6">
          <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0 text-white px-2 sm:px-4 md:px-8">
          Authentication
          </h1>
    
          <div className="space-y-4 sm:space-y-3 md:space-y-4">
            
           
    
            {/* Authentication Section */}
            <div className="h-[2rem]" id="authentication"></div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-2 sm:px-4 md:px-8">
              <div className="flex-1">
                <div className="bg-gray-900/50 rounded-lg p-4 sm:p-6 h-auto">
                  {/* <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                    Authentication
                  </h2> */}
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
            </div>

          </div>
        </div>
        </DocsLayout>
      );
}
export default Authentication;
