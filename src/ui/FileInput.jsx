import { forwardRef } from "react";

const FileInput = forwardRef(({ ...props }, ref) => {
  return (
    <div className="w-64 rounded-md bg-brand-600">
      <input
        type="file"
        accept="image/*"
        className="text-sm file:mr-5 file:cursor-pointer file:rounded-md file:border-none file:bg-brand-900 file:px-5 file:py-3 file:text-sm file:font-medium file:text-brand-50 file:transition-all file:hover:bg-brand-800"
        {...props}
        ref={ref}
      />
    </div>
  );
});

FileInput.displayName = "FileInput";

export default FileInput;
