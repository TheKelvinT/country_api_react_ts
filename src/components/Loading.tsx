import SpinningGlobe from '../assets/globe-joypixels.gif'

type Props = {
  type: string
}

const Loading = ({type}: Props) => {
  const minHeight = type === 'large' ? 'min-h-[90vh]' : 'min-h-[30vh]';

  return (
    <div className={`max-w-[1168px] flex flex-col items-center justify-center spinner-container bg-primary overflow-hidden ${minHeight}`}>
      <div>
        <img src={SpinningGlobe} className='h-24'/>
      </div>
      <div className='pl-6 mt-4'>
        Loading Countries...
      </div>
    </div>      
  )
}

export default Loading