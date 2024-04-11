import illustrationArticle from '../../images/illustration-article.svg';

const LearningComponent = ({learningData}) => {
    return (
        <div className="h-[500px] w-[324px] bg-customWhite rounded-[20px] p-5 border-2 border-customBlack font-figtree font-medium shadow-custom">
            <img className="rounded-xl"src={illustrationArticle} alt="background image" />
            <span className='inline-block text-xs font-extrabold bg-customYellow rounded-lg p-2.5 mt-5 mb-4'>Learning</span>
            <p className='text-xs font-bold pb-5'>Published {learningData.publishedDate}</p>
            <h2 className='text-lg font-extrabold pb-5'>{learningData.title}</h2>
            <p className='text-sm text-customGray pb-5'>{learningData.description}</p>
            <p className='flex items-center font-extrabold'><img className=" w-8 h-8 mr-3 rounded-full"src={learningData.image} alt={learningData.alt} />{learningData.username}</p>
        </div>
    );
}
  
export default LearningComponent;


