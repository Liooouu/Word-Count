  import React from "react";
  import { HomeIcon, UserIcon, CodeBracketIcon } from '@heroicons/react/24/solid'; 

  export default function HomePage() {
  
    const scrollToSection = (id) => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <div className="relative">
      <nav className="fixed top-0 left-0 right-0 bg-stone-950 text-white flex justify-center gap-10 p-4 z-50 shadow-lg">
          
          <button
            onClick={() => scrollToSection("home")}
            className="flex flex-col items-center cursor-pointer font-semibold hover:text-green-400"
            >
           
            <HomeIcon className="h-6 w-6 sm:hidden" />
          
            <span className="hidden sm:block " >Home</span>
          </button>

       
          <button
              onClick={() => scrollToSection("about")}
              className="flex flex-col items-center cursor-pointer font-semibold hover:text-green-400"
              >
              <UserIcon className="h-6 w-6 sm:hidden" />
              <span className="hidden sm:block">About</span>
          </button>

         
          <button
              onClick={() => scrollToSection("developers")}
              className="flex flex-col items-center cursor-pointer font-semibold hover:text-green-400"
              >
              <CodeBracketIcon className="h-6 w-6 sm:hidden" />
              <span className="hidden sm:block">Developers</span>
          </button>
      </nav>
        
        <div className="h-16" />

        <section
          id="home"
          className="bg-[url('/Pictures/IBG.png')] bg-cover bg-center bg-fixed min-h-[400px] flex items-center justify-center p-5"
        >
          <div className="bg-stone-100/40 rounded-2xl flex flex-col justify-center items-center p-5 max-w-3xl text-center">
            <h1 className="text-7xl font-mono font-extrabold">Word Counter</h1>
            <h3 className="text-xs mt-2">
              Welcome to Word Counter, count your essay related activities here and many more.
            </h3>
            <a
              href="./Wordcount"
              className="mt-4 bg-stone-950 p-1.5 text-white text-sm hover:text-stone-300 hover:bg-green-500 hover:font-extrabold hover:animate-none active:bg-green-800 inline-block"
            >
              Get Started
            </a>
          </div>
        </section>

        
        <section
          id="about"
          className="max-w-3xl mx-auto p-6 h-[300px] mt-20"
        >
          <h1 className="text-4xl font-bold mb-6 text-center">About Page</h1>
          <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
            Welcome to Word Counter!  
            This simple tool helps you quickly count words and characters for essays, messages, or any kind of writing.  
            It's designed for convenience, accuracy, and ease of use whether you're a student, writer, or just curious.  
            This is just one of our personal projects, built to learn and share useful tools with others.
          </p>
        </section>

    
        <section
          id="developers"
          className="min-h-screen bg-gray-50 p-8 mt-20"
        >
          <h1 className="text-4xl font-extrabold text-center mb-12 text-stone-900">
            THE DEVELOPERS
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/Pictures/Anrei.jpg"
                alt="Andrei Mannacop"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                <h3 className="text-xl font-semibold mb-4">Andrei Mannacop</h3>
                <div className="flex gap-6">
                  <a
                    href="https://github.com/dreeeiiiii/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="hover:text-green-400"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="GitHub"
                      className="w-8 h-8"
                    />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                    className="hover:text-blue-500"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                      alt="Facebook"
                      className="w-8 h-8"
                    />
                  </a>
                </div>
              </div>
            </div>

            
            <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/Pictures/LioF.jpg"
                alt="John Lio L. Apiado"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                <h3 className="text-xl font-semibold mb-4">John Lio L. Apiado</h3>
                <div className="flex gap-6">
                  <a
                    href="https://github.com/Liooouu"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="hover:text-green-400"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="GitHub"
                      className="w-8 h-8"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/share/1CtVPkf6c9/?mibextid=qi2Omg"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                    className="hover:text-blue-500"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                      alt="Facebook"
                      className="w-8 h-8"
                    />
                  </a>
                </div>
              </div>
            </div>

           
            <div className="relative group bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/Pictures/Mark.jpg"
                alt="Mark Vincent Lucido"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
                <h3 className="text-xl font-semibold mb-4">Mark Vincent Lucido</h3>
                <div className="flex gap-6">
                  <a
                    href="https://github.com/marky1922/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="hover:text-green-400"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt="GitHub"
                      className="w-8 h-8"
                    />
                  </a>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
