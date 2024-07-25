import '../PageContent.scss';
import './SignAndStampPage.scss';

function SignAndStampPage() {
  return (
    <div className="page-content">
      <div className="page-content__text">
        <h1>SIGN & STAMP</h1>
        <h2>One-Tap Focus</h2>
        <p>
          Draw, scan or import your signature and stamp with a simple touch.
          Sign and stamp any document with just a single tap!
        </p>
        <button>Learn More</button>
      </div>
      <div className="page-content__image">
        <img
          className="page-content__image--sign-and-stamp"
          src="src/images/SignAndStamp/SignAndStamp.png"
          alt="Sign & Stamp"
        />
        <div className="page-content__image--sign-and-stamp--overlay">
          <img
            className="page-content__image--sign-and-stamp--overlay sign"
            src="src/images/SignAndStamp/Sign.png"
            alt="Sign"
          />
          <img
            className="page-content__image--sign-and-stamp--overlay stamp"
            src="src/images/SignAndStamp/Stamp.png"
            alt="Stamp"
          />
        </div>
      </div>
    </div>
  );
}

export default SignAndStampPage;
