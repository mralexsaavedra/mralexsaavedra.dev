import Image from 'next/image'

const EXPERIENCES = [
  {
    logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQEMdZpL8uK2Hw/company-logo_200_200/0/1634813471348?e=1654732800&v=beta&t=o53o0Eb_-SjTricFOnyuc63l-NkLHCsaX9oxgcEZZSk',
    title: 'Front-end Engineer',
    company: 'Lookiero',
    companyUrl: 'https://www.kirawellness.io/',
    date: 'Mar 2022 - actualidad',
    where: 'Bilbao, Pais Vasco, España'
  },
  {
    logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHV-VPds0I4BQ/company-logo_100_100/0/1615380698749?e=1656547200&v=beta&t=Nb_eOKPeJT-bgUCcy8HxTz80THxq760fDml_n-nro5Q',
    title: 'Software Front-end Developer',
    company: 'Kira Health',
    companyUrl: 'https://www.kirawellness.io/',
    date: 'Nov 2020 - Feb 2022',
    where: 'Bilbao, Pais Vasco, España'
  },
  {
    logo: 'https://media-exp1.licdn.com/dms/image/C560BAQGiV8Uni4qtAA/company-logo_100_100/0/1582718888776?e=1656547200&v=beta&t=O-TqTUTMsOQ11RWxietbx6GZxs4s7rAN9lcl_ulkKJM',
    title: 'Full Stack Developer',
    company: 'S&M Services',
    companyUrl: 'https://sm-services.es/',
    date: 'Oct 2018 - Nov 2019',
    where: 'Bilbao, Pais Vasco, España'
  },
  {
    logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQFNz9P_KDeLtg/company-logo_100_100/0/1637153443460?e=1656547200&v=beta&t=MIFMA_0BqzHOuPCX8-0XcN9vhIwgfB1ZMtPE3Pn5b6E',
    title: 'Full Stack Developer',
    company: 'Inycom',
    companyUrl: 'https://www.inycom.es/',
    date: 'Sept 2017 - Sept 2018',
    where: 'Parque Tecnológico de Zamudio, Pais Vasco, España'
  },
  {
    logo: 'https://media-exp1.licdn.com/dms/image/C560BAQGR1mesP5JyVQ/company-logo_100_100/0/1553860023148?e=1656547200&v=beta&t=UyzBm2gKsaiH39XJ93bX7HlMt7bSaiBTJINZ3vrKt94',
    title: 'Full Stack Developer (prácticas)',
    company: 'Shackleton Innovation',
    companyUrl: 'https://www.inycom.es/',
    date: 'Feb 2017 - Ago 2017',
    where: 'Bilbao, Pais Vasco, España'
  }
]

const EDUCATION = [
  {
    logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEZBBi7aznAZA/company-logo_200_200/0/1519861144705?e=1656547200&v=beta&t=_IBfrT1yUM0Hc_-Eb9bBXPzqQKjO5IjQ3IQve7xZ6Xw',
    title: 'Co-Organizer',
    company: 'Google Developer Group Bilbao',
    companyUrl: 'https://www.linkedin.com/company/gdgbilbao',
    date: 'Ene 2019 - Nov 2019',
    where: 'Bilbao, Pais Vasco, España'
  },
  {
    logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHQyqUzwkLcuQ/company-logo_100_100/0/1535111334225?e=1656547200&v=beta&t=H6-hutJJ6D7X09zAp6cXchf2OHyY9GZolO3qYDPBOH8',
    title: 'Máster en Animación',
    company: 'Lightbox Academy',
    companyUrl: 'https://lboxacademy.es/',
    date: 'Oct 2019 - Ago 2020',
    where: 'Madrid, España'
  },
  {
    logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHC9kAahv7kPw/company-logo_100_100/0/1647242802686?e=1656547200&v=beta&t=jOrBKDz8Iq9y2aeTtiIldtuLxLBzYBmk6vdRo0qrHpk',
    title: 'Ingeniería informática',
    company: 'UPV/EHU',
    companyUrl: 'https://www.ehu.eus/es/',
    date: 'Sept 2013 - Ene 2018',
    where: 'Bilbao, Pais Vasco, España'
  }
]

const Card = ({ logo, title, company, companyUrl, date, where }) => (
  <article className='flex flex-row flex-wrap items-center md:items-start text-gray-900 dark:text-gray-100'>
    <figure className='w-1/4 pr-4'>
      <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="block">
        <Image
          height={112}
          width={112}
          alt={`${company} logo`}
          title={`${company} logo`}
          src={logo}
          className='w-full md:w-28'
        />
      </a>
    </figure>
    <header className="w-3/4 flex flex-col items-start">
      <h3 className="text-lg mb-2">
        {title}
      </h3>
      <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-sm pb-1">
        {company}
      </a>
      <span className="text-sm pb-1 text-gray-500 dark:text-gray-300">
        {date}
      </span>
      <span className="text-sm">{where}</span>
    </header>
  </article>
)

const List = ({ title, list }) => (
  <div>
    <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-8 text-black dark:text-white'>
      {title}
    </h3>

    <div className='grid md:grid-rows-5 gap-y-8 md:gap-y-4 h-full'>
      {
        list.map((experience, index) => (
          <Card
            key={index}
            logo={experience.logo}
            title={experience.title}
            company={experience.company}
            companyUrl={experience.companyUrl}
            date={experience.date}
            where={experience.where}
          />
        ))
      }
    </div>
  </div>
)

export default function Experiences() {
  return (
    <div className='w-full flex flex-col md:grid grid-cols-2 gap-y-8 gap-x-7 mt-16 pb-8 md:pb-16'>
      <List
        title='Experiencia'
        list={EXPERIENCES}
      />

      <List
        title='Educación y logros'
        list={EDUCATION}
      />
    </div>
  )
}
