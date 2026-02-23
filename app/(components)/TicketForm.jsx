"use client"

import { useRouter } from 'next/navigation'
import useState from 'react'


const TicketForm = () => {

  const handleChange = () => {
    const value = e.target.value
    const name = e.target.value

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))

  }

  const startingTicketData = {
      title: "",
      description: "",
      priority: 1,
      progress: 0,
      status: "Not Started",
      category: "Hardware Problem",
  }

    const [formData, setFormData] = useState(startingTicketData)

  return (
    <div className='flex justify-center'>
      <form action="" className='rounded-xl p-4'>
        <h3>Create Your ticket</h3>

        <label className='mt-4' htmlFor="">Title</label>
        <input
          type="text"
          id='title'
          name='title'
          onChange={handleChange}
          required={true}
          value={formData.title}
          className='m-1 rounded bg-card p-1'
        />
      </form>
    </div>
  )
}

export default TicketForm
