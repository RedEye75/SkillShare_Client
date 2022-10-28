import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <Link className="relative block rounded-sm border-t-4 border-pink-600 p-8 pb-24 shadow-xl">
        <h3 className="text-4xl font-bold">What is Cors ?</h3>
        <p className="mt-4 text-lg font-medium text-gray-500">
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </p>

        <span className="absolute bottom-8 right-8"></span>
      </Link>
      <Link class="relative block rounded-sm border-t-4 border-pink-600 p-8 pb-24 shadow-xl">
        <h3 class="text-4xl font-bold">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p class="mt-4 text-lg font-medium text-gray-500">
          Firebase helps us develop high-quality apps, grow our user base, and
          earn more money. Each feature works independently, and they work even
          better together & that's why i'm using firebase.
        </p>
        <p className="mt-4 text-lg font-medium text-gray-500">
          There are many options for implement authentication like{" "}
          <strong className="text-rose-800">
            {" "}
            User Authentication Platforms, StyTCH ,Ory SupaBase, Okta,
            PingIdentity, KeyCloak, FrontEgg, Auth0, ,Amazon, Cognito, OneLogin.
          </strong>
        </p>

        <span className="absolute bottom-8 right-8"></span>
      </Link>
      <Link className="relative block rounded-sm border-t-4 border-pink-600 p-8 pb-24 shadow-xl">
        <h3 class="text-4xl font-bold">How does the private route work?</h3>
        <p class="mt-4 text-lg font-medium text-gray-500">
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
          (Logged in).
        </p>

        <span className="absolute bottom-8 right-8"></span>
      </Link>
      <Link class="relative block rounded-sm border-t-4 border-pink-600 p-8 pb-24 shadow-xl">
        <h3 class="text-3xl font-bold">What is Node? How does Node work?</h3>
        <p className="mt-4 text-lg font-medium text-gray-500">
          What exactly is a node? A node is a basic unit of a data structure,
          such as a linked list or tree data structure. Nodes contain data and
          also may link to other nodes. Links between nodes are often
          implemented by pointers.
        </p>
        <p className="mt-4 text-lg font-medium text-gray-500">
          Node allows developers to write JavaScript code that runs directly in
          a computer process itself instead of in a browser. Node can,
          therefore, be used to write server-side applications with access to
          the operating system, file system, and everything else required to
          build fully-functional applications.
        </p>

        <span className="absolute bottom-8 right-8"></span>
      </Link>
    </div>
  );
};

export default Blog;
