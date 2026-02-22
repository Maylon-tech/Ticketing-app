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
      <form action="">
        <h3>Create Your ticket</h3>

        <label htmlFor="">Title</label>
        <input
          type="text"
          id='title'
          name='title'
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
      </form>
    </div>
  )
}

export default TicketForm
