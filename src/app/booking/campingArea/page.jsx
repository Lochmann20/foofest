"use client"
import { useState } from 'react'
import Ticket from "@/app/components/Ticket";
import RemoveButton from '@/app/components/RemoveButton';
import AddButton from '@/app/components/AddButton';
import { useSearchParams } from 'next/navigation'


export default function Home() {
  const [ticketCount, setTicketCount] = useState(0);
  const [ticketCount2, setTicketCount2] = useState(0);

  const handleTicketChange = (count) => {
    setTicketCount(count);
  };
  
  const handleRemoveTicket = () => {
    if (ticketCount > 0) {
      setTicketCount(prevCount => prevCount - 1);
      // saveData();
    }
  };

  const handleTicketChange2 = (count) => {
    setTicketCount2(count);
  };
  
  const handleRemoveTicket2 = () => {
    if (ticketCount2 > 0) {
      setTicketCount2(prevCount => prevCount - 1);
    }
  };

  const searchParams = useSearchParams()
 
  const ticketcount1 = searchParams.get('ticketcount1')
  const ticketcount2 = searchParams.get('ticketcount2')


  // function saveData() {
  //   localStorage.setItem("data", ticketCount.innerHTML);
  // }

  // function showData() {
  //   ticketCount.innerHTML = localStorage.getItem("data");
  // }
  // showData();



  return (
    <>
    <div className="border-solid bg-Darkblue border-Hotpink border-2 rounded-3xl p-8 w-7/12 m-auto mt-10">
      <h1 className="text-White md:text-6xl">CHOOSE YOUR CAMPING AREA:</h1>
        <div className="flex justify-start p-8 gap-20">
    
          <div>
            <div className='grid grid-cols-2 text-White'>
              <li value="">Svartheim</li>
              <li value="">Nilfheim</li>
              <li value="">Helheim</li>
              <li value="">Muspelheim</li>
              <li value="">Alfheim</li>
            </div>
            <br />

            <div className='flex gap-24'>
              <div className='text-White'>
                <h2 className="text-xl text-White"><span className='font-bold text-Lightpink'>2</span> PERSON TENT</h2>
                <p>799 DKK</p>
              </div>
              <div className='flex flex-row gap-3 h-6 items-center mt-4'>
                <RemoveButton onRemoveButtonClick={handleRemoveTicket} /> 
                <input className='border-solid border-2 border-Lightpink rounded-full w-32 bg-White p-2' value={ticketCount} />
                <AddButton onButtonClick={() => handleTicketChange(ticketCount + 1)} />
              </div>
            </div>

            <br />
            <div className='flex gap-28'>
              <div>
                <h2 className='text-White text-xl'><span className='font-bold text-Lightpink'>3</span>PERSON TENT</h2>
                <p className='text-White text-base'>1299 DKK</p>
              </div>

              <div className='flex flex-row gap-3 h-6 items-center mt-4'>
                <RemoveButton onRemoveButtonClick={handleRemoveTicket2} /> 
                <input className='border-solid border-2 border-Lightpink rounded-full w-32 bg-White p-2' value={ticketCount2} />
                <AddButton onButtonClick={() => handleTicketChange2(ticketCount2 + 1)} />
              </div>
            </div>
            <br />

            {/* <div className='text-White'>
              <h2 className='text-xl'>EXTRA</h2>
              <li>GREEN CAMPING</li>
            </div> */}
          </div>
    
      
          <div>
            <Ticket 
            ticketCount={ticketcount1} 
            handleTicketChange={handleTicketChange} 
            handleRemoveTicket={handleRemoveTicket} 
            ticketPrice={799}
             ticketCount2={ticketcount2} 
             handleTicketChange2={handleTicketChange2} 
             handleRemoveTicket2={handleRemoveTicket2} 
             ticketPrice2={1299} />
          </div>
        </div>
    </div>
    </>
  );
}