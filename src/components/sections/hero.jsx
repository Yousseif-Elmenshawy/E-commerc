import HeroIMG from "../assets/Sheos23.png"

export default function Hero(){
    return(
        <>
            <section className="Hero">
                <br />
                <div className="container-fluidd">
                    <div className="container m-3">
                        <div id="main">
                            <span className="tagname m-3 text-light">We create solutions</span>
                        </div>
                        <h1 className="head">design that hits different.</h1>
                        <br />
                        <p className="description">we're a digital studio focused on building build , <br /> functional and unforgettable experience</p>
                        <div className="CTA-box container">
                            <button className="CTA">View work </button>
                            <button className="About">About</button>
                        </div>
                    </div>
                        <div className="containerMD d-flex flex-row justify-content-end">
                            <img src={HeroIMG} alt="Shoes IMG" className="img-fluid" />
                            <div className="design-ball d-flex align-items-center justify-content-center">
                                <p className="text-light text-center text-uppercase">bold by design</p>
                            </div>
                        </div>
                    </div>
                
            </section>
        </>
    )
}