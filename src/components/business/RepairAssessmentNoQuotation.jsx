import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const RepairAssessmentNoQuotation = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Modal and form state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [partPrice, setPartPrice] = useState('2500.00');
  const [partCurrency, setPartCurrency] = useState('PHP');
  const [laborFee, setLaborFee] = useState('2500.00');
  const [laborCurrency, setLaborCurrency] = useState('PHP');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [warrantyIncluded, setWarrantyIncluded] = useState(true);
  const [warrantyDuration, setWarrantyDuration] = useState(5);
  const [warrantyUnit, setWarrantyUnit] = useState('Months');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gather form data
    const payload = {
      part: { price: partPrice, currency: partCurrency },
      labor: { fee: laborFee, currency: laborCurrency },
      estimatedTime,
      warranty: warrantyIncluded ? { duration: warrantyDuration, unit: warrantyUnit } : null
    };
    console.log('Submitting quotation for request', id, payload);
    // TODO: send payload to API
    closeModal();
  };

  return (
    <main className="flex-1 overflow-y-auto p-6">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Request #{id || '001'}</h1>
        <span className="text-sm font-medium bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full mt-2 sm:mt-0">Pending</span>
      </div>

      {/* Request Details Card */}
      <div className="bg-white rounded-lg shadow border border-gray-100">
        {/* Request Information */}
        <section className="bg-gray-100/50 p-6 rounded-t-lg">
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3 mb-4">Request Information</h2>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Samsung S25</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Device Type</label>
                <p className="text-sm text-gray-800">Smartphone</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Repair Type</label>
                <p className="text-sm text-gray-800">Screen Replacement</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Service Type</label>
                <p className="text-sm text-gray-800">Pickup</p>
              </div>
            </div>
            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Pickup Address</label>
                <p className="text-sm text-gray-800">112, Normal Road, Baliwasan Zamboang City</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Preferred Time</label>
                <p className="text-sm text-gray-800">Oct 25, 2025</p>
              </div>
            </div>
          </div>
          {/* Full Width Description */}
          <div className="mt-6">
            <label className="text-sm font-medium text-gray-500">Description</label>
            <p className="text-sm text-gray-800">The screen of the phone is broken and it is not turning on.</p>
          </div>
        </section>

        {/* Reference Images */}
        <section className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-3 mb-4">Reference Images</h2>
          <div className="flex flex-wrap gap-4">
            <img src="https://placehold.co/200x200/e0f2fe/3b82f6?text=Phone+Image+1" alt="Reference Image 1" className="h-32 w-32 rounded-lg object-contain border border-gray-200 bg-gray-50" />
            <img src="https://placehold.co/200x200/e0f2fe/3b82f6?text=Phone+Image+2" alt="Reference Image 2" className="h-32 w-32 rounded-lg object-contain border border-gray-200 bg-gray-50" />
            <img src="https://placehold.co/200x200/e0f2fe/3b82f6?text=Phone+Image+3" alt="Reference Image 3" className="h-32 w-32 rounded-lg object-contain border border-gray-200 bg-gray-50" />
          </div>
        </section>

        {/* Assessment Section */}
        <section className="p-6 border-t border-gray-200">
          <div className="flex justify-between items-center border-b border-gray-200 pb-3 mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Assessment</h2>
            <button className="text-sm font-medium text-blue-600 hover:text-blue-800">Edit</button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-500">Device Condition</label>
              <p className="text-sm text-gray-800">Not Good.</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Observed Issues</label>
              <p className="text-sm text-gray-800">The phone might have internal problems.</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Overall</label>
              <p className="text-sm text-gray-800">Overall it can be done.</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">References</label>
              <div className="flex flex-wrap gap-4 mt-2">
                <img src="https://placehold.co/200x200/e0f2fe/3b82f6?text=Phone+Image+1" alt="Reference Image 1" className="h-32 w-32 rounded-lg object-contain border border-gray-200 bg-gray-50" />
                <img src="https://placehold.co/200x200/e0f2fe/3b82f6?text=Phone+Image+2" alt="Reference Image 2" className="h-32 w-32 rounded-lg object-contain border border-gray-200 bg-gray-50" />
                <img src="https://placehold.co/200x200/e0f2fe/3b82f6?text=Phone+Image+3" alt="Reference Image 3" className="h-32 w-32 rounded-lg object-contain border border-gray-200 bg-gray-50" />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={() => navigate(`/business/repairs/${id}/in-progress`)}
          className="px-6 py-2 rounded-lg bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition-colors shadow-sm"
        >
          Start
        </button>
        <button id="addQuotationBtn" onClick={openModal} className="px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
          Add Quotation
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0" onClick={closeModal} />
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg p-6 relative z-10">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-900">Add Quotation</h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-gray-700" aria-label="Close modal">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700">Device Details</label>
                <p className="text-base font-semibold text-gray-900">Samsung S25</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Findings from Assessment</label>
                <p className="text-base text-gray-800">This phone screen need to be replaced in a delicate manner.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Parts Required</label>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-base text-gray-800">S25 Brand New Screen</p>
                    <p className="text-xs text-gray-500">x1</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <label htmlFor="part-price" className="text-sm font-medium text-gray-700">Price</label>
                    <input id="part-price" value={partPrice} onChange={(e) => setPartPrice(e.target.value)} className="w-28 rounded-md border-gray-200 bg-gray-100 text-gray-800 text-sm text-right" />
                    <select value={partCurrency} onChange={(e) => setPartCurrency(e.target.value)} className="rounded-md border-gray-200 bg-gray-100 text-gray-800 text-sm">
                      <option>PHP</option>
                      <option>USD</option>
                    </select>
                  </div>
                </div>
                <button type="button" className="mt-2 text-sm text-blue-600 hover:text-blue-800">+ Add another part</button>
              </div>

              <div>
                <label htmlFor="labor-fee" className="block text-sm font-medium text-gray-700 mb-1">Labor Fee</label>
                <div className="flex items-center gap-2">
                  <input id="labor-fee" value={laborFee} onChange={(e) => setLaborFee(e.target.value)} className="w-32 rounded-md border-gray-200 bg-gray-100 text-gray-800 text-sm" />
                  <select value={laborCurrency} onChange={(e) => setLaborCurrency(e.target.value)} className="rounded-md border-gray-200 bg-gray-100 text-gray-800 text-sm">
                    <option>PHP</option>
                    <option>USD</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="estimated-time" className="block text-sm font-medium text-gray-700 mb-1">Estimated Time</label>
                <input id="estimated-time" value={estimatedTime} onChange={(e) => setEstimatedTime(e.target.value)} placeholder="MM/DD/YY" className="w-full rounded-md border-gray-200 bg-gray-100 text-gray-800 text-sm" />
              </div>

              <div>
                <div className="flex items-center">
                  <input id="warranty-included" name="warranty-included" type="checkbox" checked={warrantyIncluded} onChange={(e) => setWarrantyIncluded(e.target.checked)} className="h-4 w-4 rounded text-blue-600 border-gray-300 focus:ring-blue-500" />
                  <label htmlFor="warranty-included" className="ml-2 block text-sm font-medium text-blue-600">Warranty Included</label>
                </div>
              </div>

              <div>
                <label htmlFor="warranty-duration" className="block text-sm font-medium text-gray-700 mb-1">Warranty</label>
                <div className="flex items-center gap-2">
                  <input type="number" id="warranty-duration" value={warrantyDuration} onChange={(e) => setWarrantyDuration(e.target.value)} className="w-full rounded-md border-gray-200 bg-gray-100 text-gray-800 text-sm" />
                  <select value={warrantyUnit} onChange={(e) => setWarrantyUnit(e.target.value)} className="rounded-md border-gray-200 bg-gray-100 text-gray-800 text-sm">
                    <option>Months</option>
                    <option>Days</option>
                    <option>Years</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button type="submit" className="px-6 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">Submit</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
};

export default RepairAssessmentNoQuotation;
