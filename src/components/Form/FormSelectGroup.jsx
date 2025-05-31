import './Form.scss'

const FormSelectGroup = ({
  className ='',
  children,
}) => {
  return (
    <div className={`form__select-wrap ${className}`}>
      {children}
    </div>
  );
};

export default FormSelectGroup;