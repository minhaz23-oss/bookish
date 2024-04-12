import Image from 'next/image'
import Link from 'next/link'
const Card = ({img,name,id,goto}) => {
  return (
    <div className='w-[300px] min-h-[320px] bg-white/5 border border-white rounded-[10px] p-3 mt-4'>
        <div className='w-[150px] h-[200px] mx-auto'>

      <Image src={`/${img}`} width={150} height={150} className=' rounded-[8px]  w-full h-full'/>
        </div>
      <h1 className=' mt-3 mb-4 text-[25px] font-bold leading-none'>{id}. {name}</h1>
      <Link  href={`${goto}`}
       className='primary-btn px-5 py-2 rounded-[5px] '>Buy it from amazon</Link>
    </div>
  )
}

export default Card
