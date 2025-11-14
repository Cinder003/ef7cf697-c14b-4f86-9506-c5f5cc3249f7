import { FiUsers } from 'react-icons/fi';

type EmptyStateProps = {
  onAddProspect: () => void;
};

const EmptyState = ({ onAddProspect }: EmptyStateProps) => {
  return (
    <div className="text-center p-12 bg-gradient-to-br from-purple-50/50 to-blue-50/50 rounded-xl border border-purple-200/50">
      <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-purple-200 to-blue-300 text-white shadow-lg shadow-purple-200/80">
        <FiUsers className="h-10 w-10" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-gray-800">No prospects found</h3>
      <p className="mt-2 text-sm text-gray-600">
        Get started by adding your first prospect to the list.
      </p>
      <div className="mt-6">
        <button
          onClick={onAddProspect}
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-bright-purple to-bright-blue hover:from-bright-purple/90 hover:to-bright-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bright-purple transition-transform transform hover:scale-105"
        >
          Add New Prospect
        </button>
      </div>
    </div>
  );
};

export default EmptyState;