




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
      ' [id="get-all-users"], [id="get-user-by-id"]'
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
    curl: `curl --location 'https://apidev.xbattery.energy/v1/users' \\
--header 'ApiKey: cc7****************7cbd'`,
    javascript: `const axios = require('axios');
let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://apidev.xbattery.energy/v1/users',
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
conn.request("GET", "/v1/users", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))`,
  };

   // Example responses based on the PDF
   const getAllUsersResponse = {
    success: true,
    data: [
      {
        UserId: "75016f277a3e-4b7c-8351866652ba3a41",
        Name: "sonu",
        Email: "sonu@xbattery.energy",
        OrganizationId: 1,
        Role: "Admin",
        CreatedAt: "20250103T092322.214Z",
        UpdatedAt: "20250103T092322.214Z"
      },
      {
        UserId: "773b9d2c-f57c-4dfa-84a8-f77aca9b672b",
        Name: "Kiran",
        Email: "kiran@xbattery.energy",
        OrganizationId: 1,
        Role: "Admin",
        CreatedAt: "20241217T084034.083Z",
        UpdatedAt: "20250218T060642.352Z"
      }
    ]
  };

  const getUserByIdResponse = {
    success: true,
    data: [
      {
        UserId: "75016f277a3e-4b7c-8351866652ba3a41",
        Name: "sonu",
        Email: "sonu@xbattery.energy",
        OrganizationId: 1,
        Role: "Admin",
        CreatedAt: "20250103T092322.214Z",
        UpdatedAt: "20250103T092322.214Z"
      }
    ]
  };

  // Code examples for each endpoint
  const getAllUsersExample = {
    curl: `curl --location 'https://apidev.xbattery.energy/v1/users' \\
--header 'ApiKey: '`,
    javascript: `var axios = require('axios');
var config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://apidev.xbattery.energy/v1/users',
  headers: {
    'ApiKey': ''
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
  'ApiKey': ''
}
conn.request("GET", "/v1/users", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))`
  };

  const getUserByIdExample = {
    curl: `curl --location 'https://apidev.xbattery.energy/v1/users/{userId}' \\
--header 'ApiKey: '`,
    javascript: `var axios = require('axios');
var config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://apidev.xbattery.energy/v1/users/{userId}',
  headers: {
    'ApiKey': ''
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
  'ApiKey': ''
}
conn.request("GET", "/v1/users/{userId}", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))`
  };

  return (
    <div className="min-h-screen bg-gray-950 p-2 sm:p-4 md:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0 text-white px-2 sm:px-4 md:px-8">
        User API Documentation
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
                  All user-related API requests should be made to our secure
                  endpoint:
                </p>
                <code className="text-blue-400 block text-sm break-all">
                  https://apidev.xbattery.energy/v1
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
                <h3 className="text-xs sm:text-xs font-semibold text-gray-400">
                  BASE URL
                </h3>
                <CopyButton text="https://apidev.xbattery.energy/v1" />
              </div>
              <pre className="text-xs sm:text-xs text-gray-300 overflow-x-auto whitespace-pre-wrap break-all">
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
                  User API endpoints require an API key for authentication. Include it in your request
                  headers.
                </p>
                <div className="bg-gray-800 p-3 sm:p-4 rounded-md">
                  <h3 className="font-semibold mb-2">Required Headers:</h3>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>ApiKey: Your API access key</li>
                  </ul>
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



         {/* GET All Users Section */}
         <div className="h-[2rem]" id="get-all-users"></div>
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-2 sm:px-4 md:px-8">
          <div className="flex-1">
            <h2 className="text-lg sm:text-2xl font-semibold text-white mb-4">
              Get All Users
            </h2>
            <div className="bg-gray-900/50 rounded-lg p-4 sm:p-6 space-y-6">
              {/* Endpoint */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Endpoint
                </h3>
                <code className="text-blue-400 text-sm">GET /users</code>
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
                      <code className="text-blue-400">UserId</code>: Unique
                      identifier for the user
                    </li>
                    <li>
                      <code className="text-blue-400">Name</code>: User's name
                    </li>
                    <li>
                      <code className="text-blue-400">Email</code>: User's email
                      address
                    </li>
                    <li>
                      <code className="text-blue-400">OrganizationId</code>:
                      Organization identifier
                    </li>
                    <li>
                      <code className="text-blue-400">Role</code>: User's role
                    </li>
                    <li>
                      <code className="text-blue-400">CreatedAt</code>: Account
                      creation timestamp
                    </li>
                    <li>
                      <code className="text-blue-400">UpdatedAt</code>: Last
                      update timestamp
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
                        <CopyButton text={getAllUsersExample[selectedLang]} />
                      </div>
                    </div>
                    <pre className="text-xs text-gray-300 overflow-x-auto">
                      {getAllUsersExample[selectedLang]}
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
                        text={JSON.stringify(getAllUsersResponse, null, 2)}
                      />
                    </div>
                    <pre className="text-xs text-gray-300 overflow-x-auto">
                      {JSON.stringify(getAllUsersResponse, null, 2)}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/*Get user by id */}
        <div className="h-[2rem]" id="get-user-by-id"></div>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 px-2 sm:px-4 md:px-8">
        <div className="flex-1">
          <h2 className="text-lg sm:text-2xl font-semibold text-white mb-4">
            Get User By ID
          </h2>
          <div className="bg-gray-900/50 rounded-lg p-4 sm:p-6 space-y-6">
            {/* Endpoint */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Endpoint
              </h3>
              <code className="text-blue-400 text-sm">GET /users/{'{userId}'}</code>
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
                    <code className="text-blue-400">UserId</code>: Unique
                    identifier for the user
                  </li>
                  <li>
                    <code className="text-blue-400">Name</code>: User's name
                  </li>
                  <li>
                    <code className="text-blue-400">Email</code>: User's email
                    address
                  </li>
                  <li>
                    <code className="text-blue-400">OrganizationId</code>:
                    Organization identifier
                  </li>
                  <li>
                    <code className="text-blue-400">Role</code>: User's role
                  </li>
                  <li>
                    <code className="text-blue-400">CreatedAt</code>: Account
                    creation timestamp
                  </li>
                  <li>
                    <code className="text-blue-400">UpdatedAt</code>: Last
                    update timestamp
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
                      <CopyButton text={getUserByIdExample[selectedLang]} />
                    </div>
                  </div>
                  <pre className="text-xs text-gray-300 overflow-x-auto">
                    {getUserByIdExample[selectedLang]}
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
                      text={JSON.stringify(getUserByIdResponse, null, 2)}
                    />
                  </div>
                  <pre className="text-xs text-gray-300 overflow-x-auto">
                    {JSON.stringify(getUserByIdResponse, null, 2)}
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

const UserApiPage = () => {
  return (
    <DocsLayout>
      <ApiUserDocs />
    </DocsLayout>
  );
};

export default UserApiPage;

