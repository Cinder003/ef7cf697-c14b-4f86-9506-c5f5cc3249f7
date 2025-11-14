import { useState, useEffect, useCallback } from 'react';
import { Prospect, ProspectFormData } from '../interfaces/prospect.interface';
import { getProspects, createProspect, updateProspect, deleteProspect } from '../api/prospects';
import Header from '../components/Header';
import ProspectTable from '../components/ProspectTable';
import EmptyState from '../components/EmptyState';
import LoadingSpinner from '../components/LoadingSpinner';
import Modal from '../components/ui/Modal';
import ProspectForm from '../components/ProspectForm';
import Button from '../components/ui/Button';
import SearchBar from '../components/SearchBar';
import { FiPlus } from 'react-icons/fi';
import toast from 'react-hot-toast';
import { useDebounce } from '../hooks/useDebounce';
import { motion } from 'framer-motion';

const ProspectManagementPage = () => {
  const [prospects, setProspects] = useState<Prospect[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingProspect, setEditingProspect] = useState<Prospect | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const fetchProspects = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await getProspects(debouncedSearchTerm);
      setProspects(data);
    } catch (error) {
      toast.error('Failed to fetch prospects.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    fetchProspects();
  }, [fetchProspects]);

  const openModal = (prospect: Prospect | null = null) => {
    setEditingProspect(prospect);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProspect(null);
  };

  const handleFormSubmit = async (data: ProspectFormData) => {
    setIsSubmitting(true);
    try {
      if (editingProspect) {
        await updateProspect(editingProspect.id, data);
        toast.success('Prospect updated successfully!');
      } else {
        await createProspect(data);
        toast.success('Prospect created successfully!');
      }
      closeModal();
      fetchProspects();
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || (editingProspect ? 'Failed to update prospect.' : 'Failed to create prospect.');
      toast.error(errorMessage);
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this prospect?')) {
      try {
        await deleteProspect(id);
        toast.success('Prospect deleted successfully!');
        fetchProspects();
      } catch (error) {
        toast.error('Failed to delete prospect.');
        console.error(error);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-2xl shadow-purple-200/40 border border-purple-200/50"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <SearchBar value={searchTerm} onChange={setSearchTerm} />
            </div>
            <Button variant="primary" onClick={() => openModal()} icon={<FiPlus />}>
              Add Prospect
            </Button>
          </div>

          {isLoading ? (
            <LoadingSpinner />
          ) : prospects.length > 0 ? (
            <div className="overflow-hidden rounded-lg border border-gray-200/50 shadow-md">
              <ProspectTable prospects={prospects} onEdit={openModal} onDelete={handleDelete} />
            </div>
          ) : (
            <EmptyState onAddProspect={() => openModal()} />
          )}
        </motion.div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={editingProspect ? 'Edit Prospect' : 'Add New Prospect'}
      >
        <ProspectForm
          onSubmit={handleFormSubmit}
          onClose={closeModal}
          initialData={editingProspect}
          isLoading={isSubmitting}
        />
      </Modal>
    </>
  );
};

export default ProspectManagementPage;