import { FiGlobe, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

export default function PersonalInformationBox(props) {
  const { address, email, nationality, phoneNumber, classProp, linkedIn } =
    props;

  return (
    <div className={classProp || "personal-info"}>
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
        <a href={"mailto:" + email}>{email}</a>
      </p>
      <p>
        <FiLinkedin className='feather-icon' />
        &nbsp; &nbsp;
        <a target='_blank' href={linkedIn}>
          www.linkedin.com/in/max-jonas-gripa
        </a>
      </p>
    </div>
  );
}
