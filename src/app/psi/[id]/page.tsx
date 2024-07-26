import Image from 'next/image';
import Link from 'next/link';
import Loader from '@/assets/Vector-loading.svg';

type ProfessionalContact = {
    id: string;
    type: string;
    value: string;
};

type Anamnesis = {
    id: string;
    name: string;
};

type professionalCareerTrail = {
    id: string;
    name: string;
};

type Psicologo = {
    id: string;
    firstName: string;
    lastName: string;
    nickName: string;
    bio: string;
    avatarUrl: string;
    gender: string;
    sessionPrice: number;
    crp: string;
    specialization: string;
    montlyPrice: number;
    professionalContact: ProfessionalContact[];
    anamnesis: Anamnesis[];
    professionalCareerTrail: professionalCareerTrail[];
};

interface Props {
    params: { id: string };
}

async function fetchPsicologo(id: string): Promise<Psicologo> {
    const res = await fetch(`${process.env.BASE_URL}/api/psicologos/${id}`);
    if (!res.ok) {
        throw new Error('Falha ao buscar dados');
    }
    return res.json();
}


const PsicologoDetails = async ({ params }: Props) => {
    const psicologo = await fetchPsicologo(params.id);

    return (
        <div className="flex flex-col items-center gap-6 pt-7 pb-7">
            <Link href="/" className="w-[220px] h-[46px] bg-b-pink text-white py-2 px-4 rounded-full flex justify-center items-center">
                <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5M12 19l-7-7 7-7"></path>
                </svg>
                Retornar à lista
            </Link>

            <div className="w-full max-w-2xl bg-white rounded-2xl border border-b-border p-6 shadow-dShadow">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <div className="flex-shrink-0">
                        <Image
                            src={psicologo.avatarUrl}
                            alt="Psicólogo"
                            className="rounded-full object-cover"
                            width={72}
                            height={72}
                        />
                    </div>
                    <div>
                        <div className="font-bold text-txt-blue">{psicologo.nickName}</div>
                        <div className="text-sm text-txt-gray">{psicologo.specialization}</div>
                        <div className="text-sm text-txt-gray">CRP: {psicologo.crp}</div>
                    </div>
                </div>
                <div className="flex mt-4 gap-4">
                    <div className="flex-1">
                        Primeira sessão
                        <div className="bg-light-gray rounded-md text-center py-2">R$ {psicologo.sessionPrice}</div>
                    </div>
                    <div className="flex-1">
                        Segunda sessão
                        <div className="bg-light-green rounded-md text-center py-2 font-bold">R$ {psicologo.montlyPrice}</div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-2xl bg-white rounded-2xl border border-b-border p-6 shadow-dShadow">
                <div className="text-lg font-semibold mb-2">Descrição pessoal</div>
                <p>{psicologo.bio}</p>
            </div>

            <div className="w-full max-w-2xl bg-white rounded-2xl border border-b-border p-6 shadow-dShadow">
                <div className="text-lg font-semibold mb-2">Anamnese</div>
                <div className="flex flex-wrap gap-2">
                    {psicologo.anamnesis.map((item) => (
                        <div key={item.id} className="flex gap-2 items-center px-3 py-1 rounded-md text-txt-pink text-sm font-medium bg-light-pink">
                            {item.name}
                            <svg className="w-4 h-4 text-txt-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-2xl bg-white rounded-2xl border border-b-border p-6 shadow-dShadow">
                <div className="text-lg font-semibold mb-2">Formação profissional</div>
                <div className="flex flex-wrap gap-2">
                    {psicologo.professionalCareerTrail && Array.isArray(psicologo.professionalCareerTrail) ? (
                        psicologo.professionalCareerTrail.map((item) => (
                            <div key={item.id} className="flex items-center gap-2">
                                <div className="w-7 h-7 rounded-full bg-light-pink flex justify-center items-center">
                                    <svg className="w-6 h-4 text-txt-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7H8V6a2 2 0 012-2h4a2 2 0 012 2v1zM4 8h16v12a2 2 0 01-2 2H6a2 2 0 01-2-2V8z"></path>
                                    </svg>
                                </div>
                                <span>{item.name}</span>
                            </div>
                        ))
                    ) : (
                        <div>Nenhuma formação profissional disponível</div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PsicologoDetails;
