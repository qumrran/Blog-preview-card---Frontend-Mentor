
import learningData from './learningData.js';
import LearningComponent from './assets/components/LearningComponent/LearningComponent.js';

function App() {
  return (
   <div className='flex items-center justify-center background min-h-screen bg-customYellow'>
      
      <LearningComponent learningData={learningData}/>
      
   </div>
  );
}

export default App;
