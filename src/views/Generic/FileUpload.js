import { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = ({ handleFile }) => {
  const baseStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "#EEEEEE",
    borderStyle: "dashed",
    backgroundColor: "#FAFAFA",
    color: "#BDBDBD",
    outline: "none",
    transition: "border .24s ease-in-out",
  };
  const activeStyle = {
    borderColor: "#2196F3",
  };
  const acceptStyle = {
    borderColor: "#00E676",
  };
  const rejectStyle = {
    borderColor: "#FF1744",
  };
  const onDrop = useCallback((acceptedFiles) => {
    handleFile(acceptedFiles);
  }, []);

  const {
    getRootProps,
    getInputProps,
    acceptedFiles,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, maxFiles: 1, accept: "" });
  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive && activeStyle),
      ...(isDragAccept && acceptStyle),
      // ...(isDragReject && rejectStyle)
    }),
    [isDragActive, isDragReject, isDragAccept]
  );
  return (
    <section className="container-sm">
      <div {...getRootProps({ className: "dropzone", style })}>
        <input {...getInputProps()} accept=".xlsx, .xls, .csv" />
        <p>Drag 'n' drop your excel file here, or click to select a file</p>
      </div>
      <aside>
        <h4>File</h4>
        <ul>
          {acceptedFiles.map((file) => (
            <li key={file.path}>
              {file.path} - {file.size} bytes
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
};

export default FileUpload;
