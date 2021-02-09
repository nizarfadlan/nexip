import React from 'react'

export default class Header extends React.Component {
  componentDidMount () {
    let htmlClasses = document.querySelector('body').classList;
    let sun = document.querySelector('#sun').classList;
    let moon = document.querySelector('#moon').classList;

    document.getElementById('switchTheme').addEventListener('click', function() {
      if(localStorage.getItem('theme') === 'dark') {
        htmlClasses.remove('dark');
        localStorage.removeItem('theme');
        htmlClasses.add('light');
        sun.add('hidden');
        moon.remove('hidden');
      } else {
        htmlClasses.add('dark');
        localStorage.setItem('theme', 'dark');
        htmlClasses.remove('light');
        sun.remove('hidden');
        moon.add('hidden');
      }
    });

    if(localStorage.getItem('theme') === 'dark'){
      htmlClasses.add('dark');
      sun.remove('hidden');
      moon.add('hidden');
    }else{
      htmlClasses.add('light');
      sun.add('hidden');
      moon.remove('hidden');
    };

  }

  render(){
    return (
      <>
        <header className="my-3 mx-3 relative z-10">
          <nav>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0 ml-4 md:ml-6">
                  <h1 className="antialiased text-3xl uppercase tracking-widest font-black dark:text-white">Nexip</h1>
                </div>
                <div className="mr-4 flex items-center md:mr-6">
                  <div id="switchTheme" className="flex cursor-pointer items-center">
                    <div className="toggleCircle w-6 h-6 md:h-7 md:w-7 rounded-full inset-y-0 right-0 bg-tranparent text-gray-900 dark:text-white">
                      <svg id="moon" className="h-6 w-6 md:h-7 md:w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                      <svg id="sun" className="h-6 w-6 md:h-7 md:w-7 hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </>
    )
  }
}