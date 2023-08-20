
type EntryProps = {
    title: string
    date: string
    description: string
}

const Entry = ({
    title = '',
    date = '',
    description = ''
}: EntryProps) => {
    return(
        <div className='flex flex-row justify-between gap-6 mb-16'>
            <p className='basis-1/5 italic font-bold text-teal-800'>{date}</p>
            <div className='basis-4/5'>
                <h3 className='font-bold mb-4 italic'>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Entry;