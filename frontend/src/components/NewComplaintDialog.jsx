import React, { useContext} from 'react'
import { NewApplicationDialogContext } from '../contexts/NewApplicationDialogContext';


const NewComplaintDialog = () => {
  const { show, setShow } = useContext(NewApplicationDialogContext);
  if (!show) return null;

  return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-5 rounded-md shadow-md w-1/2">
                <h2 className="text-lg font-bold mb-4">New Complaint</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Complaint Details</label>
                        <textarea className="mt-1 block w-full p-2 border rounded-md" rows="4"></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button type="button" className="bg-gray-300 px-4 py-2 rounded-md mr-2" onClick={() => setShow(false)}>Cancel</button>
                        <button type="submit" className="bg-[#FF5B2E] hover:bg-black hover:text-white text-white px-4 py-2 rounded-md">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewComplaintDialog