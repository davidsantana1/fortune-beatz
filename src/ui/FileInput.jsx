import { forwardRef } from "react";

const FileInput = forwardRef(({ ...props }, ref) => {
  return (
    <div className="mb-4 w-40 rounded-md bg-brand-600 md:w-64">
      <input
        type="file"
        accept="image/*"
        className="text-sm file:mr-5 file:cursor-pointer file:rounded-md file:border-none file:bg-brand-900 file:px-3 file:py-3 file:text-xs file:font-medium file:text-brand-50 file:transition-all file:hover:bg-brand-800 file:sm:px-5 file:sm:text-sm"
        {...props}
        ref={ref}
      />
    </div>
  );
});

FileInput.displayName = "FileInput";

export default FileInput;
