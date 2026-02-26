"use client"

import { useRouter } from 'next/navigation'
import useState from 'react'


const TicketForm = () => {
  const router = useRouter()
  
  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.value

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))

  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch("api/Tickets", {
      method: "POST",
      body: JSON.stringify({ formData }),
      "content-type": "application/json"
    })

    if (!res.ok) {
      throw new Error("Failed to create ticket..!")
    }

    router.refresh()
    router.push("/")
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
      <form
        action=""
        className='rounded-xl p-4'
        method="post"
        onSubmit={handleSubmit}
      >
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

        <label className='mt-4' htmlFor="">Description</label>
        <input
          type="text"
          id='description'
          name='description'
          onChange={handleChange}
          required={true}
          value={formData.description}
          className='m-1 rounded bg-card p-1'
        />

        <label className='mt-4' htmlFor="">Category</label>
        <select
          name='title'
          onChange={handleChange}
          value={formData.category}
          className='m-1 rounded bg-card p-1'
        >
          <option value="Hardware Problem">Hardware Problem</option>  
          <option value="Software Problem">Software Problem</option>  
          <option value="Project">Project</option>  
        </select>

        <label htmlFor="">Priority</label>
        <div>
          <input
            id='priority-1'
            type="radio"
            name='priority'
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1 }
          />
           <label htmlFor="">1</label>
        
          <input
            id='priority-2'
            type="radio"
            name='priority'
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2 }
          />
           <label htmlFor="">2</label>
        
          <input
            id='priority-3'
            type="radio"
            name='priority'
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3 }
          />
           <label htmlFor="">3</label>
       
          <input
            id='priority-4'
            type="radio"
            name='priority'
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4 }
          />
           <label htmlFor="">4</label>
       
          <input
            id='priority-5'
            type="radio"
            name='priority'
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5 }
          />
           <label htmlFor="">5</label>
        </div>

        <label htmlFor="">Progress</label>
        <input
          type="range"
          id='progress'
          name='progress'
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label htmlFor="">Status</label>
        <select
          name='status'
          value={formData.status}
          onChange={handleChange}
        >
          <option value="not started">Not Started</option>
          <option value="started">Started</option>
          <option value="done">Done</option>
        </select>

        <input
          type="submit"
          className='btn max-w-xs'
          value="Create Ticket"
        />
      </form>
    </div>
  )
}

export default TicketForm
