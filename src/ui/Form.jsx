import { HiMiniPlusCircle, HiPencil } from "react-icons/hi2";
import Heading from "./Heading";
import Button from "./Button";
import SpinnerMini from "./SpinnerMini";
import { useTranslation } from "react-i18next";

function Form({
  isEditSession = false,
  formName,
  onSubmit,
  handleSubmit,
  isWorking,
  formId,
  children,
}) {
  const { t } = useTranslation();
  return (
    <>
      <Heading size="md">
        <div className="flex items-center gap-3 text-xl sm:text-3xl">
          {isEditSession ? <HiPencil /> : <HiMiniPlusCircle size="1.6rem" />}
          <div>
            {isEditSession ? t("formEditButton") : t("formCreateButton")}{" "}
            <span className="capitalize">{formName}</span>
          </div>
        </div>
      </Heading>
      <form
        id={formId}
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-[30rem] flex-col overflow-x-hidden overflow-y-scroll sm:h-auto sm:overflow-y-hidden"
      >
        {children}
      </form>
      <div className="flex">
        <Button
          form={formId}
          align="right"
          size="lg"
          margin="top"
          disabled={isWorking}
        >
          {isWorking ? (
            <SpinnerMini />
          ) : isEditSession ? (
            t("formEditButton")
          ) : (
            t("formCreateButton")
          )}
        </Button>
      </div>
    </>
  );
}

export default Form;
