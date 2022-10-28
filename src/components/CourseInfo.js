import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseInfo = () => {
  const info = useLoaderData();
  console.log(info);
  return (
    <div>
      <article class="overflow-hidden w-6/12 mx-auto mt-32 rounded-lg  transition shadow-lg">
        <img
          alt="Office"
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          class="h-56 w-full object-cover"
        />

        <div class="bg-white p-4 sm:p-6">
          <Link>
            <h3 class="mt-0.5 text-lg text-gray-900">
              How to position your furniture for positivity
            </h3>
          </Link>

          <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
            dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque
            minus soluta, voluptates neque explicabo tempora nisi culpa eius
            atque dignissimos. Molestias explicabo corporis voluptatem?
          </p>
        </div>
      </article>
    </div>
  );
};

export default CourseInfo;
