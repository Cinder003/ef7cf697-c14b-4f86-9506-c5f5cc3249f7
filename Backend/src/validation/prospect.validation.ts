import { z } from 'zod';

export const createProspectSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phoneNumber: z.string().min(1, 'Phone number is required'),
  companyName: z.string().min(1, 'Company name is required'),
  companySize: z.string().min(1, 'Company size is required'),
});

export const updateProspectSchema = createProspectSchema.partial();