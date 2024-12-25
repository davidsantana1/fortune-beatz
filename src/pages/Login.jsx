import { useTranslation } from "react-i18next";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import Logo from "../ui/Logo";
import TopMessage from "../ui/TopMessage";

function Login() {
  const { t } = useTranslation();
  return (
    <>
      <TopMessage noMargin={true}>{t("logInDemo")}</TopMessage>

      <div className="grid h-screen w-screen content-center justify-center gap-4 bg-brand-800">
        <div className="flex justify-center">
          <Logo customSize={true} className="max-h-24 max-w-24" />
        </div>
        <div className="w-96">
          <Heading align="center" as="h4" size="md">
            {t("loginTitle")}
          </Heading>
          <LoginForm />
        </div>
      </div>
    </>
  );
}

export default Login;
