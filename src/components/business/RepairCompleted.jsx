import React from 'react';
import { useParams } from 'react-router-dom';

const RepairCompleted = () => {
  const { id } = useParams();

  return (
    <div className="flex h-full">
      <main className="flex-1 overflow-y-auto p-6">
        <div className="flex justify-center items-center mt-10">
          <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl text-center">
            <div className="text-6xl">✅</div>
            <h1 className="text-2xl font-bold mt-4">Repair Completed</h1>
            <p className="mt-2 text-gray-600">Request #{id || '001'} has been completed and the device was successfully dropped off to the client.</p>

            <div className="mt-6">
              <a href="/business/repairs" className="inline-block rounded-lg bg-blue-600 text-white px-5 py-2 font-medium hover:bg-blue-700">Back to Repairs</a>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <p>If you need to add notes or close the invoice, please do so in the Transactions section.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RepairCompleted;