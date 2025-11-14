import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Prospect, ProspectFormData, prospectSchema } from '../interfaces/prospect.interface';
import Input from './ui/Input';
import Button from './ui/Button';
import { FiSave, FiUser, FiMail, FiPhone, FiBriefcase, FiUsers } from 'react-icons/fi';

type ProspectFormProps = {
  onSubmit: (data: ProspectFormData) => void;
  onClose: () => void;
  initialData?: Prospect | null;
  isLoading: boolean;
};

const companySizeOptions = ["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"];

const ProspectForm = ({ onSubmit, onClose, initialData, isLoading }: ProspectFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProspectFormData>({
    resolver: zodResolver(prospectSchema),
    defaultValues: initialData || {},
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="First Name"
          id="firstName"
          {...register('firstName')}
          error={errors.firstName?.message}
          icon={<FiUser />}
          placeholder="John"
        />
        <Input
          label="Last Name"
          id="lastName"
          {...register('lastName')}
          error={errors.lastName?.message}
          icon={<FiUser />}
          placeholder="Doe"
        />
      </div>
      <Input
        label="Email"
        id="email"
        type="email"
        {...register('email')}
        error={errors.email?.message}
        icon={<FiMail />}
        placeholder="john.doe@example.com"
      />
      <Input
        label="Phone Number"
        id="phoneNumber"
        {...register('phoneNumber')}
        error={errors.phoneNumber?.message}
        icon={<FiPhone />}
        placeholder="(123) 456-7890"
      />
      <Input
        label="Company Name"
        id="companyName"
        {...register('companyName')}
        error={errors.companyName?.message}
        icon={<FiBriefcase />}
        placeholder="Acme Inc."
      />
      <div>
        <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
          Company Size
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <FiUsers className="h-5 w-5 text-gray-400" />
          </div>
          <select
            id="companySize"
            {...register('companySize')}
            className="block w-full rounded-lg border-gray-300 bg-white/80 pl-10 shadow-sm focus:border-bright-purple focus:ring-bright-purple sm:text-sm transition duration-150 ease-in-out"
          >
            <option value="">Select size...</option>
            {companySizeOptions.map(size => <option key={size} value={size}>{size}</option>)}
          </select>
        </div>
        {errors.companySize && <p className="mt-2 text-sm text-red-600">{errors.companySize.message}</p>}
      </div>

      <div className="flex justify-end gap-4 pt-4">
        <Button type="button" variant="secondary" onClick={onClose} disabled={isLoading}>
          Cancel
        </Button>
        <Button type="submit" variant="primary" isLoading={isLoading} icon={<FiSave />}>
          {initialData ? 'Save Changes' : 'Create Prospect'}
        </Button>
      </div>
    </form>
  );
};

export default ProspectForm;