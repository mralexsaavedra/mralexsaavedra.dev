import Image from 'next/image'

const EXPERIENCES = [
  {
    logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHV-VPds0I4BQ/company-logo_100_100/0/1615380698749?e=1647475200&v=beta&t=7wb1PiJHb248eqyZHdWkYbhrptc85gKV7WWDG8ZwhNg',
    title: 'Software Front-end Developer',
    company: 'Kira Health',
    companyUrl: 'https://www.kirawellness.io/',
    date: 'Nov 2020 - actualidad',
    where: 'Bilbao, Pais Vasco, España'
  },
  {
    logo: 'https://media-exp1.licdn.com/dms/image/C560BAQEAZIAHF5B3Tg/company-logo_100_100/0/1519878754705?e=1647475200&v=beta&t=PQIySxZl2128MMhQLvnPJfbmA4ZSXqBNzoqMS4m0O18',
    title: 'Full Stack Developer',
    company: 'S&M Services',
    companyUrl: 'https://sm-services.es/',
    date: 'Oct 2018 - Nov 2019',
    where: 'Bilbao, Pais Vasco, España'
  },
  {
    logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQFNz9P_KDeLtg/company-logo_100_100/0/1637153443460?e=1647475200&v=beta&t=AyM0PQN0RYZx8YBi3gm0BCjj7t4T9m6svFaUWjR-sw4',
    title: 'Full Stack Developer',
    company: 'Inycom',
    companyUrl: 'https://www.inycom.es/',
    date: 'Sept 2017 - Sept 2018',
    where: 'Parque Tecnológico de Zamudio, Pais Vasco, España'
  },
  {
    logo: 'https://media-exp1.licdn.com/dms/image/C560BAQGR1mesP5JyVQ/company-logo_100_100/0/1553860023148?e=1647475200&v=beta&t=qVkvceQclTQFxTko8XKg9dn1KcmGJTDFzw-zb85Nt_8',
    title: 'Full Stack Developer (prácticas)',
    company: 'Shackleton Innovation',
    companyUrl: 'https://www.inycom.es/',
    date: 'Feb 2017 - Ago 2017',
    where: 'Bilbao, Pais Vasco, España'
  }
]

const EDUCATION = [
  {
    logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEZBBi7aznAZA/company-logo_100_100/0/1519861144705?e=1647475200&v=beta&t=9WBz5vWYMzFMh2rWan38mDhiXf21d6QR9YxVR_biRcc',
    title: 'Co-Organizer',
    company: 'Google Developer Group Bilbao',
    companyUrl: 'https://www.linkedin.com/company/gdgbilbao',
    date: 'Ene 2019 - Nov 2019',
    where: 'Bilbao, Pais Vasco, España'
  },
  {
    logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHQyqUzwkLcuQ/company-logo_100_100/0/1535111334225?e=1647475200&v=beta&t=26yi-0j_ehWUjwbsn58hCJaRSHzPXM0dRHGs8mNoo8g',
    title: 'Máster en Animación',
    company: 'Lightbox Academy',
    companyUrl: 'https://lboxacademy.es/',
    date: 'Oct 2019 - Ago 2020',
    where: 'Madrid, España'
  },
  {
    logo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQFssX1T0eXiUA/company-logo_100_100/0/1638172401370?e=1647475200&v=beta&t=0dBNDEdVqREVqVm5lXV-s7aARzRMBihKCZ434D9Vik8',
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

    <div className='grid md:grid-rows-4 gap-y-8 md:gap-y-4 h-full'>
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