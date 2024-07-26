import Image from "next/image";

type Props = {
  nickName: string,
  bio: string,
  sessionPrice: number,
  montlyPrice: number,
  specialization: string,
  crp: string,
  avatarUrl: string
};

export function Card({ nickName, bio, sessionPrice, montlyPrice, specialization, crp, avatarUrl }: Props) {
  return (
    <div className="sm:max-w-[200px] min-w-[448px] h-[292px] bg-white rounded-2xl border border-b-border p-6 sm:p-12 lg:p-[32px] shadow-dShadow hover:shadow-hShadow">
      <div className="flex gap-[16px]">
        <div>
          <Image
            src={avatarUrl}
            alt="Psicólogo"
            objectFit="cover"
            objectPosition="center"
            className="rounded-full object-cover"
            width={72}  
            height={72} 
          />
        </div>
        <div>
          <div className="font-bold text-txt-blue">{nickName}</div>
          <div className="text-sm text-txt-gray">{specialization}</div>
          <div className="text-sm text-txt-gray">CRP: {crp}</div>
        </div>
      </div>
      <div className="flex mt-4 gap-4">
        <div className="flex-1">Primeira sessão
          <div className="bg-light-gray rounded-md text-center py-[8px]">R$ {sessionPrice}</div>
        </div>
        <div className="flex-1">Segunda sessão
          <div className="bg-light-green rounded-md text-center py-[8px] font-bold">R$ {montlyPrice}</div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm text-txt-gray leading-[16px]">{bio}</p>
        <div className="text-sm text-sky-500 underline">Ver perfil completo</div>
      </div>
    </div>
  );
}
