import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RepairDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - in a real app, this would be fetched based on the ID
  const repairRequest = {
    id: '001',
    deviceName: 'Samsung S25',
    deviceType: 'Smartphone',
    repairType: 'Screen Replacement',
    serviceType: 'Pickup',
    status: 'pending',
    pickupAddress: '112, Normal Road, Baliwasan Zamboanga City',
    preferredTime: 'Oct 25, 2025',
    description: 'The screen of the phone is broken and it is not turning on.',
    referenceImages: [
      'https://placehold.co/200x200/e0f2fe/3b82f6?text=Phone+Image+1',
      'https://placehold.co/200x200/e0f2fe/3b82f6?text=Phone+Image+2',
      'https://placehold.co/200x200/e0f2fe/3b82f6?text=Phone+Image+3'
    ]
  };

  const getStatusStyle = (status) => {
    const styles = {
      pending: 'bg-yellow-100 text-yellow-800',
      rejected: 'bg-red-100 text-red-800',
      'in-progress': 'bg-orange-100 text-orange-800',
      done: 'bg-green-100 text-green-800',
      completed: 'bg-gray-100 text-gray-800'
    };
    return styles[status] || 'bg-gray-100 text-gray-800';
  };

  const handleReject = () => {
    // Add reject logic here
    console.log('Rejecting request:', id);
  };

  const handleConfirm = () => {
    // Navigate to awaiting assessment page
    navigate(`/business/repairs/awaiting-assessment`);
  };

  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Request #{repairRequest.id}</h1>
        <span className={`text-sm font-medium ${getStatusStyle(repairRequest.status)} px-3 py-1 rounded-full mt-2 sm:mt-0`}>
          {repairRequest.status.charAt(0).toUpperCase() + repairRequest.status.slice(1)}
        </span>
      </div>

      {/* Request Details Card */}
      <div className="bg-white rounded-lg shadow border border-gray-100 p-6">
        {/* Request Information */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3 mb-4">
            Request Information
          </h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">{repairRequest.deviceName}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Device Type</label>
                <p className="text-sm text-gray-800">{repairRequest.deviceType}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Repair Type</label>
                <p className="text-sm text-gray-800">{repairRequest.repairType}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Service Type</label>
                <p className="text-sm text-gray-800">{repairRequest.serviceType}</p>
              </div>
            </div>
            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Pickup Address</label>
                <p className="text-sm text-gray-800">{repairRequest.pickupAddress}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Preferred Time</label>
                <p className="text-sm text-gray-800">{repairRequest.preferredTime}</p>
              </div>
            </div>
          </div>
          {/* Full Width Description */}
          <div className="mt-6">
            <label className="text-sm font-medium text-gray-500">Description</label>
            <p className="text-sm text-gray-800">{repairRequest.description}</p>
          </div>
        </section>

        {/* Reference Images */}
        <section className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3 mb-4">
            Reference Images
          </h2>
          <div className="flex flex-wrap gap-4">
            {repairRequest.referenceImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Reference Image ${index + 1}`}
                className="h-32 w-32 rounded-lg object-contain border border-gray-200 bg-gray-50"
              />
            ))}
          </div>
        </section>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={handleReject}
          className="px-6 py-2 rounded-lg bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors shadow-sm"
        >
          Reject
        </button>
        <button
          onClick={handleConfirm}
          className="px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
        >
          Confirm Pickup
        </button>
      </div>
    </main>
  );
};

export { RepairDetails as default };