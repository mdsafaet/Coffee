import React from 'react'
import food from '../assets/food.jpg'

const Template = () => {

  const cards = [
    { id: 1, title: 'Card 1', price: 24, description: 'Description 1', image: food },
    { id: 2, title: 'Card 2', price: 30, description: 'Description 2', image: food },
    { id: 3, title: 'Card 3', price: 18, description: 'Description 3', image: food },
    { id: 4, title: 'Card 4', price: 40, description: 'Description 4', image: food },
    { id: 5, title: 'Card 5', price: 50, description: 'Description 5', image: food },
    { id: 6, title: 'Card 6', price: 60, description: 'Description 6', image: food },
  ];

  return (
    <div className="grid grid-cols-2 gap-2 ">


      <div className="bg-red-500 min-h-[100px] rounded-lg shadow-xl col-span-2 flex justify-between items-center">
        <div className='flex flex-col justify-center items-start p-4 relative'>
            <h1 className="text-2xl font-bold text-white">family Meal</h1>
            <p className="text-white position-fixed">price:$24</p>
            <p className="text-white position-fixed">description</p>
        </div>
        <div>
            <img src={food} alt="i am here" className='h-80 w-80  rounded-lg' />
        </div>
      </div>

 {/* <div className="bg-blue-500 min-h-[50px] rounded-lg shadow-xl flex justify-between items-center p-4">
<div className='flex flex-col '>
      <h1 className="text-2xl font-bold text-white">Card 2</h1>
          <p className="text-white">price:$24</p>
          <p className="text-white">description</p>

</div>
<div>
  <img src={food} alt="i am here" className='h-80 w-80  rounded-lg' />
</div>

        </div>
          <div className="bg-teal-500 min-h-[50px] rounded-lg shadow-xl">Card 3</div>
            <div className="bg-slate-500 min-h-[50px] rounded-lg shadow-xl">Card 4</div>
                  <div className="bg-red-500 min-h-[50px] rounded-lg shadow-xl">Card 1</div>
        <div className="bg-blue-500 min-h-[50px] rounded-lg shadow-xl">Card 2</div>
          <div className="bg-teal-500 min-h-[50px] rounded-lg shadow-xl">Card 3</div> */}

      {cards.map((card) => (
  <div key={card.id} className="bg-blue-500 flex justify-between items-center p-4">
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold text-white">{card.title}</h1>
      <p className="text-white">price: ${card.price}</p>
      <p className="text-white">{card.description}</p>
    </div>
    <div>
      <img src={card.image} alt={card.title} className="h-80 w-80 rounded-lg object-cover" />
    </div>
  </div>
))}





    </div>
  )
}

export default Template
