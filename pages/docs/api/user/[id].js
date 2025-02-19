// import React, { useEffect, useState } from "react";
// import { Copy } from "lucide-react";
// import { useToast } from "@chakra-ui/react";
// import DocsLayout from "@/components/ui/DocsLayout";
// import { useRouter } from "next/router";

// const ApiUserDocs = () => {
//   const toast = useToast();
//   const [selectedLang, setSelectedLang] = useState("curl");
//   const router = useRouter();
//   const { id } = router.query;

//   useEffect(() => {
//     if (id) {
//       const section = document.getElementById(id);
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }, [id]);

//   useEffect(() => {
//     const updateUrlWithoutRerender = (sectionId) => {
//       if (sectionId && window.location.pathname.includes("/docs/api/user")) {
//         // Construct the new URL
//         const newUrl = `/docs/api/user/${sectionId}`;

//         // Update the URL without triggering a page reload or re-render
//         window.history.replaceState(
//           { ...window.history.state, as: newUrl, url: newUrl },
//           "",
//           newUrl
//         );
//       }
//     };

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const viewportHeight = window.innerHeight;
//             const elementTop = entry.boundingClientRect.top;

//             if (
//               elementTop > viewportHeight * 0.15 &&
//               elementTop < viewportHeight * 0.4
//             ) {
//               const sectionId = entry.target.id;
//               if (sectionId) {
//                 updateUrlWithoutRerender(sectionId);
//               }
//             }
//           }
//         });
//       },
//       {
//         threshold: [0, 0.25, 0.5],
//         rootMargin: "-18% 0px -60% 0px",
//       }
//     );

//     // Observe section divs
//     const sections = document.querySelectorAll(
//       '[id="base-url"], [id="authentication"], [id="endpoints"], [id="response"]'
//     );
//     sections.forEach((section) => observer.observe(section));

//     return () => observer.disconnect();
//   }, []);

//   const handleCopy = async (text) => {
//     try {
//       await navigator.clipboard.writeText(text);
//       toast({
//         description: "Copied to clipboard",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//         position: "bottom-right",
//         variant: "solid",
//       });
//     } catch (err) {
//       toast({
//         description: "Failed to copy text",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//         position: "bottom-right",
//         variant: "solid",
//       });
//       console.error("Failed to copy text:", err);
//     }
//   };

//   const CopyButton = ({ text }) => (
//     <Copy
//       className="h-4 w-4 text-gray-400 hover:text-white cursor-pointer transition-colors duration-200"
//       onClick={() => handleCopy(text)}
//     />
//   );

//   const authExamples = {
//     curl: `curl -X POST "https://bess-apim-dev.azure-api.net/bess/users/login" \\
//     -H "Content-Type: application/json" \\
//     -d '{
//       "email": "user@example.com",
//       "password": "your_password"
//     }'`,
//     javascript: `const response = await fetch(
//     'https://bess-apim-dev.azure-api.net/bess/users/login',
//     {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         email: 'user@example.com',
//         password: 'your_password'
//       })
//     }
//   );`,
//     python: `import requests

// response = requests.post(
//     'https://bess-apim-dev.azure-api.net/bess/users/login',
//     json={
//         'email': 'user@example.com',
//         'password': 'your_password'
//     }
// )`,
//   };

//   return (
//     <div className="min-h-screen bg-gray-950 p-2 sm:p-4 md:p-6">
//       <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0 text-white px-2 sm:px-4 md:px-8">
//         User API Documentation
//       </h1>

//       <div className="space-y-4 sm:space-y-3 md:space-y-4">
//         {/* Base URL Section */}
//         <div className="h-[2rem]" id="base-url"></div>
//         <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-2 sm:px-4 md:px-8">
//           <div className="flex-1">
//             <div className="bg-gray-900/50 rounded-lg p-4 sm:p-6 h-full">
//               <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
//                 Base URL
//               </h2>
//               <div className="text-sm sm:text-base text-gray-300 space-y-4">
//                 <p>
//                   All user-related API requests should be made to our secure
//                   endpoint:
//                 </p>
//                 <code className="text-blue-400 block text-sm break-all">
//                   https://bess-apim-dev.azure-api.net/users
//                 </code>
//                 <p>
//                   This endpoint is secured with Azure API Management and
//                   requires authentication for all requests. HTTPS is mandatory
//                   for all API calls.
//                 </p>
//               </div>
//             </div>
//           </div>
//           <div className="w-full lg:w-[45%] relative">
//             <div className="bg-gray-900 rounded-lg p-4 sm:p-6 h-auto sticky top-20 right-0">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-xs sm:text-sm font-semibold text-gray-400">
//                   BASE URL
//                 </h3>
//                 <CopyButton text="https://bess-apim-dev.azure-api.net/users" />
//               </div>
//               <pre className="text-xs sm:text-sm text-gray-300 overflow-x-auto whitespace-pre-wrap break-all">
//                 https://bess-apim-dev.azure-api.net/users
//               </pre>
//             </div>
//           </div>
//         </div>

