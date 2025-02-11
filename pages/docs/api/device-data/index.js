import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import { useToast } from '@chakra-ui/react';
import DocsLayout from '@/components/ui/DocsLayout';



const ApiDeviceDataDocs = () => {
  const toast = useToast();
  const [selectedLang, setSelectedLang] = useState('curl');

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        description: "Copied to clipboard",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
        variant: 'solid',
      });
    } catch (err) {
      toast({
        description: "Failed to copy text",
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right',
        variant: 'solid',
      });
      console.error('Failed to copy text:', err);
    }
  };

  const CopyButton = ({ text }) => (
    <Copy 
      className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200" 
      onClick={() => handleCopy(text)}
    />
  );

  const authExamples = {
    curl: `curl --location 'https://apidev.xbattery.energy/v1/organizations/{organizationId}/devices/{deviceId}/telemetry/latest' \\
    -H 'ApiKey: f76d******************d2a'`,
    javascript: `var axios = require('axios');
var config = {
  method: 'get',
  url: 'https://apidev.xbattery.energy/v1/organizations/{organizationId}/devices/{deviceId}/telemetry/latest',
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
conn.request("GET", "/v1/organizations/{organizationId}/devices/{deviceId}/telemetry/latest", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))`
  };

  return (
    <div className="min-h-screen bg-gray-950 p-2 sm:p-4 md:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0 text-white px-2 sm:px-4 md:px-8">
        BESS API Documentation
      </h1>

      <div className="space-y-4 sm:space-y-3 md:space-y-4">
        {/* Base URL Section */}
        <div className="h-[2rem]" id="base-url"></div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-2 sm:px-4 md:px-8">
          <div className="flex-1">
            <div className="bg-gray-900/50 rounded-lg p-4 sm:p-6 h-full">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Base URL
              </h2>
              <div className="text-sm sm:text-base text-gray-300 space-y-4">
                <p>
                  All API requests should be made to our secure xBattery API
                  endpoint:
                </p>
                <code className="text-blue-400 block text-sm break-all">
                  https://apidev.xbattery.energy
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
                <h3 className="text-xs sm:text-sm font-semibold text-gray-400">
                  BASE URL
                </h3>
                <CopyButton text="https://apidev.xbattery.energy" />
              </div>
              <pre className="text-xs sm:text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap break-all">
                https://apidev.xbattery.energy
              </pre>
            </div>
          </div>
        </div>

        {/* Authentication Section */}
        <div className="h-[2rem]" id="authentication"></div>
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
                  <h3 className="text-xs sm:text-sm font-semibold text-gray-400">
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
                <pre className="text-xs sm:text-sm text-gray-300 overflow-x-auto">
                  {authExamples[selectedLang]}
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Parameters Section */}
        <div className="h-[2rem]" id="parameters"></div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-2 sm:px-4 md:px-8">
          <div className="flex-1">
            <div className="bg-gray-900/50 rounded-lg p-4 sm:p-6 h-auto">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Query Parameters
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-300">
                <p>The telemetry endpoint requires the following parameters:</p>
                <div className="bg-gray-800 p-3 sm:p-4 rounded-md">
                  <h3 className="font-semibold mb-3">Required Parameters</h3>
                  <ul className="space-y-4">
                    <li>
                      <code className="text-blue-400">organizationId</code>
                      <p className="mt-1">Your organization identifier</p>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Example: xbattery
                      </p>
                    </li>
                    <li>
                      <code className="text-blue-400">deviceId</code>
                      <p className="mt-1">
                        Unique identifier for the BMS device
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Example: BMSDEVICE1
                      </p>
                    </li>
                    {/* <li>
                      <code className="text-blue-400">timeRange</code>
                      <p className="mt-1">Time period for data retrieval</p>
                      <ul className="list-disc pl-4 mt-2 space-y-1 text-xs sm:text-sm text-gray-400">
                        <li>latest - Most recent data point</li>
                        <li>last5mins - Last 5 minutes of data</li>
                        <li>last1hour - Last hour of data</li>
                        <li>last7days - Last 7 days of data</li>
                      </ul>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[45%] relative">
            <div className="bg-gray-900 rounded-lg p-4 sm:p-6 h-auto sticky top-20 right-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-400">
                  PARAMETERS EXAMPLE
                </h3>
                <CopyButton
                  text={`GET /v1/organizations/{organizationId}/devices/{deviceId}/telemetry/latest`}
                />
              </div>
              <pre className="text-xs sm:text-sm text-gray-300 overflow-x-auto">
                {`GET /v1/organizations/`}
                <span className="text-blue-400">{`{organizationId}`}</span>
                {`/devices/`}
                <span className="text-blue-400">{`{deviceId}`}</span>
                {`/telemetry/latest`}
              </pre>
            </div>
          </div>
        </div>

        {/* Response Format Section */}
        <div className="h-[2rem]" id="response"></div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-2 sm:px-4 md:px-8 mb-8">
          <div className="flex-1">
            <div className="bg-gray-900/50 rounded-lg p-4 sm:p-6 h-full">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Response Format
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-300">
                <p>
                  The API returns data in JSON format with comprehensive device
                  telemetry:
                </p>
                <div className="bg-gray-800 p-3 sm:p-4 rounded-md">
                  <h3 className="font-semibold mb-3">Response Structure</h3>
                  <ul className="space-y-3">
                    <li>
                      <code className="text-blue-400">success</code>: Boolean
                      <p className="text-xs sm:text-sm text-gray-400">
                        Indicates if the request was successful
                      </p>
                    </li>
                    <li>
                      <code className="text-blue-400">data</code>: Array
                      <ul className="list-disc pl-4 mt-2 space-y-1 text-xs sm:text-sm text-gray-400">
                        <li>deviceId: String (Device identifier)</li>
                        <li>pack_voltage: Number (Pack voltage in V)</li>
                        <li>
                          cell_voltage: Array of Numbers (Individual cell
                          voltages)
                        </li>
                        <li>temperature: Number (Temperature in °C)</li>
                        <li>pack_current: Number (Pack current in A)</li>
                        <li>soc: Number (State of charge in %)</li>
                        <li>bms_state: String (e.g., CHARGING, DISCHARGING)</li>
                        <li>main_contactor_state: Boolean</li>
                        <li>charger_contactor_state: Boolean</li>
                      </ul>
                    </li>
                    <li>
                      <code className="text-blue-400">meta</code>: Object
                      <ul className="list-disc pl-4 mt-2 space-y-1 text-xs sm:text-sm text-gray-400">
                        <li>organizationId: String</li>
                        <li>deviceId: String</li>
                        <li>timestamp: ISO 8601 string</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[45%] relative">
            <div className="bg-gray-900 rounded-lg p-4 sm:p-6 h-auto sticky top-20 right-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-400">
                  RESPONSE EXAMPLE
                </h3>
                <CopyButton
                  text={`{
  "success": true,
  "data": [
    {
      "deviceId": "deviceId",
      "pack_voltage": 41.2708,
      "cell_voltage": [
        2.6968, 2.7811, 2.8042, 2.7843,
        2.8008, 2.7985, 2.7929,2.8156,
        2.7982, 2.6405, 2.7430, 2.6616,
        2.7149, 2.7432, 2.7851
      ],
      "temperature": 27.315,
      "pack_current": 0,
      "soc": 21.02,
      "ocv soc": 21.82,
      "soh": 0,
      "bms_state": "DISCHARGING",
      "main_contactor_state": true,
      "charger_contactor_state": false,
      "id": "38067307-99eb-4255-9efd-3afdd8b56d87",
      "_ts": 1736784740
    }
  ],
  "meta": {
    "organizationId": "xbattery",
    "deviceId": "BMS_device_1",
    "timestamp": "2025-01-31T06:49:47.416Z"
  }
}`}
                />
              </div>
              <pre className="text-xs sm:text-sm text-gray-300 overflow-x-auto">
                {`{
  "success": true,
  "data": [{
      "deviceId": "deviceId",
      "pack_voltage": 41.2708,
      "cell_voltage": [
        2.6968, 2.7811, 2.8042, 2.7843,
        2.8008, 2.7985, 2.7929, 2.8156,
        2.7982, 2.6405, 2.7430, 2.6616,
        2.7149, 2.7432, 2.7851
      ],
      "temperature": 27.315,
      "pack_current": 0,
      "soc": 21.02,
      "ocv soc": 21.82,
      "soh": 0,
      "bms_state": "DISCHARGING",
      "main_contactor_state": true,
      "charger_contactor_state": false,
      "id": "38067307-99eb-4255-9efd-3afdd8b56d87",
      "_ts": 1736784740
    }
  ],
  "meta": {
    "organizationId": "xbattery",
    "deviceId": "BMS_device_1",
    "timestamp": "2025-01-31T06:49:47.416Z"
  }
}`}
              </pre>
            </div>
          </div>
        </div>

        {/* Error Responses Section */}
        <div className="h-[2rem]" id="errorResponse"></div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-2 sm:px-4 md:px-8 mb-8">
          <div className="flex-1">
            <div className="bg-gray-900/50 rounded-lg p-4 sm:p-6 h-full">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Error Responses
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-300">
                <p>The API may return the following error responses:</p>
                <div className="bg-gray-800 p-3 sm:p-4 rounded-md">
                  <h3 className="font-semibold mb-3">Common Error Codes</h3>
                  <ul className="space-y-3">
                    <li>
                      <code className="text-blue-400">401 Unauthorized</code>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Invalid or missing API key
                      </p>
                    </li>
                    <li>
                      <code className="text-blue-400">404 Not Found</code>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Device or organization not found
                      </p>
                    </li>
                    <li>
                      <code className="text-blue-400">400 Bad Request</code>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Invalid request parameters
                      </p>
                    </li>
                    <li>
                      <code className="text-blue-400">
                        500 Internal Server Error
                      </code>
                      <p className="text-xs sm:text-sm text-gray-400">
                        Server-side error occurred
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[45%] relative">
            <div className="bg-gray-900 rounded-lg p-4 sm:p-6 h-auto sticky top-20 right-0">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-400">
                  ERROR RESPONSE EXAMPLE
                </h3>
                <CopyButton
                  text={`{
    "statusCode": 401,
    "message": "Access denied due to invalid subscription key. 
                Make sure to provide a valid key for an active
                subscription."
}`}
                />
              </div>
              <pre className="text-xs sm:text-sm text-gray-300 overflow-x-auto">
                {`{
    "statusCode": 401,
    "message": "Access denied due to invalid subscription key. 
                Make sure to provide a valid key for an active
                subscription."
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



const DeviceDataPage = () => {
  return (
    <DocsLayout>
      <ApiDeviceDataDocs />
    </DocsLayout>
  );
};

export default DeviceDataPage;