const SectionAbout: React.FC<{ title: string; content: string; right?: boolean }> = ({
  title,
  content,
  right,
}: {
  title: string
  content: string
  right?: boolean
}) => (
  <section
    className={
      'flex items-center gap-5 max-md:flex-col  ' + (right ?? false ? ' md:flex-row-reverse' : '')
    }
  >
    <div className='w-40'>
      {right ?? false ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='full'
          height='full'
          viewBox='0 0 24 24'
          className='fill-details'
        >
          <path d='M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 14V5h16l.002 9H4z'></path>
        </svg>
      ) : (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='full'
          height='full'
          viewBox='0 0 24 24'
          className='fill-details'
        >
          <path d='M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z'></path>
          <path d='M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z'></path>
        </svg>
      )}
    </div>
    <div className='w-full'>
      <h2
        className={
          'text-4xl max-md:text-center font-bold uppercase mb-3 ' +
          (right ?? false ? 'md:text-right' : 'md:text-left')
        }
      >
        {title}
      </h2>
      <p className={'max-md:text-center ' + (right ?? false ? 'md:text-right' : 'md:text-left')}>
        {content}
      </p>
    </div>
  </section>
)

export default SectionAbout
