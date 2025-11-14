import { Request, Response } from 'express';
import prisma from '../config/db.config';
import { Prisma } from '@prisma/client';

export const getAllProspects = async (req: Request, res: Response) => {
  const { search } = req.query;
  try {
    const where: Prisma.ProspectWhereInput = search
      ? {
          OR: [
            { firstName: { contains: search as string, mode: 'insensitive' } },
            { lastName: { contains: search as string, mode: 'insensitive' } },
            { email: { contains: search as string, mode: 'insensitive' } },
            { companyName: { contains: search as string, mode: 'insensitive' } },
          ],
        }
      : {};

    const prospects = await prisma.prospect.findMany({
      where,
      orderBy: { createdAt: 'desc' },
    });
    res.status(200).json(prospects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching prospects', error });
  }
};

export const getProspectById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const prospect = await prisma.prospect.findUnique({ where: { id } });
    if (!prospect) {
      return res.status(404).json({ message: 'Prospect not found' });
    }
    res.status(200).json(prospect);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching prospect', error });
  }
};

export const createProspect = async (req: Request, res: Response) => {
  try {
    const newProspect = await prisma.prospect.create({
      data: req.body,
    });
    res.status(201).json(newProspect);
  } catch (error) {
     if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return res.status(409).json({ message: 'A prospect with this email already exists.' });
    }
    res.status(500).json({ message: 'Error creating prospect', error });
  }
};

export const updateProspect = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const updatedProspect = await prisma.prospect.update({
      where: { id },
      data: req.body,
    });
    res.status(200).json(updatedProspect);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return res.status(404).json({ message: 'Prospect not found' });
    }
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
      return res.status(409).json({ message: 'A prospect with this email already exists.' });
    }
    res.status(500).json({ message: 'Error updating prospect', error });
  }
};

export const deleteProspect = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.prospect.delete({ where: { id } });
    res.status(204).send();
  } catch (error) {
     if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2025') {
      return res.status(404).json({ message: 'Prospect not found' });
    }
    res.status(500).json({ message: 'Error deleting prospect', error });
  }
};