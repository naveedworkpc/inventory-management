import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-gray-800 text-white px-4 py-3">
      <div className="flex items-center justify-between">
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-gray-300 hover:text-white">
            To Do
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Bundle Type
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Categories
          </a>
          <a href="#" className="text-gray-300 hover:text-white">
            Component
          </a>

          <div className="flex items-center space-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <button className="bg-white text-gray-800 px-3 py-1 rounded text-sm flex items-center">
                  Sku Item <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="p-0 w-56">
                <ul className="bg-white rounded shadow border text-gray-800">
                  <li>
                    <Link href="/maintenance" className="block px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer">Maintenance</Link>
                  </li>
                  <li>
                    <Link href="/" className="block px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer">Search</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer">Bulk Price Change</li>
                  <li className="px-4 py-2 hover:bg-blue-500 hover:text-white cursor-pointer">Scheduled Bulk Changes</li>
                </ul>
              </PopoverContent>
            </Popover>
            <button className="text-gray-300 hover:text-white flex items-center">
              Reports <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>

          <Button variant="secondary" size="sm">
            Add User
          </Button>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="text-white font-semibold border-l border-r border-white px-4">| Pagingzone |</div>
          <span className="text-gray-300">Hello admin@industryis.com!</span>
          <button className="text-gray-300 hover:text-white">Log off</button>
        </div>
      </div>
    </header>
  )
}