//         {/* Authentication Section */}
//         <div className="h-[2rem]" id="authentication"></div>
//         <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-2 sm:px-4 md:px-8">
//           <div className="flex-1">
//             <div className="bg-gray-900/50 rounded-lg p-4 sm:p-6 h-auto">
//               <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
//                 Authentication
//               </h2>
//               <div className="space-y-4 text-sm sm:text-base text-gray-300">
//                 <p>
//                   User API endpoints require both an API key and a valid JWT
//                   token for authentication. Include both in your request
//                   headers.
//                 </p>
//                 <div className="bg-gray-800 p-3 sm:p-4 rounded-md">
//                   <h3 className="font-semibold mb-2">Required Headers:</h3>
//                   <ul className="list-disc pl-4 space-y-2">
//                     <li>ApiKey: Your API access key</li>
//                     <li>Authorization: Bearer token (JWT)</li>
//                   </ul>
//                 </div>
//                 <div className="bg-gray-800 p-3 sm:p-4 rounded-md">
//                   <h3 className="font-semibold mb-2">Token Management:</h3>
//                   <ul className="list-disc pl-4 space-y-2">
//                     <li>Tokens expire after 24 hours</li>
//                     <li>Refresh tokens before expiration</li>
//                     <li>Keep tokens secure in storage</li>
//                     <li>Never expose tokens in client code</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full lg:w-[45%] relative">
//             <div className="bg-gray-900 rounded-lg p-4 sm:p-6 h-auto sticky top-20 right-0">
//               <div className="flex flex-col gap-4">
//                 <div className="flex items-center justify-between">
//                   <h3 className="text-xs sm:text-sm font-semibold text-gray-400">
//                     AUTHENTICATION EXAMPLE
//                   </h3>
//                   <div className="flex items-center gap-2">
//                     <select
//                       className="bg-gray-900 text-gray-400 text-xs sm:text-sm rounded-lg px-3 py-2 
//                       border border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 
//                       hover:border-gray-700 transition-colors duration-200 appearance-none 
//                       cursor-pointer min-w-[100px]"
//                       onChange={(e) => setSelectedLang(e.target.value)}
//                       value={selectedLang}
//                     >
//                       <option value="curl" className="bg-gray-900">
//                         cURL
//                       </option>
//                       <option value="javascript" className="bg-gray-900">
//                         JavaScript
//                       </option>
//                       <option value="python" className="bg-gray-900">
//                         Python
//                       </option>
//                     </select>
//                     <CopyButton text={authExamples[selectedLang]} />
//                   </div>
//                 </div>
//                 <pre className="text-xs sm:text-sm text-gray-300 overflow-x-auto">
//                   {authExamples[selectedLang]}
//                 </pre>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Endpoints Section */}
//         <div className="h-[2rem]" id="endpoints"></div>
//         <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-2 sm:px-4 md:px-8">
//           <div className="flex-1">
//             <div className="bg-gray-900/50 rounded-lg p-4 sm:p-6 h-auto">
//               <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
//                 Available Endpoints
//               </h2>
//               <div className="space-y-4 text-sm sm:text-base text-gray-300">
//                 <p>The user API provides the following endpoints:</p>
//                 <div className="bg-gray-800 p-3 sm:p-4 rounded-md">
//                   <h3 className="font-semibold mb-3">Core Endpoints</h3>
//                   <ul className="space-y-4">
//                     <li>
//                       <code className="text-blue-400">GET /profile</code>
//                       <p className="mt-1">Retrieve user profile information</p>
//                     </li>
//                     <li>
//                       <code className="text-blue-400">PUT /profile</code>
//                       <p className="mt-1">Update user profile data</p>
//                     </li>
//                     <li>
//                       <code className="text-blue-400">POST /preferences</code>
//                       <p className="mt-1">Set user preferences</p>
//                     </li>
//                     <li>
//                       <code className="text-blue-400">GET /activity</code>
//                       <p className="mt-1">Get user activity history</p>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full lg:w-[45%] relative">
//             <div className="bg-gray-900 rounded-lg p-4 sm:p-6 h-auto sticky top-20 right-0">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-xs sm:text-sm font-semibold text-gray-400">
//                   ENDPOINT EXAMPLE
//                 </h3>
//                 <CopyButton
//                   text={`// Get user profile
// GET /profile

