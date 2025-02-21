

import React, { useEffect, useState } from "react";
import { Copy } from "lucide-react";
import { useToast } from "@chakra-ui/react";
import DocsLayout from "@/components/ui/DocsLayout";
import { useRouter } from "next/router";

const ApiDeviceDataDocs = () => {
  const toast = useToast();
  const [selectedLang, setSelectedLang] = useState("curl");
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [id]);

  useEffect(() => {
    const updateUrlWithoutRerender = (sectionId) => {
      if (sectionId && window.location.pathname.includes("/docs/api/device")) {
        const newUrl = `/docs/api/device/${sectionId}`;
        window.history.replaceState(
          { ...window.history.state, as: newUrl, url: newUrl },
          "",
          newUrl
        );
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const viewportHeight = window.innerHeight;
            const elementTop = entry.boundingClientRect.top;

            if (
              elementTop > viewportHeight * 0.15 &&
              elementTop < viewportHeight * 0.4
            ) {
              const sectionId = entry.target.id;
              if (sectionId) {
                updateUrlWithoutRerender(sectionId);
              }
            }
          }
        });
      },
      {
        threshold: [0, 0.25, 0.5],
        rootMargin: "-18% 0px -60% 0px",
      }
    );

    const sections = document.querySelectorAll(
      ' [id="get-device-data"], [id="get-all-devices"], [id="add-device"]'
    );
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast({
        description: "Copied to clipboard",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
        variant: "solid",
      });
    } catch (err) {
      toast({
        description: "Failed to copy text",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "bottom-right",
        variant: "solid",
      });
      console.error("Failed to copy text:", err);
    }
  };

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

  // GET Device Data API
  const getDeviceDataExample = {
    curl: `curl --location 'https://apidev.xbattery.energy/v1/devices/{deviceId}/telemetry?timeRange=latest' \\
      -H 'ApiKey: f76d******************d2a'`,
    javascript: `var axios = require('axios');
  var config = {
    method: 'get',
    url: 'https://apidev.xbattery.energy/v1/devices/{deviceId}/telemetry?timeRange=latest',
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
  conn.request("GET", "/v1/devices/{deviceId}/telemetry?timeRange=latest", payload, headers)
  res = conn.getresponse()
  data = res.read()
  print(data.decode("utf-8"))`,
  };

  // GET All Devices API
  const getAllDevicesExample = {
    curl: `curl --location 'https://apidev.xbattery.energy/v1/devices' \\
      -H 'ApiKey: f76d******************d2a'`,
    javascript: `var axios = require('axios');
  var config = {
    method: 'get',
    url: 'https://apidev.xbattery.energy/v1/devices',
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
  conn.request("GET", "/v1/devices", payload, headers)
  res = conn.getresponse()
  data = res.read()
  print(data.decode("utf-8"))`,
  };

  // POST Add Device API
  const addDeviceExample = {
    curl: `curl --location 'https://apidev.xbattery.energy/v1/devices' \\
      -H 'ApiKey: f76d******************d2a' \\
      -H 'Content-Type: application/json' \\
      --data '{
        "deviceId": "DVC12345",
        "name": "Battery Storage Unit",
        "model": "BESSModel-X",
        "location": "Delhi"
      }'`,
    javascript: `var axios = require('axios');
  var data = {
    "deviceId": "DVC12345",
    "name": "Battery Storage Unit",
    "model": "BESSModel-X",
    "location": "Delhi"
  };
  
  var config = {
    method: 'post',
    url: 'https://apidev.xbattery.energy/v1/devices',
    headers: {
      'ApiKey': 'f76d******************d2a',
      'Content-Type': 'application/json'
    },
    data: data
  };
  
  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });`,
    python: `import http.client
  import json
  
  conn = http.client.HTTPSConnection("apidev.xbattery.energy")
  payload = json.dumps({
      "deviceId": "DVC12345",
      "name": "Battery Storage Unit",
      "model": "BESSModel-X",
      "location": "Delhi"
  })
  headers = {
      'ApiKey': 'f76d******************d2a',
      'Content-Type': 'application/json'
  }
  conn.request("POST", "/v1/devices", payload, headers)
  res = conn.getresponse()
  data = res.read()
  print(data.decode("utf-8"))`,
  };

  // Updated GET Device Data section with response example
  const getDeviceDataResponse = {
    success: true,
    data: [
      {
        deviceId: "STM32H753ZI",
        Device_id: "BMS_DEVICE_1",
        pack_voltage: 41.2708,
        cell_voltage: [
          2.6968, 2.7811, 2.8042, 2.7843, 2.8008, 2.7985, 2.7929, 2.8156,
          2.7982, 2.6405, 2.743, 2.6616, 2.7149, 2.7432, 2.7851,
        ],
        temperature: 27.315,
        pack_current: 0,
        soc: 21.02,
        ocv_soc: 21.82,
        soh: 0,
        bms_state: "DISCHARGING",
        main_contactor_state: true,
        charger_contactor_state: false,
        id: "3806730799eb-42559efd-3afdd8b56d87",
        _ts: 1736784740,
      },
    ],
    meta: {
      organizationId: 1,
      deviceId: "STM32H753ZI",
      timeRange: "latest",
      timestamp: "20250220T102405.103Z",
    },
  };

  // Updated GET All Devices section with response example
  const getAllDevicesResponse = {
    success: true,
    data: [
      {
        DeviceId: "DVC12345",
        OrganizationId: 1,
        Name: "Battery Storage Unit",
        Model: "BESSModel-X",
        Location: "Delhi",
        LastConnected: "20250220T090354.130Z",
        Status: "enabled",
        CreatedAt: "20250220T090354.490Z",
        UpdatedAt: "20250220T090354.133Z",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-950 p-2 sm:p-4 md:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0 text-white px-2 sm:px-4 md:px-8">
        Device API Documentation
      </h1>

      <div className="space-y-4 sm:space-y-3 md:space-y-4">
        {/* Base URL Section */}
        {/* <div className="h-[2rem]" id="base-url"></div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-2 sm:px-4 md:px-8">
          <div className="flex-1">
            <div className="bg-gray-900/50 rounded-lg p-4 sm:p-6 h-full">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Base URL
              </h2>
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
        </div> */}

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

        

        {/* GET Device Data Section - Updated */}
        <div className="h-[2rem]" id="get-device-data"></div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-2 sm:px-4 md:px-8">
          <div className="flex-1">
            <h2 className="text-lg sm:text-2xl font-semibold text-white mb-4">
              Get Device Data
            </h2>
            <div className="bg-gray-900/50 rounded-lg p-4 sm:p-6 space-y-6">
              {/* Endpoint */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Endpoint
                </h3>
                <code className="text-blue-400 text-sm">
                  GET /devices/{"{deviceId}"}/telemetry
                </code>
              </div>

              {/* Query Parameters */}
              <div className="max-w-2xl p-6 bg-gray-900 rounded-lg">
      <h3 className="text-xl font-semibold text-white mb-6">
        Query Parameters
      </h3>
      
      <div className="bg-gray-800 p-6 rounded-lg space-y-6">
        <div>
          <div className="flex items-start gap-2">
            <code className="text-blue-400">timeRange</code>
            <span className="text-gray-400">or</span>
            <div className="space-y-1">
              <code className="text-blue-400">start-end</code>
              
            </div>
          </div>
          
          <div className="mt-4 pl-4 border-l-2 border-gray-700">
            <p className="text-sm text-gray-300 mb-3">
              Use either timeRange preset or specific start/end dates:
            </p>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-200">timeRange options:</p>
                <ul className="mt-2 space-y-1">
                  {["last5mins", "last1hour", "last7days", "latest"].map(range => (
                    <li key={range} className="text-sm text-gray-300">
                      <code className="text-emerald-400">{range}</code>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-200">Or date range:</p>
                <ul className="mt-2 space-y-1">
                  <li className="text-sm text-gray-300">
                    <code className="text-emerald-400">start</code>: ISO8601 format
                  </li>
                  <li className="text-sm text-gray-300">
                    <code className="text-emerald-400">end</code>: ISO8601 format
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

              {/* Response Structure */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Response Structure
                </h3>
                <div className="bg-gray-800 p-4 rounded-md">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    Response Fields:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>
                      <code className="text-blue-400">pack_voltage</code>:
                      Battery pack voltage
                    </li>
                    <li>
                      <code className="text-blue-400">cell_voltage</code>: Array
                      of individual cell voltages
                    </li>
                    <li>
                      <code className="text-blue-400">temperature</code>:
                      Battery temperature
                    </li>
                    <li>
                      <code className="text-blue-400">soc</code>: State of
                      charge
                    </li>
                    <li>
                      <code className="text-blue-400">bms_state</code>: Current
                      BMS state
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[45%] relative">
            <div className=" h-auto sticky top-20 right-0">
              <div className="flex flex-col gap-6">
                {/* Request Example */}
                <div className="bg-gray-900 rounded-lg p-4 sm:p-6 ">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xs font-semibold text-gray-400">
                        REQUEST EXAMPLE
                      </h3>
                      <div className="flex items-center gap-2">
                        <select
                          className="bg-gray-900 text-gray-400 text-xs rounded-lg px-3 py-2 
                      border border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 
                      hover:border-gray-700 transition-colors duration-200 appearance-none 
                      cursor-pointer min-w-[100px]"
                          onChange={(e) => setSelectedLang(e.target.value)}
                          value={selectedLang}
                        >
                          <option value="curl">cURL</option>
                          <option value="javascript">JavaScript</option>
                          <option value="python">Python</option>
                        </select>
                        <CopyButton text={getDeviceDataExample[selectedLang]} />
                      </div>
                    </div>
                    <pre className="text-xs text-gray-300 overflow-x-auto">
                      {getDeviceDataExample[selectedLang]}
                    </pre>
                  </div>
                </div>

                {/* Response Example */}
                <div className="bg-gray-900 rounded-lg p-4 sm:p-6 max-h-[500px] overflow-scroll">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xs font-semibold text-gray-400">
                        RESPONSE EXAMPLE
                      </h3>
                      <CopyButton
                        text={JSON.stringify(getDeviceDataResponse, null, 2)}
                      />
                    </div>
                    <pre className="text-xs text-gray-300 overflow-x-auto">
                      {JSON.stringify(getDeviceDataResponse, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GET All Devices Section */}
        <div className="h-[2rem]" id="get-all-devices"></div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-2 sm:px-4 md:px-8">
          <div className="flex-1">
            <h2 className="text-lg sm:text-2xl font-semibold text-white mb-4">
              Get All Devices
            </h2>
            <div className="bg-gray-900/50 rounded-lg p-4 sm:p-6 space-y-6">
              {/* Endpoint */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Endpoint
                </h3>
                <code className="text-blue-400 text-sm">GET /devices</code>
              </div>

              {/* Response Structure */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Response Structure
                </h3>
                <div className="bg-gray-800 p-4 rounded-md">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    Response Fields:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>
                      <code className="text-blue-400">DeviceId</code>: Unique
                      identifier for the device
                    </li>
                    <li>
                      <code className="text-blue-400">OrganizationId</code>:
                      Organization identifier
                    </li>
                    <li>
                      <code className="text-blue-400">Name</code>: Device name
                    </li>
                    <li>
                      <code className="text-blue-400">Model</code>: Device model
                    </li>
                    <li>
                      <code className="text-blue-400">Location</code>: Device
                      location
                    </li>
                    <li>
                      <code className="text-blue-400">LastConnected</code>: Last
                      connection timestamp
                    </li>
                    <li>
                      <code className="text-blue-400">Status</code>: Device
                      status
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[45%] relative">
            <div className="h-auto sticky top-20 right-0">
              <div className="flex flex-col gap-6">
                {/* Request Example */}
                <div className="bg-gray-900 rounded-lg p-4 sm:p-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xs font-semibold text-gray-400">
                        REQUEST EXAMPLE
                      </h3>
                      <div className="flex items-center gap-2">
                        <select
                          className="bg-gray-900 text-gray-400 text-xs rounded-lg px-3 py-2 
                  border border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 
                  hover:border-gray-700 transition-colors duration-200 appearance-none 
                  cursor-pointer min-w-[100px]"
                          onChange={(e) => setSelectedLang(e.target.value)}
                          value={selectedLang}
                        >
                          <option value="curl">cURL</option>
                          <option value="javascript">JavaScript</option>
                          <option value="python">Python</option>
                        </select>
                        <CopyButton text={getAllDevicesExample[selectedLang]} />
                      </div>
                    </div>
                    <pre className="text-xs text-gray-300 overflow-x-auto">
                      {getAllDevicesExample[selectedLang]}
                    </pre>
                  </div>
                </div>

                {/* Response Example */}
                <div className="bg-gray-900 rounded-lg p-4 sm:p-6 max-h-[500px] overflow-scroll">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xs font-semibold text-gray-400">
                        RESPONSE EXAMPLE
                      </h3>
                      <CopyButton
                        text={JSON.stringify(getAllDevicesResponse, null, 2)}
                      />
                    </div>
                    <pre className="text-xs text-gray-300 overflow-x-auto">
                      {JSON.stringify(getAllDevicesResponse, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* POST Add Device Section */}
        <div className="h-[2rem]" id="add-device"></div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-2 sm:px-4 md:px-8 " >
          <div className="flex-1">
            <h2 className="text-lg sm:text-2xl font-semibold text-white mb-4 mt-10">
              Add Device
            </h2>
            <div className="bg-gray-900/50 rounded-lg p-4 sm:p-6 space-y-6">
              {/* Endpoint */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Endpoint
                </h3>
                <code className="text-blue-400 text-sm">POST /devices</code>
              </div>

              {/* Request Body Parameters */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Request Body Parameters
                </h3>
                <div className="bg-gray-800 p-4 rounded-md">
                  <ul className="space-y-4">
                    <li>
                      <code className="text-blue-400">deviceId</code>
                      <p className="text-sm text-gray-300 mt-1">
                        Unique identifier for the device
                      </p>
                    </li>
                    <li>
                      <code className="text-blue-400">name</code>
                      <p className="text-sm text-gray-300 mt-1">
                        Name of the device
                      </p>
                    </li>
                    <li>
                      <code className="text-blue-400">model</code>
                      <p className="text-sm text-gray-300 mt-1">
                        Model of the device
                      </p>
                    </li>
                    <li>
                      <code className="text-blue-400">location</code>
                      <p className="text-sm text-gray-300 mt-1">
                        Physical location of the device
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Response Structure */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  Response Structure
                </h3>
                <div className="bg-gray-800 p-4 rounded-md">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">
                    Response Fields:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>
                      <code className="text-blue-400">success</code>: Operation
                      status
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[45%] relative ">
            <div className="h-auto sticky top-20 right-0">
              <div className="flex flex-col gap-6">
                {/* Request Example */}
                <div className="bg-gray-900 rounded-lg p-4 sm:p-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xs font-semibold text-gray-400">
                        REQUEST EXAMPLE
                      </h3>
                      <div className="flex items-center gap-2">
                        <select
                          className="bg-gray-900 text-gray-400 text-xs rounded-lg px-3 py-2 
                  border border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 
                  hover:border-gray-700 transition-colors duration-200 appearance-none 
                  cursor-pointer min-w-[100px]"
                          onChange={(e) => setSelectedLang(e.target.value)}
                          value={selectedLang}
                        >
                          <option value="curl">cURL</option>
                          <option value="javascript">JavaScript</option>
                          <option value="python">Python</option>
                        </select>
                        <CopyButton text={addDeviceExample[selectedLang]} />
                      </div>
                    </div>
                    <pre className="text-xs text-gray-300 overflow-x-auto">
                      {addDeviceExample[selectedLang]}
                    </pre>
                  </div>
                </div>

                {/* Response Example */}
                <div className="bg-gray-900 rounded-lg p-4 sm:p-6">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xs font-semibold text-gray-400">
                        RESPONSE EXAMPLE
                      </h3>
                      <CopyButton
                        text={JSON.stringify({ success: true }, null, 2)}
                      />
                    </div>
                    <pre className="text-xs text-gray-300 overflow-x-auto">
                      {JSON.stringify({ success: true }, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
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
