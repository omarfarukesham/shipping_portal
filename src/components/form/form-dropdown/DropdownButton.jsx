import { twMerge } from 'tailwind-merge';

const DropdownButton = ({
  variant,
  className,
  handleDropdownClick,
  children,
  isMulti,
}) => {
  return (
    <button
      type='button'
      className={twMerge(
        'flex p-2 items-center text-[14px] leading-none rounded overflow-hidden w-full border border-gray-4',
        !isMulti && 'h-9',
        variant === 'default' && 'bg-white',
        variant === 'outlined' && '',
        className,
      )}
      onClick={handleDropdownClick}
    >
      {children}
    </button>
  );
};
export default DropdownButton;
