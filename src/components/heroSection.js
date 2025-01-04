import Boss from "../images/heroImage/Boss.jpg";


const Hero =()=>{
    return(
<section> 
<div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-2 mt-10 sm:justify-items-center">
     <div className="lg:ml-auto lg:mt-24 sm:mt-16">
        <h3>Hello, it's me <span className="text"></span></h3>
        <h1 className="sm:text-xs md:text-4xl lg:text-5xl">Muoghalu Ijeoma Florence</h1>
        <h3 className=""><span className="text"></span>I am a</h3>
        <p className="">
           I am a Fullstack developer with two years experience,<br/>expertise is to create and design wesite, frontend design, and many more...
        </p>
    </div>
    <div className="mt-10 flex justify-center">
     <img
     src={Boss}
      alt="Description"
       className="lg:w-96 h-auto rounded-lg shadow-md sm:w-72"
        />
   </div>
 </div>
</div>
<script src="designFrontend.js"></script>
</section>
    )
}

export default Hero;

