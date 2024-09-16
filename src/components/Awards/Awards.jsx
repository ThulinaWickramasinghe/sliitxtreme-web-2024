import Title from '../Common/title.jsx';

const Prizes = () => {
    const prizeList = [
        {
            name: 'Winner',
            image: 'prize1.svg',
            details: ['LKR 40,000.00']
        },
        {
            name: "1st Runner's Up",
            image: 'prize2.svg',
            details: ['LKR 30,000.00']
        },
        {
            name: "2nd Runner's Up",
            image: 'prize3.svg',
            details: ['LKR 20,000.00']
        }
    ];

    const Prize = ({ name, details, image, aos }) => {
        return (
            <div data-aos={aos}>
                <div className="h-96 group flex flex-col justify-center items-center my-12 border cursor-default border-nav-links-unselected mx-6 md:mx-12 p-8 hover:border-primary transition duration-300 ">
                    <img
                        src={`./assets/prizes/${image}`}
                        className="w-32 h-32 md:w-32 md:h-32 mx-16 p-2 flex justify-center items-center transform hover:scale-105 transition duration-300"
                    />
                    <span className="text-black text-xl font-semibold text-center mt-8 mb-6">{name}</span>
                    {details.map((detail) => {
                        return (
                            <span key={detail} className="text-nav-links-unselected text-center mb-2">
                {detail}
              </span>
                        );
                    })}
                </div>
            </div>
        );
    };
    return (
        <>
            <div className="flex flex-col justify-center items-center pt-[80px] " id="prizes">
                <Title title="Prizes" className="mt-4 mb-12" aos="fade-right" />
                <div className="flex flex-wrap justify-center items-center">
                    {prizeList.map((prize, index) => {
                        return (
                            <Prize
                                key={prize}
                                name={prize.name}
                                details={prize.details}
                                image={prize.image}
                                aos={index === 1 ? 'fade' : index === 0 ? 'fade-right' : 'fade-left'}
                            />
                        );
                    })}
                </div>
                <span className="text-nav-links-unselected text-center mb-2" data-aos="fade-up">
          * Conditions apply *
        </span>
            </div>
        </>
    );
};

export default Prizes;
