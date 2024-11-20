"use client";
import Link from "next/link";
import React from "react";
import CourseData from "../data/music_course.json";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const FeaturedCourses = CourseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="py-12 bg-gray-900 ">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Learn with the best
          </p>
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {FeaturedCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="p-4 sm:p-6 flex flex-col item-center text-center flex-grow">
                  <p className="text-2xl bold text-black mt-4 mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="text-sm m-2 text-black dark:text-neutral-100 text-center">
                    {course.description}
                  </p>
                  <Link
                    href={`/courses/${course.slug}`}
                    // className="rounded-full border text-white bg-black hover:bg-gray-700 w-2/4 p-5"
                    className="bold text-lg "
                  >
                    Learn more
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-4 py-4 rounded-full border text-white bg-black hover:bg-gray-700"
        >
          View all courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
