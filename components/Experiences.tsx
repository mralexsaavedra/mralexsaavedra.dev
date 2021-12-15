import Image from 'next/image'

const EXPERIENCES = [
  {
    companyLogo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHV-VPds0I4BQ/company-logo_100_100/0/1615380698749?e=1647475200&v=beta&t=7wb1PiJHb248eqyZHdWkYbhrptc85gKV7WWDG8ZwhNg',
    jobTitle: 'Software Front-end Developer',
    company: 'Kira Health',
    companyUrl: 'https://www.kirawellness.io/',
    fromDate: 'Nov 2020',
    toDate: 'actualidad',
    where: 'Bilbao, Pais Vasco, España'
  },
  {
    companyLogo: 'https://media-exp1.licdn.com/dms/image/C560BAQEAZIAHF5B3Tg/company-logo_100_100/0/1519878754705?e=1647475200&v=beta&t=PQIySxZl2128MMhQLvnPJfbmA4ZSXqBNzoqMS4m0O18',
    jobTitle: 'Full Stack Developer',
    company: 'S&M Services',
    companyUrl: 'https://sm-services.es/',
    fromDate: 'Oct 2018',
    toDate: 'Nov 2019',
    where: 'Bilbao, Pais Vasco, España'
  },
  {
    companyLogo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQFNz9P_KDeLtg/company-logo_100_100/0/1637153443460?e=1647475200&v=beta&t=AyM0PQN0RYZx8YBi3gm0BCjj7t4T9m6svFaUWjR-sw4',
    jobTitle: 'Full Stack Developer',
    company: 'Inycom',
    companyUrl: 'https://www.inycom.es/',
    fromDate: 'Sept 2017',
    toDate: 'Sept 2018',
    where: 'Parque Tecnológico de Zamudio, Pais Vasco, España'
  },
  {
    companyLogo: 'https://media-exp1.licdn.com/dms/image/C560BAQGR1mesP5JyVQ/company-logo_100_100/0/1553860023148?e=1647475200&v=beta&t=qVkvceQclTQFxTko8XKg9dn1KcmGJTDFzw-zb85Nt_8',
    jobTitle: 'Full Stack Developer (prácticas)',
    company: 'Shackleton Innovation',
    companyUrl: 'https://www.inycom.es/',
    fromDate: 'Feb 2017',
    toDate: 'Ago 2017',
    where: 'Bilbao, Pais Vasco, España'
  }
]

const EDUCATION = [
  {
    companyLogo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEZBBi7aznAZA/company-logo_100_100/0/1519861144705?e=1647475200&v=beta&t=9WBz5vWYMzFMh2rWan38mDhiXf21d6QR9YxVR_biRcc',
    jobTitle: 'Co-Organizer',
    company: 'Google Developer Group Bilbao',
    companyUrl: 'https://www.linkedin.com/company/gdgbilbao',
    fromDate: 'Ene 2019',
    toDate: 'Nov 2019',
    where: 'Bilbao, Pais Vasco, España'
  },
  {
    companyLogo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHQyqUzwkLcuQ/company-logo_100_100/0/1535111334225?e=1647475200&v=beta&t=26yi-0j_ehWUjwbsn58hCJaRSHzPXM0dRHGs8mNoo8g',
    jobTitle: 'Máster en Animación',
    company: 'Lightbox Academy',
    companyUrl: 'https://lboxacademy.es/',
    fromDate: 'Oct 2019',
    toDate: 'Ago 2020',
    where: 'Madrid, España'
  },
  {
    companyLogo: 'https://media-exp1.licdn.com/dms/image/C4D0BAQFssX1T0eXiUA/company-logo_100_100/0/1638172401370?e=1647475200&v=beta&t=0dBNDEdVqREVqVm5lXV-s7aARzRMBihKCZ434D9Vik8',
    jobTitle: 'Ingeniería informática',
    company: 'Inycom',
    companyUrl: 'https://www.ehu.eus/es/',
    fromDate: 'Sept 2013',
    toDate: 'Ene 2018',
    where: 'Bilbao, Pais Vasco, España'
  }
]

const Card = ({ companyLogo, jobTitle, company, companyUrl, fromDate, toDate, where }) => (
  <article className='flex flex-row flex-wrap text-gray-900 dark:text-gray-100'>
    <figure className='w-1/4 pr-4'>
      <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="block">
        <Image
          height={112}
          width={112}
          alt={`${company} logo`}
          title={`${company} logo`}
          src={companyLogo}
          className='w-full md:w-28'
        />
      </a>
    </figure>
    <header className="w-3/4 flex flex-col items-start">
      <h3 className="text-lg mb-2">
        {jobTitle}
      </h3>
      <a href={companyUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-sm pb-1">
        {company}
      </a>
      <span className="text-sm pb-1 text-gray-500 dark:text-gray-300">
        {fromDate} - {toDate}
      </span>
      <span className="text-sm">{where}</span>
    </header>
  </article>
)

const List = ({ title, list }) => (
  <div>
    <h3 className='font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white'>
      {title}
    </h3>

    <div className='w-full flex flex-col gap-y-10'>
      {
        list.map(({ companyLogo, jobTitle, company, companyUrl, fromDate, toDate, where }, index) => (
          <Card
            key={index}
            companyLogo={companyLogo}
            jobTitle={jobTitle}
            company={company}
            companyUrl={companyUrl}
            fromDate={fromDate}
            toDate={toDate}
            where={where}
          />
        ))
      }
    </div>
  </div>
)

export default function Experiences() {
  return (
    <div className='w-full flex flex-col md:grid grid-cols-2 gap-y-8 gap-x-6 mt-16'>
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
