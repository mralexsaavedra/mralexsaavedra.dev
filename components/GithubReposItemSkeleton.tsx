export default function GithubReposItemSkeleton () {
  return (
    <div className='border h-full rounded p-4 flex flex-col'>
      <div className='animate-pulse flex'>
        <div className='flex-1 h-28 w-24'>
          <div className='h-4 bg-gray-300 rounded' />
          <div className='mt-4 h-8 bg-gray-300 rounded' />
          <div className='mt-8 h-4 bg-gray-300 rounded' />
        </div>
      </div>
    </div>
  )
}
