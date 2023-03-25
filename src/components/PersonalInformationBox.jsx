import { FiGlobe, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function PersonalInformationBox(props) {
  const { address, email, nationality, phoneNumber, classProp } = props;

  return (
    <div className={classProp || ""}>
      <p>
        <FiGlobe className='feather-icon' />
        &nbsp; &nbsp;
        <span>{nationality}</span>
      </p>
      <p>
        <FiMapPin className='feather-icon' />
        &nbsp; &nbsp;
        <span>{address}</span>
      </p>
      <p>
        <FiPhone className='feather-icon' />
        &nbsp; &nbsp;<span>{phoneNumber}</span>
      </p>
      <p>
        <FiMail className='feather-icon' />
        &nbsp; &nbsp;
        <a href='mailto:maxjonas2@hotmail.com'>{email}</a>
      </p>
    </div>
  );
}
