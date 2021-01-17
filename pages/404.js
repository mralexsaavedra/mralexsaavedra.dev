import Link from 'next/link';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

export default function NotFound() {
  return (
    <Container>
      <NextSeo
        title="404 – Alexander Saavedra"
        canonical="https://mralexsaavedra.dev/404"
        openGraph={{
          url: 'https://mralexsaavedra.dev/404',
          title: '404 – Alexander Saavedra'
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          451 – No disponible
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Parece que has escontrado algo que solía existir o escribiste algo incorrecto.
          Puede que hayas escrito algo mal. ¿Puedes comprobar la URL?
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-100 dark:bg-gray-900 text-center rounded-md text-black dark:text-white">
            Volver a Inicio
          </a>
        </Link>
      </div>
    </Container>
  );
}
