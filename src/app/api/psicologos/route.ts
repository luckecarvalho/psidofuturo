import { NextResponse } from 'next/server';
import psicologos from '../../../../public/psicologos.json'; 

export async function GET() {
  return NextResponse.json(psicologos);
}
