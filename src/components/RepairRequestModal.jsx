import React, { useState } from "react";
import axios from "axios";

export default function RepairRequestModal({
  onClose,
  shop,
  userDevices,
  userAddresses,
  onAddressAdded // <-- IMPORTANT: new callback to update parent state
}) {
  const [addingAddress, setAddingAddress] = useState(false);

  const [newAddress, setNewAddress] = useState({
    country: "Philippines",
    region: "",
    province: "",
    city: "",
    barangay: "",
    street: "",
    postal_code: "",
    label: "",
    latitude: 0,
    longitude: 0
  });

  const [form, setForm] = useState({
    device_id: "",
    service_type: "PICKUP",
    issue_description: "",
    pickup_address_id: "",
    preferred_date: "",
    notes: "",
    attachments: []
  });

  const API_BASE = import.meta.env.VITE_API_URL;


  const [savingAddress, setSavingAddress] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // -------------------------
  // Handle Address Input
  // -------------------------
  const handleAddressChange = (e) => {
    setNewAddress({ ...newAddress, [e.target.name]: e.target.value });
  };

  // -------------------------
  // Handle Form Input
  // -------------------------
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // -------------------------
  // Handle File Upload
  // -------------------------
  const handleFileUpload = (e) => {
    setForm({ ...form, attachments: e.target.files });
  };

  // -------------------------
  // Save Address
  // -------------------------
  const saveNewAddress = async () => {
    if (!newAddress.region || !newAddress.province || !newAddress.city || !newAddress.barangay) {
      alert("Please fill all required address fields.");
      return;
    }

    try {
      setSavingAddress(true);

      const res = await axios.post(
        `${API_BASE}/api/addresses`,
        newAddress,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      const created = res.data;

      const updatedAddresses = [...userAddresses, created];
      onAddressAdded(updatedAddresses);

      setForm(prev => ({ ...prev, pickup_address_id: created.id }));
      setAddingAddress(false);

    } catch (err) {
      console.error(err);
      alert("Failed to save new address.");
    } finally {
      setSavingAddress(false);
    }
  };


  // -------------------------
  // Submit Repair Request
  // -------------------------
  const handleSubmit = async () => {
    if (!form.device_id || !form.pickup_address_id || !form.issue_description || !form.preferred_date) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      setSubmitting(true);

      const data = new FormData();

      data.append("shop_id", shop.id);
      data.append("service_type", form.service_type);
      data.append("device_id", form.device_id);
      data.append("issue_description", form.issue_description);
      data.append("pickup_address_id", form.pickup_address_id);
      data.append("preferred_date", form.preferred_date);
      data.append("notes", form.notes);

      if (form.attachments.length > 0) {
        Array.from(form.attachments).forEach((file) => {
          data.append("attachments", file);
        });
      }

      axios.post(`${API_BASE}/api/service-requests`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data"
        }
      });

      alert("Service request submitted!");
      onClose();

    } catch (err) {
      console.error(err);
      alert("Failed to submit service request.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!shop) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute bg-white top-4 right-4 p-2 text-gray-400 hover:text-gray-600 rounded-full shadow"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Request a Repair from {shop?.name}
        </h2>

        <div className="space-y-7">

          {/* DEVICE SELECT */}
          <div>
            <label className="block font-medium mb-1">Select Your Device *</label>
            <select
              name="device_id"
              value={form.device_id}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 bg-gray-50"
            >
              <option value="">-- Select Device --</option>
              {userDevices?.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.brand} {d.name} ({d.model})
                </option>
              ))}
            </select>
          </div>

          {/* ISSUE DESCRIPTION */}
          <div>
            <label className="block font-medium mb-1">Describe the Issue *</label>
            <textarea
              name="issue_description"
              value={form.issue_description}
              onChange={handleChange}
              rows="4"
              className="w-full border rounded-lg p-3 bg-gray-50"
              placeholder="Explain the problem you're experiencing..."
            />
          </div>

          {/* ADDRESS SELECTION */}
          {!addingAddress && (
            <div>
              <label className="block font-medium mb-1">Pickup / Drop-off Address *</label>
              <select
                name="pickup_address_id"
                value={form.pickup_address_id}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 bg-gray-50"
              >
                <option value="">-- Select Address --</option>
                {userAddresses?.map((addr) => (
                  <option key={addr.id} value={addr.id}>
                    {addr.street}, {addr.barangay}, {addr.city}
                  </option>
                ))}
              </select>

              <button
                className=" bg-white mt-3 px-3 py-1 border border-blue-600 text-blue-600 text-sm rounded hover:bg-blue-50"
                onClick={() => setAddingAddress(true)}
              >
                + Add New Address
              </button>
            </div>
          )}

          {/* NEW ADDRESS FORM */}
          {addingAddress && (
            <div className="space-y-4 border border-gray-200 p-4 rounded-lg bg-gray-50 shadow-inner">
              <h3 className="font-semibold text-lg mb-2">Add New Address</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  className="border p-2 rounded bg-white"
                  placeholder="Region *"
                  name="region"
                  value={newAddress.region}
                  onChange={handleAddressChange}
                />
                <input
                  className="border p-2 rounded bg-white"
                  placeholder="Province *"
                  name="province"
                  value={newAddress.province}
                  onChange={handleAddressChange}
                />
                <input
                  className="border p-2 rounded bg-white"
                  placeholder="City *"
                  name="city"
                  value={newAddress.city}
                  onChange={handleAddressChange}
                />
                <input
                  className="border p-2 rounded bg-white"
                  placeholder="Barangay *"
                  name="barangay"
                  value={newAddress.barangay}
                  onChange={handleAddressChange}
                />
                <input
                  className="border p-2 rounded bg-white col-span-full"
                  placeholder="Street (optional)"
                  name="street"
                  value={newAddress.street}
                  onChange={handleAddressChange}
                />
                <input
                  className="border p-2 rounded bg-white"
                  placeholder="Postal Code"
                  name="postal_code"
                  value={newAddress.postal_code}
                  onChange={handleAddressChange}
                />
                <input
                  className="border p-2 rounded bg-white"
                  placeholder="Label (Home/Work/etc.)"
                  name="label"
                  value={newAddress.label}
                  onChange={handleAddressChange}
                />
              </div>

              {/* ACTION BUTTONS FOR NEW ADDRESS */}
              <div className="flex justify-end gap-2 pt-3">
                <button
                  className="px-4 py-2 bg-red-600 text-white rounded"
                  onClick={() => setAddingAddress(false)}
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                  onClick={saveNewAddress}
                  disabled={savingAddress}
                >
                  {savingAddress ? "Saving..." : "Save Address"}
                </button>
              </div>
            </div>
          )}

          {/* PREFERRED DATE */}
          <div>
            <label className="block font-medium mb-1">Preferred Date *</label>
            <input
              type="datetime-local"
              name="preferred_date"
              value={form.preferred_date}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 bg-gray-50"
            />
          </div>

          {/* ADDITIONAL NOTES */}
          <div>
            <label className="block font-medium mb-1">Additional Notes (Optional)</label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows="2"
              className="w-full border rounded-lg p-3 bg-gray-50"
            ></textarea>
          </div>

          {/* ATTACHMENTS */}
          <div>
            <label className="block font-medium mb-1">Upload Photos (Optional)</label>
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              className="w-full border rounded-lg p-3 bg-gray-50"
            />
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-red-600 text-white rounded-lg"
          >
            Cancel
          </button>

          <button
            disabled={submitting}
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:bg-blue-300"
          >
            {submitting ? "Submitting..." : "Submit Request"}
          </button>
        </div>

      </div>
    </div>
  );

}
