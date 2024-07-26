import { NextRequest, NextResponse } from 'next/server';
import psicologos from '../../../../../public/psicologos.json';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  const psicologo = psicologos.find((p) => p.id === id);

  if (psicologo) {
    return NextResponse.json(psicologo);
  } else {
    return NextResponse.json({ message: 'Psicólogo não encontrado' }, { status: 404 });
  }
}