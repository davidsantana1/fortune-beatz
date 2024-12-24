// import { useEffect } from "react";
import useDrivePicker from "react-google-drive-picker";
import { DRIVE_API_KEY, DRIVE_CLIENT_ID } from "../../utils/constants";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";
import { HiMiniCheckCircle, HiMiniExclamationCircle } from "react-icons/hi2";

function GoogleDrivePicker({ text, onFileSelected, isMissing }) {
  const [openPicker, authResponse] = useDrivePicker();

  const { setAuthToken, authToken } = useAuth();

  useEffect(() => {
    if (authResponse?.access_token) {
      setAuthToken(authResponse.access_token);
    }
  }, [authResponse, setAuthToken]);

  const handleOpenPicker = () => {
    openPicker({
      clientId: DRIVE_CLIENT_ID,
      developerKey: DRIVE_API_KEY,
      viewId: "DOCS",
      token: authResponse?.access_token ?? authToken,
      supportDrives: true,
      multiselect: false,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        if (data.action === "picked") {
          data.fileType = text;
          onFileSelected(data);
          console.log(data);
        }
      },
    });
  };

  return (
    <div>
      <button
        className={`flex cursor-pointer items-center gap-2 rounded-md bg-brand-700 px-4 py-2 pr-3 text-base font-semibold text-brand-50 hover:bg-brand-800`}
        onClick={() => handleOpenPicker()}
      >
        {text}
        {isMissing ? (
          <HiMiniExclamationCircle size={22} className="text-yellow-400" />
        ) : (
          <HiMiniCheckCircle size={22} className="text-green-500" />
        )}
      </button>
    </div>
  );
}

export default GoogleDrivePicker;
