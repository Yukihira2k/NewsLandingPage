import image1 from "../assets/images/image-retro-pcs.jpg"
import image2 from "../assets/images/image-top-laptops.jpg"
import image3 from "../assets/images/image-gaming-growth.jpg"

function Footer(){
    return(
        <>
        <div className="flex justify-center items-start mt-24">
            <div>
                <img src={image1} className="h-32 mr-5"></img>
            </div>
            <div>
                <h1 className="text-2xl text-gray-300 font-bold">01</h1>
                <h2 className="font-bold my-2">Reviving Retro PCs</h2>
                <p className="text-gray-500 w-64">What happens when old PCs are 
                    given modern upgrades?</p>
            </div>

            <div>
                <img src={image2} className="h-32 mr-5"></img>
            </div>
            <div>
                <h1 className="text-2xl text-gray-300 font-bold">02</h1>
                <h2 className="font-bold my-2">Top 10 Laptops of 2022</h2>
                <p className="text-gray-500 w-64">Our best picks for various needs and budgets.</p>
            </div>

            <div>
                <img src={image3} className="h-32 mr-5"></img>
            </div>
            <div>
                <h1 className="text-2xl text-gray-300 font-bold">03</h1>
                <h2 className="font-bold my-2">The Growth of Gaming</h2>
                <p className="text-gray-500 w-64">How the pandemic has sparked fresh opportunities.</p>
            </div>
        </div>
        </>
    )
}

export default Footer;