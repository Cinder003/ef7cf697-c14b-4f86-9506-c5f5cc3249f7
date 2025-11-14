import { Prospect } from '../interfaces/prospect.interface';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { motion } from 'framer-motion';

type ProspectTableProps = {
  prospects: Prospect[];
  onEdit: (prospect: Prospect) => void;
  onDelete: (id: string) => void;
};

const ProspectTable = ({ prospects, onEdit, onDelete }: ProspectTableProps) => {
  const tableRowVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
      },
    }),
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-purple-200/50">
        <thead className="bg-gradient-to-r from-purple-100 to-blue-100">
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Contact Info</th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Company</th>
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200/50 bg-white/30">
          {prospects.map((prospect, index) => (
            <motion.tr
              key={prospect.id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={tableRowVariants}
              className="hover:bg-yellow-50/50 transition-colors duration-200"
            >
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                <div className="font-medium text-gray-900">{prospect.firstName} {prospect.lastName}</div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <div className="text-gray-900">{prospect.email}</div>
                <div className="text-gray-500">{prospect.phoneNumber}</div>
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                <div className="text-gray-900">{prospect.companyName}</div>
                <div className="text-gray-500">Size: {prospect.companySize}</div>
              </td>
              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <div className="flex items-center justify-end gap-3">
                  <button onClick={() => onEdit(prospect)} className="p-2 rounded-full text-cyan-600 hover:bg-cyan-100 hover:text-cyan-800 transition-all duration-200 transform hover:scale-110">
                    <FiEdit className="h-5 w-5" />
                  </button>
                  <button onClick={() => onDelete(prospect.id)} className="p-2 rounded-full text-rose-500 hover:bg-rose-100 hover:text-rose-700 transition-all duration-200 transform hover:scale-110">
                    <FiTrash2 className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProspectTable;