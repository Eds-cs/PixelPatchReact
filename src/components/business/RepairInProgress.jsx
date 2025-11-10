import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RequestExtensionModal } from './index';

const RepairInProgress = () => {
  const { id } = useParams();
  const [isExtensionModalOpen, setIsExtensionModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex h-full">
      {/* Left Sidebar & header are part of global layout in app; this component focuses on page content */}
      <main className="flex-1 overflow-y-auto p-6">
        <div className="bg-yellow-100 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg mb-6">
          <span className="font-bold">Deadline:</span> Oct 30, 2025
        </div>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Request #{id || '001'}</h1>
          <span className="text-sm font-medium bg-green-100 text-green-800 px-3 py-1 rounded-full">In Progress</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Request Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Device</span>
                  <p className="font-medium text-gray-800">Samsung S25</p>
                </div>
                <div>
                  <span className="text-gray-500">Pickup Address</span>
                  <p className="font-medium text-gray-800">112, Normal Road, Baliwasan Zamboanga City</p>
                </div>
                <div>
                  <span className="text-gray-500">Device Type</span>
                  <p className="font-medium text-gray-800">Smartphone</p>
                </div>
                <div>
                  <span className="text-gray-500">Preferred Time</span>
                  <p className="font-medium text-gray-800">Oct 25, 2025</p>
                </div>
                <div>
                  <span className="text-gray-500">Repair Type</span>
                  <p className="font-medium text-gray-800">Screen Replacement</p>
                </div>
                <div>
                  <span className="text-gray-500">Service Type</span>
                  <p className="font-medium text-gray-800">Pickup</p>
                </div>
                <div className="md:col-span-2">
                  <span className="text-gray-500">Description</span>
                  <p className="font-medium text-gray-800">The screen of the phone is broken and it is not turning on.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Reference Images</h2>
              <div className="flex flex-wrap gap-4">
                <img src="https://placehold.co/150x150/e0f2fe/3b82f6?text=Phone+Front" alt="Phone Front" className="w-24 h-24 rounded-lg object-contain border border-gray-200" />
                <img src="https://placehold.co/150x150/e0f2fe/3b82f6?text=Phone+Back" alt="Phone Back" className="w-24 h-24 rounded-lg object-contain border border-gray-200" />
                <img src="https://placehold.co/150x150/e0f2fe/3b82f6?text=Phone+Side" alt="Phone Side" className="w-24 h-24 rounded-lg object-contain border border-gray-200" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Assessment</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Device Condition</span>
                  <p className="font-medium text-gray-800">Not Good.</p>
                </div>
                <div>
                  <span className="text-gray-500">Observed Issues</span>
                  <p className="font-medium text-gray-800">The phone might have internal problems.</p>
                </div>
                <div className="md:col-span-2">
                  <span className="text-gray-500">Recommendation</span>
                  <p className="font-medium text-gray-800">Overall it can be done.</p>
                </div>
                <div className="md:col-span-2">
                  <span className="text-gray-500">References</span>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <img src="https://placehold.co/150x150/e0f2fe/3b82f6?text=Ref+1" alt="Reference 1" className="w-24 h-24 rounded-lg object-contain border border-gray-200" />
                    <img src="https://placehold.co/150x150/e0f2fe/3b82f6?text=Ref+2" alt="Reference 2" className="w-24 h-24 rounded-lg object-contain border border-gray-200" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Transaction Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Paid by:</span>
                  <p className="font-medium text-gray-800">GCash</p>
                </div>
                <div>
                  <span className="text-gray-500">Client:</span>
                  <p className="font-medium text-gray-800">John Doe</p>
                </div>
                <div>
                  <span className="text-gray-500">Invoice:</span>
                  <a href="#" className="font-medium text-blue-600 hover:underline">View &gt;</a>
                </div>
                <div>
                  <span className="text-gray-500">Address:</span>
                  <p className="font-medium text-gray-800">112, Normal Road, Baliwasan Zamboanga City</p>
                </div>
                <div>
                  <span className="text-gray-500">Request Time:</span>
                  <p className="font-medium text-gray-800">10-20-2025 09:18</p>
                </div>
                <div>
                  <span className="text-gray-500">Contact:</span>
                  <p className="font-medium text-gray-800">+63 9875567412</p>
                </div>
                <div>
                  <span className="text-gray-500">Payment Time:</span>
                  <p className="font-medium text-gray-800">10-22-2025 10:41</p>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow border border-gray-100 sticky top-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quotation</h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Labor Fee:</span>
                  <span className="font-medium text-gray-800">500.00 PHP</span>
                </div>
                <div className="border-t border-gray-100 pt-3">
                  <span className="text-gray-600">Parts Cost:</span>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-gray-500 pl-2">Samsung S25 Screen</span>
                    <span className="font-medium text-gray-800">4,500.00 PHP</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-gray-500 pl-2">Samsung Front Camera</span>
                    <span className="font-medium text-gray-800">2,500.00 PHP</span>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between text-base">
                    <span className="font-semibold text-gray-900">Total Estimate:</span>
                    <span className="font-bold text-blue-600">5,000.00 PHP</span>
                  </div>
                </div>
                <div className="border-t border-gray-100 pt-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated Completion Time:</span>
                    <span className="font-medium text-gray-800">5 days</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-gray-600">Warranty Coverage:</span>
                    <span className="font-medium text-gray-800">6 Months</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

  <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end gap-3">
          <button
            type="button"
            onClick={() => setIsExtensionModalOpen(true)}
            className="rounded-lg border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Request Extension
          </button>
          <button
            type="button"
            onClick={() => navigate(`/business/repairs/${id || '001'}/done`)}
            className="rounded-lg border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Mark as Done
          </button>
        </div>

        {/* Request Extension Modal */}
        <RequestExtensionModal
          isOpen={isExtensionModalOpen}
          onClose={() => setIsExtensionModalOpen(false)}
          requestId={id || '001'}
        />

      </main>
    </div>
  );
};

export default RepairInProgress;
