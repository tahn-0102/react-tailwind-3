import Card from '../../assets/desktop/isocard.svg'
const Slogan = () => {
   return (
      <section className="text-36 my-14 font-extrabold">
         <div className="text-center">
            <p>
               Earn <span className="text-purple-300"> More</span>
            </p>
            <p>Pay Less</p>
            <button
               className="text-20 px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-[14px] hover:bg-pink-500 transition-all duration-300">
               Start
            </button>
         </div>
         <div className="mt-[69px]">
            <img src={Card} alt="credit card" />
         </div>
      </section>
   );
}

export default Slogan;