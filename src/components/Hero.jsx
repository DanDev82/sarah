import React from 'react'

function Hero() {
  return (
    <>
      <section className="hero flex flex-col justify-center items-center">
        <div className="flex lg:py-40 rounded-lg gap-10 md:gap-30 inner bg-slate-50">
          <div className="w-full left-col">
            <h1 className="text-2xl lg:text-7xl mb-4 ">Magical <span className="text-[#7c93d4]">MOM BOSS</span> Affiliate!</h1>
            <p className="mb-5 text-xl">Check out my links below.</p>
          </div>
          <div className="" id="links">
            <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/NpEaa2P7qZI?si=2SqhLbkBbHfdcrhf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero