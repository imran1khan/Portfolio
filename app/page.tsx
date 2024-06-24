import Image from "next/image";
import Header from "./_components/Header";
import { CONFIG } from "@/styles/config";
import Link from "next/link";


export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[68rem] px-4 lg:px-20 pt-4 md:pt-10">
      <Header />
      <div className=" flex flex-col space-y-6 md:space-y-12 pb-8 pt-4">
        <div className="flex flex-col md:px-6 animate-slide-from-down-and-fade-2">
          <div className="flex flex-col space-y-2">
            <span className="font-semibold ">About me</span>
            <span className="text-neutral-300/80 leading-6">
              {CONFIG.description}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-6 md:space-y-1">
        {/* Projects */}
        <div className=" flex flex-col space-y-4 animate-slide-from-down-and-fade-3">
          <div className="flex flex-col space-y-2">
            <span className="font-semibold md:px-6 ">Featured Projects</span>
            <div className="flex flex-col space-y-8 md:space-y-1 md:px-2">
              {CONFIG.projects.map((project, idx) => {
                if (project.featured) {
                  return (
                    <Link
                      key={idx}
                      href={project.link}
                      target="_blank"
                      className="flex flex-row justify-between items-center duration-300 md:hover:bg-[#232324] md:px-4 md:py-3 rounded-lg cursor-pointer"
                    >
                      <div className="flex flex-row space-x-4">
                        <Image
                          src={project.image}
                          alt=""
                          width={40}
                          height={40}
                          className="w-[40px] h-[40px] rounded-md"
                        />
                        <div className="flex flex-col">
                          <span className="text-secondaryDark">
                            {project.name}
                          </span>
                          <span className="text-neutral-300/80">
                            {project.description}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
          </div>
          <Link
            href="/"
            className="flex flex-row space-x-2 items-center md:px-6 group cursor-pointer justify-end"
          >
            <span className="text-neutral-400 text-sm underline underline-offset-4 hover:text-secondary duration-200">
              All Projects
            </span>
          </Link>
        </div>
        {/* stack */}
        <div className=" flex flex-col space-y-4 animate-slide-from-down-and-fade-3">
          <div className="flex flex-col space-y-2">
            <span className="font-semibold md:px-6 ">Teach Stack</span>
            <div className="grid grid-cols-3">
              {CONFIG.tech_stacks.map((project, idx) => (
                <div
                  key={idx+project.image}
                  className="flex flex-row justify-between items-center duration-300 md:hover:bg-[#232324] md:px-4 md:py-3 rounded-lg cursor-pointer"
                >
                  <div className="flex flex-row space-x-4">
                    <Image
                      src={project.image}
                      alt=""
                      width={40}
                      height={40}
                      className="w-[40px] h-[40px] rounded-md"
                    />
                    <div className="flex flex-col">
                      <span className="text-secondaryDark">
                        {project.name}
                      </span>
                    </div>
                  </div>
                </div>
              )
              )}
            </div>
          </div>
          <Link
            href="/"
            className="flex flex-row space-x-2 items-center md:px-6 group cursor-pointer justify-end"
          >
            <span className="text-neutral-400 text-sm underline underline-offset-4 hover:text-secondary duration-200">
              All stacks
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