// // Update user preferences
// POST /preferences
// {
//   "theme": "dark",
//   "notifications": {
//     "email": true,
//     "push": false
//   },
//   "language": "en"
// }`}
//                 />
//               </div>
//               <pre className="text-xs sm:text-sm text-gray-300 overflow-x-auto">
//                 {`// Get user profile
// GET /profile

// // Update user preferences
// POST /preferences
// {
//   "theme": "dark",
//   "notifications": {
//     "email": true,
//     "push": false
//   },
//   "language": "en"
// }`}
//               </pre>
//             </div>
//           </div>
//         </div>

//         {/* Response Format Section */}
//         <div className="h-[2rem]" id="response"></div>
//         <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-2 sm:px-4 md:px-8 mb-8">
//           <div className="flex-1">
//             <div className="bg-gray-900/50 rounded-lg p-4 sm:p-6 h-full">
//               <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
//                 Response Format
//               </h2>
//               <div className="space-y-4 text-sm sm:text-base text-gray-300">
//                 <p>
//                   All endpoints return data in JSON format with consistent
//                   structure:
//                 </p>
//                 <div className="bg-gray-800 p-3 sm:p-4 rounded-md">
//                   <h3 className="font-semibold mb-3">Response Structure</h3>
//                   <ul className="space-y-3">
//                     <li>
//                       <code className="text-blue-400">success</code>: Boolean
//                       <p className="text-xs sm:text-sm text-gray-400">
//                         Operation status
//                       </p>
//                     </li>
//                     <li>
//                       <code className="text-blue-400">data</code>: Object
//                       <p className="text-xs sm:text-sm text-gray-400">
//                         Response payload
//                       </p>
//                     </li>
//                     <li>
//                       <code className="text-blue-400">message</code>: String
//                       <p className="text-xs sm:text-sm text-gray-400">
//                         Human-readable response message
//                       </p>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full lg:w-[45%] relative">
//             <div className="bg-gray-900 rounded-lg p-4 sm:p-6 h-auto sticky top-20 right-0">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-xs sm:text-sm font-semibold text-gray-400">
//                   RESPONSE EXAMPLE
//                 </h3>
//                 <CopyButton
//                   text={`{
//   "success": true,
//   "data": {
//     "id": "usr_123456",
//     "name": "John Doe",
//     "email": "john.doe@example.com",
//     "role": "admin",
//     "lastLogin": "2024-01-28T15:30:00Z",
//     "preferences": {
//       "theme": "dark",
//       "notifications": {
//         "email": true,
//         "push": false
//       }
//     }
//   },
//   "message": "Profile retrieved successfully"
// }`}
//                 />
//               </div>
//               <pre className="text-xs sm:text-sm text-gray-300 overflow-x-auto">
//                 {`{
//   "success": true,
//   "data": {
//     "id": "usr_123456",
//     "name": "John Doe",
//     "email": "john.doe@example.com",
//     "role": "admin",
//     "lastLogin": "2024-01-28T15:30:00Z",
//     "preferences": {
//       "theme": "dark",
//       "notifications": {
//         "email": true,
//         "push": false
//       }
//     }
//   },
//   "message": "Profile retrieved successfully"
// }`}
//               </pre>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const UserApiPage = () => {
//   return (
//     <DocsLayout>
//       <ApiUserDocs />
//     </DocsLayout>
//   );
// };

// export default UserApiPage;



import React, { useEffect, useState } from "react";
import { Copy } from "lucide-react";
import { useToast } from "@chakra-ui/react";
import DocsLayout from "@/components/ui/DocsLayout";
import { useRouter } from "next/router";

