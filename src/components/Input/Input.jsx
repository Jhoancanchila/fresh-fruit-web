/* eslint-disable react/prop-types */
const Input = ({
  value,
  setValue, 
  textLabel, 
  textPlaceHolder
}) => {
  return (
    <div className='flex flex-col'>
      <label className='text-lg font-medium'>{textLabel}</label>
      <input
        value={value[textLabel]}
        className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
        placeholder={textPlaceHolder}
        onChange={(e) => setValue({ ...value, [textLabel]: e.target.value })}
        type={textLabel.toLowerCase()}
      />
    </div>
  )
}

export default Input