import React from "react";

// Mock data for demonstration
const mockRepair = {
  status: "Accepted",
  device: {
    name: "Samsung S25",
    type: "Smartphone",
    pickupAddress: "112, Normal Road, Baliwasan Zamboanga City",
    preferredTime: "Oct 25, 2025",
    repairType: "Screen Replacement",
    serviceType: "Pickup",
    description: "The screen of the phone is broken and it is not turning on.",
    images: [
      "https://placehold.co/150x150/e0f2fe/3b82f6?text=Phone+Front",
      "https://placehold.co/150x150/e0f2fe/3b82f6?text=Phone+Back",
    ],
  },
  shop: {
    name: "TechFix Pro",
    address: "5433 Dona Benita Drive, Canelar Zamboanga City",
    email: "techfix@gmail.com",
    phone: "998-505-177",
  },
  assessment: {
    condition: "Not Good.",
    issues: "The phone might have internal problems.",
    recommendation: "Overall it can be done.",
    references: [
      "https://placehold.co/150x150/e0f2fe/3b82f6?text=Ref+1",
      "https://placehold.co/150x150/e0f2fe/3b82f6?text=Ref+2",
    ],
  },
  quotation: {
    labor: "500.00 PHP",
    parts: [
      { name: "Samsung S25 Screen", cost: "4,500.00 PHP" },
      { name: "Samsung Front Camera", cost: "2,000.00 PHP" },
    ],
    total: "5,000.00 PHP",
    completion: "5 days",
    warranty: "6 Months",
  },
};

