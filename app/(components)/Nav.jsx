import { faHome, faTicket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const Nav = () => {
  return (
    <nav className="flex justify-between bg-[#18222f] p-4">
      <div className="flex items-center space-x-4">
        <Link href="/" >
          <FontAwesomeIcon icon={faHome} className="icon text-[#f1f3f5]" />
        </Link>
        <Link href="/TicketPage/new" >
          <FontAwesomeIcon icon={faTicket} className="icon text-[#f1f3f5]" />
        </Link>
      </div>
      <div className="">
        <p className="text-[#f1f3f5]">john@gmail.com</p>
      </div> 
    </nav>
  )
}

export default Nav
