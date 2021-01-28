import styled from 'styled-components'

const Wrapper = styled.div`
  /* step */
  align-items: center;
  display: flex;
  padding-bottom: 1rem;
  padding-top: 1rem;
`

const Div = styled.div`
  align-items: center;
  border-color: rgba(229, 231, 235, 1);
  border-radius: 9999px;
  border-width: 1px;
  color: rgba(59, 130, 246, 1);
  display: flex;
  font-weight: bold;
  height: 2rem;
  justify-content: center;
  width: 2rem;

  /* dark:border-gray-900  */
`

const H3 = styled.h3`
  font-weight: bold;
  letter-spacing: -0.025em;
  margin-left: 0.75rem;
`

export default function Step ({ number, title }) {
  return (
    <div className='step flex items-center py-4'>
      <div className='flex items-center justify-center border border-gray-200 font-bold dark:border-gray-900 rounded-full h-8 w-8 text-blue-500'>
        {number}
      </div>
      <h3 className='ml-3 tracking-tight font-bold'>{title}</h3>
    </div>
  )
}