const RepairAccepted = () => {
  const { device, shop, assessment, quotation, status } = mockRepair;
  return (
    <div className="bg-gray-50 text-gray-900 flex flex-col min-h-screen font-inter">
      {/* Header Navigation */}
      <header className="border-b border-gray-200 bg-white w-full flex-shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-extrabold text-blue-600">PixelPatch</span>
            </div>
            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">AI Assistant</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Become a Partner</a>
              </div>
            </div>
            {/* Icons */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                {/* Notification Icon */}
                <button className="text-gray-500 hover:text-blue-600 rounded-full p-2 transition-colors">
                  <span className="sr-only">Notifications</span>
                  {/* ...icon svg... */}
                </button>
                {/* Chat Icon */}
                <button className="text-gray-500 hover:text-blue-600 rounded-full p-2 transition-colors">
                  <span className="sr-only">Messages</span>
                  {/* ...icon svg... */}
                </button>
                {/* Profile Avatar */}
                <div className="relative">
                  <button className="flex items-center justify-center h-10 w-10 rounded-full overflow-hidden border-2 border-gray-200 hover:border-blue-500 transition-colors">
                    <span className="sr-only">Open user menu</span>
                    <img className="h-full w-full object-cover" src="https://placehold.co/40x40/e0f2fe/3b82f6?text=U&font=inter" alt="User avatar" />
                  </button>
                </div>
              </div>
            </div>
            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button type="button" className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                <span className="sr-only">Open main menu</span>
                {/* ...icon svg... */}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-grow">
        {/* Status Banner */}
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-800 p-4 rounded-lg flex justify-between items-center mb-6">
          <p className="font-medium">Repair is ready to start.</p>
          <span className="text-xs font-medium bg-blue-200 text-blue-900 px-2.5 py-0.5 rounded-full">{status}</span>
        </div>

        {/* Progress Stepper */}
        <div className="w-full mb-8">
          {/* ...stepper code omitted for brevity... */}
        </div>

        {/* Main Content Area */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          {/* Request Information */}
          <div className="relative pb-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Request Information</h2>
            <div className="absolute top-0 right-0 text-right">
              <p className="text-xs text-gray-500">Estimates Reply</p>
              <p className="text-sm font-semibold text-gray-900">3-4 Days</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
              <div>
                <span className="text-gray-500">Device</span>
                <p className="font-medium text-gray-800">{device.name}</p>
              </div>
              <div>
                <span className="text-gray-500">Pickup Address</span>
                <p className="font-medium text-gray-800">{device.pickupAddress}</p>
              </div>
              <div>
                <span className="text-gray-500">Device Type</span>
                <p className="font-medium text-gray-800">{device.type}</p>
              </div>
              <div>
                <span className="text-gray-500">Preferred Time</span>
                <p className="font-medium text-gray-800">{device.preferredTime}</p>
              </div>
              <div>
                <span className="text-gray-500">Repair Type</span>
                <p className="font-medium text-gray-800">{device.repairType}</p>
              </div>
              <div>
                <span className="text-gray-500">Service Type</span>
                <p className="font-medium text-gray-800">{device.serviceType}</p>
              </div>
              <div className="md:col-span-2">
                <span className="text-gray-500">Description</span>
                <p className="font-medium text-gray-800">{device.description}</p>
              </div>
            </div>
          </div>

          {/* Shop Info & Reference Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-b border-gray-200 pb-6">
            {/* Shop Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Shop Information</h2>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3">
                <h3 className="font-semibold text-gray-900">{shop.name}</h3>
                <div className="text-sm">
                  <span className="text-gray-500">Address</span>
                  <p className="font-medium text-gray-800">{shop.address}</p>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Email</span>
                  <p className="font-medium text-gray-800">{shop.email}</p>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Phone</span>
                  <p className="font-medium text-gray-800">{shop.phone}</p>
                </div>
              </div>
            </div>
            {/* Reference Images */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Reference Images</h2>
              <div className="flex flex-wrap gap-4">
                {device.images.map((img, i) => (
                  <img key={i} src={img} alt={`Reference ${i + 1}`} className="w-24 h-24 rounded-lg object-contain border border-gray-200 bg-white p-1" />
                ))}
              </div>
            </div>
          </div>

          {/* Assessment & Quotation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
            {/* Assessment */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Assessment</h2>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3 text-sm">
                <div>
                  <span className="text-gray-500">Device Condition</span>
                  <p className="font-medium text-gray-800">{assessment.condition}</p>
                </div>
                <div>
                  <span className="text-gray-500">Observed Issues</span>
                  <p className="font-medium text-gray-800">{assessment.issues}</p>
                </div>
                <div>
                  <span className="text-gray-500">Recommendation Summary</span>
                  <p className="font-medium text-gray-800">{assessment.recommendation}</p>
                </div>
                <div>
                  <span className="text-gray-500">References</span>
                  <div className="flex flex-wrap gap-4 mt-2">
                    {assessment.references.map((img, i) => (
                      <img key={i} src={img} alt={`Assessment Reference ${i + 1}`} className="w-24 h-24 rounded-lg object-contain border border-gray-200 bg-white p-1" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Quotation */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quotation</h2>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Labor Fee:</span>
                  <span className="font-medium text-gray-800">{quotation.labor}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <span className="text-gray-600">Parts Cost:</span>
                  {quotation.parts.map((part, i) => (
                    <div key={i} className="flex justify-between items-center mt-1">
                      <span className="text-gray-500 pl-2">{part.name}</span>
                      <span className="font-medium text-gray-800">{part.cost}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-base">
                    <span className="font-semibold text-gray-900">Total Estimate:</span>
                    <span className="font-bold text-blue-600">{quotation.total}</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated Completion Time:</span>
                    <span className="font-medium text-gray-800">{quotation.completion}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-gray-600">Warranty Coverage:</span>
                    <span className="font-medium text-gray-800">{quotation.warranty}</span>
                  </div>
                </div>
                <a href="#" className="text-blue-600 hover:underline text-xs pt-2 inline-block">More...</a>
              </div>
            </div>
          </div>
        </div>

        {/* Support Center Banner */}
        <div className="mt-6 bg-blue-100 p-4 rounded-lg flex items-center justify-between">
          <p className="text-sm text-blue-800">
            <span className="font-semibold">Support Center:</span>
            Having issues with your request? <a href="#" className="font-medium underline hover:text-blue-600">Contact Support</a>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-end gap-3">
          <button className="rounded-lg border border-gray-300 bg-white py-2 px-5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            Cancel Request
          </button>
          <button className="rounded-lg border border-transparent bg-blue-600 py-2 px-5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Proceed to Payment
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16">
            {/* Column 1: Logo & Slogan */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <span className="text-2xl font-extrabold text-blue-600">PixelPatch</span>
              <p className="mt-3 text-sm text-gray-600">
                Where technology and expertise meet to bring your gadgets back to life.
              </p>
            </div>
            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Quick Links</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">AI Assistant</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Find Service</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Partner</a></li>
              </ul>
            </div>
            {/* Column 3: Company */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Career</a></li>
              </ul>
            </div>
            {/* Column 4: Support */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            {/* Column 5: Connect */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Connect With Us</h3>
              <ul className="mt-4 space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Facebook</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Instagram</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">X (Twitter)</a></li>
              </ul>
            </div>
          </div>
          {/* Sub-footer */}
          <div className="border-t border-gray-200 py-6">
            <p className="text-center text-sm text-gray-500">&copy; 2025 PixelPatch Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RepairAccepted;
