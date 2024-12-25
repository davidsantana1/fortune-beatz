import { useForm } from "react-hook-form";
import FormRow from "../../ui/FormRow";
import Button from "../../ui/Button";
import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const { t } = useTranslation();
  const { isPending } = useLogin();
  const { formState: errors, handleSubmit, register, reset } = useForm();
  const navigate = useNavigate();

  function onSubmit() {
    navigate("/dashboard");
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col rounded-md bg-brand-600 px-8 py-10 shadow-md"
    >
      <FormRow
        id="email"
        label={t("emailLabel")}
        placeholder="mail@example.com"
        register={register}
        errors={errors}
        inputType="text"
        autoComplete="username"
        disabled={isPending}
        defaultValue="mail@example.com"
      />
      <FormRow
        id="password"
        label={t("passwordLabel")}
        placeholder="********"
        register={register}
        errors={errors}
        inputType="password"
        autoComplete="current-password"
        disabled={isPending}
        defaultValue="VeryHardPassword1234"
      />

      <Button variant="tertiary" size="lg" disabled={isPending}>
        <div className="flex items-center justify-center">
          {isPending ? <SpinnerMini /> : t("loginButton")}
        </div>
      </Button>
    </form>
  );
}

export default LoginForm;
