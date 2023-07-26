import illustrationSignUpDesktop from "./assets/images/illustration-sign-up-desktop.svg"
import illustrationSignUpMobile from "./assets/images/illustration-sign-up-mobile.svg"

const Image = () => {
  return <div className="image">
  <img
    className="illustration-signup-desktop"
    src={illustrationSignUpDesktop}
    alt=""
  />
  <img
    className="illustration-signup-mobile"
    src={illustrationSignUpMobile}
    alt=""
  />
</div>
};

export default Image;
