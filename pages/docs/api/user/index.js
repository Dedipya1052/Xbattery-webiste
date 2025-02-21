import React, { useEffect, useState } from 'react';
import { Copy } from 'lucide-react';
import { useToast } from '@chakra-ui/react';
import DocsLayout from '@/components/ui/DocsLayout';
import { useRouter } from 'next/router';

const ApiUserDocs = () => {
  const toast = useToast();
  const [selectedLang, setSelectedLang] = useState('curl');

  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
      if (id) {
          const section = document.getElementById(id);
          if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
          }
      }
  }, [id]);

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
    curl: `curl -X POST "https://bess-apim-dev.azure-api.net/bess/users/login" \\
    -H "Content-Type: application/json" \\
    -d '{
      "email": "user@example.com",
      "password": "your_password"
    }'`,
    javascript: `const response = await fetch(
    'https://bess-apim-dev.azure-api.net/bess/users/login',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'user@example.com',
        password: 'your_password'
      })
    }
  );`,
    python: `import requests

response = requests.post(
    'https://bess-apim-dev.azure-api.net/bess/users/login',
    json={
        'email': 'user@example.com',
        'password': 'your_password'
    }
)`
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
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-0 text-white px-2 sm:px-4 md:px-8">User API Documentation</h1>
      
      <div className="space-y-4 sm:space-y-3 md:space-y-4">


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