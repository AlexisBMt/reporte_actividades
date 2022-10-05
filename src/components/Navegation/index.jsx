
export default function Navegation ({status, updateStatus}) {
  const btnStyles = ['mx-1 text-white bg-orange-400 p-2 border-2 rounded-md border-x-orange-400 border-t-orange-400', 'mx-1 p-2 text-blue-800 border-2 rounded-md border-x-orange-400 border-t-orange-400 hover:text-white hover:bg-orange-500']

  return(
    <>
      <div className='mt-12'>
        <button className={ status === 0 ? btnStyles[0] : btnStyles[1] } onClick={() => updateStatus(0)}>Global</button>
        <button className={ status === 1 ? btnStyles[0] : btnStyles[1] } onClick={() => updateStatus(1)}>Analista 1</button>
        <button className={ status === 2 ? btnStyles[0] : btnStyles[1] } onClick={() => updateStatus(2)}>Analista 2</button>
        <button className={ status === 3 ? btnStyles[0] : btnStyles[1] } onClick={() => updateStatus(3)}>Grafica</button>
      </div>
    </>
  )
}