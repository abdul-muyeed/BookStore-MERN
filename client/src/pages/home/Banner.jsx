import bannerImg from "../../assets/banner.png";
const Banner = () => {
  return (
    <>
      <div className="flex flex-col-reverse justify-between md:flex-row items-center md:px-20 px-5 py-10 gap-10">
        <div className="md:w-1/2 w-full">
            <h1 className="md:text-5xl text-2xl font-medium mb-7" >New Release This week</h1>
            <p className="mb-10">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum incidunt nostrum dolor qui animi suscipit! Deleniti, consequuntur qui veniam eaque perspiciatis ex voluptatum? Nobis rerum libero praesentium eius quam quas?
            </p>
            <button className="btn-primary">Shop Now</button> 
        </div>
        <div className="md:w-1/2 w-full flex justify-center items-center">
            <img src={bannerImg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Banner;