const ApiUserDocs = () => {
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
      if (sectionId && window.location.pathname.includes("/docs/api/user")) {
        // Construct the new URL
        const newUrl = `/docs/api/user/${sectionId}`;

        // Update the URL without triggering a page reload or re-render
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

    // Observe section divs
    const sections = document.querySelectorAll(
      '[id="base-url"], [id="authentication"], [id="endpoints"], [id="response"]'
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
    curl: `curl --location 'https://apidev.xbattery.energy/v1/organizations/users' \\
--header 'ApiKey: cc7****************7cbd'`,
    javascript: `const axios = require('axios');
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://apidev.xbattery.energy/v1/organizations/users',
  headers: { 
    'ApiKey': '*************'
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});`,
    python: `import http.client
conn = http.client.HTTPSConnection("apidev.xbattery.energy")
payload = ''
headers = {
  'ApiKey': '*************'
}
conn.request("GET", "/v1/organizations/users", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))`,
  };

  return (
    <div className="min-h-screen bg-gray-950 p-2 sm:p-4 md:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0 text-white px-2 sm:px-4 md:px-8">
        User API Documentation
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
                  All user-related API requests should be made to our secure
                  endpoint:
                </p>
                <code className="text-blue-400 block text-sm break-all">
                  https://apidev.xbattery.energy
                </code>
                <p>
                  This endpoint is secured with API key authentication and
                  requires proper authorization for all requests. HTTPS is mandatory
                  for all API calls.
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
                  User API endpoints require an API key for authentication. Include it in your request
                  headers.
                </p>
                <div className="bg-gray-800 p-3 sm:p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Required Headers:</h3>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>ApiKey: Your API access key</li>
                  </ul>
                </div>
                {/* <div className="bg-gray-800 p-3 sm:p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Key Management:</h3>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Keep your API key secure</li>
                    <li>Never expose API keys in client-side code</li>
                    <li>Contact xBattery for key rotation if compromised</li>
                    <li>Different permissions may apply to different API keys</li>
                  </ul>
                </div> */}
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

        {/* Endpoints Section */}
        <div className="h-[2rem]" id="endpoints"></div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-2 sm:px-4 md:px-8">
          <div className="flex-1">
            <div className="bg-gray-900/50 rounded-lg p-4 sm:p-6 h-auto">
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
                Available Endpoints
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-gray-300">
                <p>The user API provides the following endpoints:</p>
                <div className="bg-gray-800 p-3 sm:p-4 rounded-md">
                  <h3 className="font-semibold mb-3">Core Endpoints</h3>
                  <ul className="space-y-4">
                    <li>
                      <code className="text-blue-400">GET /users</code>
                      <p className="mt-1">Retrieve all users in your organization</p>
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
                  ENDPOINT EXAMPLE
                </h3>
                <CopyButton
                  text={`// Get all organization users
GET /v1/organizations/users
`}
                />
              </div>
              <pre className="text-xs sm:text-sm text-gray-300 overflow-x-auto">
                {`// Get all organization users
GET /v1/organizations/users
`}
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
                  All endpoints return data in JSON format with consistent
                  structure:
                </p>
                <div className="bg-gray-800 p-3 sm:p-4 rounded-md">
                  <h3 className="font-semibold mb-3">Response Structure</h3>
                  <ul className="space-y-3">
                    <li>
                      <code className="text-blue-400">success</code>: Boolean
                      <p className="text-xs sm:text-sm text-gray-400">
                        Operation status
                      </p>
                    </li>
                    <li>
                      <code className="text-blue-400">data</code>: Array
                      <p className="text-xs sm:text-sm text-gray-400">
                        Response payload containing the user data
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
                  RESPONSE EXAMPLE
                </h3>
                <CopyButton
  text={`{
  "success": true,
  "data": [
    {
      "UserId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "Name": "John Doe",
      "Email": "john.doe@example.com",
      "OrganizationId": 1,
      "Role": "Admin",
      "CreatedAt": "YYYYMMDDTHHMMSS.sssZ",
      "UpdatedAt": "YYYYMMDDTHHMMSS.sssZ"
    },
    {
      "UserId": "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy",
      "Name": "Jane Smith",
      "Email": "jane.smith@example.com",
      "OrganizationId": 1,
      "Role": "User",
      "CreatedAt": "YYYYMMDDTHHMMSS.sssZ",
      "UpdatedAt": "YYYYMMDDTHHMMSS.sssZ"
    }
  ]
}`}
 />
</div>
<pre className="text-xs sm:text-sm text-gray-300 overflow-x-auto">
  {`{
  "success": true,
  "data": [
    {
      "UserId": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
      "Name": "John Doe",
      "Email": "john.doe@example.com",
      "OrganizationId": 1,
      "Role": "Admin",
      "CreatedAt": "YYYYMMDDTHHMMSS.sssZ",
      "UpdatedAt": "YYYYMMDDTHHMMSS.sssZ"
    },
    {
      "UserId": "yyyyyyyy-yyyy-yyyy-yyyy-yyyyyyyyyyyy",
      "Name": "Jane Smith",
      "Email": "jane.smith@example.com",
      "OrganizationId": 1,
      "Role": "User",
      "CreatedAt": "YYYYMMDDTHHMMSS.sssZ",
      "UpdatedAt": "YYYYMMDDTHHMMSS.sssZ"
    }
  ]
}`}
</pre>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserApiPage = () => {
  return (
    <DocsLayout>
      <ApiUserDocs />
    </DocsLayout>
  );
};

export default UserApiPage;
