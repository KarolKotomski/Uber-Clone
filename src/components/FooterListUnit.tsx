type Props = {
    label: string
    list: string[]
}

const FooterListUnit = ({label, list}:Props) => {
  return (
    <div>
          <h4 className="mb-5 text-lg font-medium">{label}</h4>
          <ul className="flex flex-col gap-4">
              {list.map((element, index) => {
                  return <li key={index} className="w-fit cursor-pointer transition-colors hover:text-[#AFAFAFAF]">{element}</li>
              })}
            </ul>
          </div>
  )
}

export default FooterListUnit