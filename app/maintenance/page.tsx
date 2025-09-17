import { Search, ChevronDown, Trash2, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"

// Sample component data for the maintenance page
const componentData = [
  {
    id: 1,
    qty: 1,
    category: "9. Tripod/Monopod",
    component: "Spider Tripod",
    cost: 2.0,
    extCost: 2.0,
    bgColor: "bg-blue-200",
  },
  {
    id: 2,
    qty: 1,
    category: "Filters",
    component: "77 FLK",
    cost: 6.0,
    extCost: 6.0,
    bgColor: "bg-blue-200",
  },
  {
    id: 3,
    qty: 1,
    category: "Accessories",
    component: "Cap Keeper",
    cost: 0.5,
    extCost: 0.5,
    bgColor: "bg-blue-200",
  },
  {
    id: 4,
    qty: 1,
    category: "2. Lens/Rokinon",
    component: "ROKINON 16mm F2.0 Ultra Wide Angle Lens (Lens Hood and Pouch included) 16M-FX for Fuji X Mount I077",
    cost: 285.0,
    extCost: 285.0,
    bgColor: "bg-blue-300",
  },
]

export default function SKUMaintenance() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
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
              <button className="bg-white text-gray-800 px-3 py-1 rounded text-sm flex items-center">
                Sku Item <ChevronDown className="ml-1 h-4 w-4" />
              </button>
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

      {/* Main Content */}
      <main className="p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">SKU Maintenance</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search and Controls */}
            <div className="flex items-center space-x-4">
              <div className="relative flex-1">
                <Input type="text" placeholder="Search SKU..." className="pr-10" />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
              <Button className="bg-green-500 hover:bg-green-600 text-white">Generate SKU</Button>
              <Button className="bg-green-500 hover:bg-green-600 text-white">
                <Plus className="mr-2 h-4 w-4" />
                Add New
              </Button>
            </div>

            {/* SKU and Bundle Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">SKU</label>
                <div className="flex space-x-2">
                  <Input type="text" value="PZ_16M-FX-082619" className="flex-1" readOnly />
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">Rename</Button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bundle Type</label>
                <Select defaultValue="rokinon-lens">
                  <SelectTrigger>
                    <SelectValue placeholder="Select bundle type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rokinon-lens">Rokinon Lens</SelectItem>
                    <SelectItem value="canon-lens">Canon Lens</SelectItem>
                    <SelectItem value="sony-lens">Sony Lens</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Components Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-200">
                  <tr className="text-left text-sm font-medium text-gray-700">
                    <th className="px-4 py-3">Qty.</th>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Component</th>
                    <th className="px-4 py-3">Cost</th>
                    <th className="px-4 py-3">Ext. Cost</th>
                    <th className="px-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {componentData.map((item) => (
                    <tr key={item.id} className={`border-b ${item.bgColor} text-sm`}>
                      <td className="px-4 py-3">
                        <Input type="number" value={item.qty} className="w-16 h-8 text-center" />
                      </td>
                      <td className="px-4 py-3">{item.category}</td>
                      <td className="px-4 py-3 max-w-md">
                        <div className="truncate" title={item.component}>
                          {item.component}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right">{item.cost.toFixed(2)}</td>
                      <td className="px-4 py-3 text-right">{item.extCost.toFixed(2)}</td>
                      <td className="px-4 py-3">
                        <Button size="sm" variant="destructive" className="h-8 w-8 p-0">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add Component Button */}
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              <Plus className="mr-2 h-4 w-4" />
            </Button>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-6">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8">Save</Button>
              <Button variant="outline" className="px-8 bg-transparent">
                Cancel
              </Button>
            </div>
          </div>

          {/* Right Column - Product Image and Summary */}
          <div className="space-y-6">
            {/* Product Image */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <Image
                  src="/rokinon-lens-bundle.jpg"
                  alt="Rokinon 16mm F2.0 Aspherical Wide Angle Lens Bundle"
                  width={250}
                  height={200}
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-600 text-center">
                Rokinon 16mm F2.0 Aspherical Wide Angle Lens for Fuji X w/Lens Hood + Protective Lens Case, Spider Flex
                Tripod & Other Accessory Bundle
              </p>
            </div>

            {/* Summary */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Component Cost</span>
                  <span className="font-medium">293.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping Fee</span>
                  <span className="font-medium">0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Selling Price</span>
                  <span className="font-medium">389.30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Amazon Fee</span>
                  <span className="font-medium">38.12</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold">
                  <span className="text-gray-800">Total Cost</span>
                  <span>331.62</span>
                </div>
                <div className="flex justify-between font-semibold text-green-600">
                  <span>Profit</span>
                  <span>57.38</span>
                </div>
                <div className="flex justify-between font-semibold text-green-600">
                  <span>Profit %</span>
                  <span>17.30 %</span>
                </div>
              </div>
            </div>

            {/* Activate Windows Notice */}
            <div className="text-right text-gray-400 text-sm">
              <div>Activate Windows</div>
              <div>Go to Settings to activate Windows</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
