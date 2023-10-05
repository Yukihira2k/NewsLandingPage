import mainImg from "../assets/images/image-web-3-desktop.jpg"

function MainSection(){
    return(
        <>
        <div className="lg:flex justify-center items-start mt-16 ">   
            <div>
                <img src={mainImg} className="h-80 w-auto"></img>
                <div className="flex justify-between items-start mt-5 max-md:flex-col max-md:items-start ">
                
                    <h1 className="text-6xl w-96 font-bold max-md:w-full max-md:m-5 max-md:w-82">The Bright future of Web 3.0?</h1>
                    <div className="w-auto">
                        <p className="w-80 mt-2 max-md:m-5">We dive into the next evolution of the Web
                            that claims to put the power of the platforms back
                            into the hands of the people. But is it really
                            fulfilling its promise?
                        </p>
                        <button className="text-white mt-7 py-3 px-8 bg-red-500 text-center rounded-sm max-md:m-5 hover:bg-slate-900">READ MORE</button>
                    </div>
          
                </div>
            </div>
            <div className="max-md:w-full">
                <div className="ml-5 bg-gray-950 text-white p-5 w-80 ">
                    <h1 className="text-orange-300 text-4xl mb-5">New</h1>
                    <h2 className="text-white mb-2 text-lg font-bold hover:text-orange-400 cursor-pointer">Hydrogen VS Electric Cars</h2>
                    <p className="text-sm mb-10 text-gray-400">Will hydrogen fueled cars ever catch up to EVs?</p>
                    <hr className="mb-11"></hr>

    
                    <h2 className="text-white mb-2 text-lg font-bold hover:text-orange-400 cursor-pointer">The Downsides of AI Artistry</h2>
                    <p className="text-sm mb-10 text-gray-400">What are the possible adverse effects of on-demand AI image generation?</p>
                    <hr className="mb-10"></hr>


                    <h2 className="text-white mb-2 text-lg font-bold hover:text-orange-400 cursor-pointer">Is VC Funding Drying Up?</h2>
                    <p className="text-sm mb-6 text-gray-400">Private funding by VC firms is down 50%
                        YOY. We take a look at what means.
                    </p>
                  

                </div>
            </div>
        </div>
        </>
    )
}

export default MainSection;