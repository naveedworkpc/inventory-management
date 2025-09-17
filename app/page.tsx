import { Search, Download, Edit, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Header from "@/components/Header"

// Sample inventory data matching the screenshot
const inventoryData = [
  {
    id: 1,
    skuCode: "30-VVJT-YV3Y",
    asin: "B00I8BICB2",
    active: "Inactive",
    fulfilledBy: "Seller",
    condition: "new-new",
    title:
      "Sony Alpha a6000 Mirrorless Digital Camera 24.3MP SLR Camera with 3.0-Inch LCD (Black) w/16-50mm Power Zoom Lens",
    qty: 0,
    newQty: "",
    status: "",
    mainImage: "/sony-alpha-a6000-camera.jpg",
    totalCost: 580.84,
    shippingFee: 0.0,
    sellingPrice: 498.0,
    newPrice: 0.0,
    profit: -82.84,
    profitPercent: -14.26,
    rowColor: "bg-green-100",
  },
  {
    id: 2,
    skuCode: "3I-H43D-7JG3",
    asin: "B07GVQTGKR",
    active: "Active",
    fulfilledBy: "Seller",
    condition: "new-new",
    title: "Canon EOS M50 Mirrorless Digital Camera with 15-45mm is STM Lens Black #2680C011",
    qty: 95,
    newQty: "",
    status: "",
    mainImage: "/canon-eos-m50-camera.jpg",
    totalCost: 539.92,
    shippingFee: 0.0,
    sellingPrice: 599.0,
    newPrice: 0.0,
    profit: 59.08,
    profitPercent: 10.94,
    rowColor: "bg-green-100",
  },
  {
    id: 3,
    skuCode: "47-ZEUO-N031",
    asin: "B01K374P6E",
    active: "Inactive",
    fulfilledBy: "Seller",
    condition: "new-new",
    title: "Fuji 16500076 XP90- Compact and portable, yet rugged enough to handle even the most",
    qty: 0,
    newQty: "",
    status: "",
    mainImage: "/fuji-xp90-camera-blue.jpg",
    totalCost: 0.0,
    shippingFee: 0.0,
    sellingPrice: 136.0,
    newPrice: 0.0,
    profit: 0.0,
    profitPercent: 0.0,
    rowColor: "bg-orange-100",
  },
  {
    id: 4,
    skuCode: "5Y-W4AN-A85F",
    asin: "B07NC29V2Z",
    active: "Active",
    fulfilledBy: "Seller",
    condition: "new-new",
    title: "Canon Accessories Canon Extension Grip Eg-E1(Bk)",
    qty: 10,
    newQty: "",
    status: "",
    mainImage: "/canon-camera-grip-accessory.jpg",
    totalCost: 0.0,
    shippingFee: 0.0,
    sellingPrice: 79.0,
    newPrice: 0.0,
    profit: 0.0,
    profitPercent: 0.0,
    rowColor: "bg-orange-100",
  },
  {
    id: 5,
    skuCode: "6P-580G-ANKU",
    asin: "B011LSPEDC",
    active: "Active",
    fulfilledBy: "Seller",
    condition: "new-new",
    title: "Canon KP-108IN Ink Paper Set (2) Pack - 216 Prints.",
    qty: 3,
    newQty: "",
    status: "",
    mainImage: "/canon-ink-paper-set.jpg",
    totalCost: 0.0,
    shippingFee: 0.0,
    sellingPrice: 59.3,
    newPrice: 0.0,
    profit: 0.0,
    profitPercent: 0.0,
    rowColor: "bg-orange-100",
  },
]

export default function InventoryManagement() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Main Content */}
      <main className="p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">SKUs</h1>

        {/* Search and Controls */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Input type="text" placeholder="Type to search..." className="w-80 pr-10" />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>

          <div className="text-gray-600">Total matching records: 4117</div>
        </div>

        {/* Data Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-200">
                <tr className="text-left text-sm font-medium text-gray-700">
                  <th className="px-4 py-3">#</th>
                  <th className="px-4 py-3">SKU Code</th>
                  <th className="px-4 py-3">ASIN</th>
                  <th className="px-4 py-3">Active</th>
                  <th className="px-4 py-3">Fulfilled By</th>
                  <th className="px-4 py-3">Edit Amazon / $</th>
                  <th className="px-4 py-3">Condition</th>
                  <th className="px-4 py-3">Title</th>
                  <th className="px-4 py-3">Qty</th>
                  <th className="px-4 py-3">New Qty</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Main Image</th>
                  <th className="px-4 py-3">Total Cost</th>
                  <th className="px-4 py-3">Shipping Fee</th>
                  <th className="px-4 py-3">Selling Price</th>
                  <th className="px-4 py-3">New Price</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Profit</th>
                  <th className="px-4 py-3">Profit%</th>
                </tr>
              </thead>
              <tbody>
                {inventoryData.map((item) => (
                  <tr key={item.id} className={`border-b ${item.rowColor} text-sm`}>
                    <td className="px-4 py-3">{item.id}</td>
                    <td className="px-4 py-3 font-medium">{item.skuCode}</td>
                    <td className="px-4 py-3">{item.asin}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          item.active === "Active" ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                        }`}
                      >
                        {item.active}
                      </span>
                    </td>
                    <td className="px-4 py-3">{item.fulfilledBy}</td>
                    <td className="px-4 py-3">
                      <div className="flex space-x-1">
                        <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white p-1 h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white p-1 h-8 w-8">
                          <DollarSign className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                    <td className="px-4 py-3">{item.condition}</td>
                    <td className="px-4 py-3 max-w-xs">
                      <div className="truncate" title={item.title}>
                        {item.title}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      {item.qty > 0 ? (
                        <div className="flex items-center">
                          {item.qty}
                          <Edit className="ml-1 h-3 w-3 text-gray-400" />
                        </div>
                      ) : (
                        <div className="flex items-center">
                          {item.qty}
                          <Edit className="ml-1 h-3 w-3 text-gray-400" />
                        </div>
                      )}
                    </td>
                    <td className="px-4 py-3">{item.newQty}</td>
                    <td className="px-4 py-3">{item.status}</td>
                    <td className="px-4 py-3">
                      <div className="w-16 h-16 bg-white border rounded p-1">
                        <Image
                          src={item.mainImage || "/placeholder.svg"}
                          alt={item.title}
                          width={60}
                          height={60}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">{item.totalCost.toFixed(2)}</td>
                    <td className="px-4 py-3 text-right">{item.shippingFee.toFixed(2)}</td>
                    <td className="px-4 py-3 text-right">
                      <div className="flex items-center justify-end">
                        {item.sellingPrice.toFixed(2)}
                        <Edit className="ml-1 h-3 w-3 text-gray-400" />
                      </div>
                    </td>
                    <td className="px-4 py-3 text-right">{item.newPrice.toFixed(2)}</td>
                    <td className="px-4 py-3"></td>
                    <td className="px-4 py-3 text-right">
                      <span className={item.profit < 0 ? "text-red-600" : "text-green-600"}>
                        {item.profit.toFixed(2)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className={item.profitPercent < 0 ? "text-red-600" : "text-green-600"}>
                        {item.profitPercent.toFixed(2)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
