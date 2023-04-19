const fileTypeImages = (link) => {
  if (!link) return;

  const extensionExtract = link.split(".");
  const extension = extensionExtract[extensionExtract.length - 1];

  const pdf =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/1200px-PDF_file_icon.svg.png";

  const excel =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_Excel_%282019%E2%80%93present%29.svg.png";

  const word =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg/1200px-Microsoft_Office_Word_%282019%E2%80%93present%29.svg.png";

  const png = "https://cdn-icons-png.flaticon.com/512/337/337948.png";

  const jpg = "https://cdn-icons-png.flaticon.com/512/136/136524.png";

  const svg = "https://cdn-icons-png.flaticon.com/512/136/136537.png";

  const file =
    "https://cdn3.iconfinder.com/data/icons/brands-applications/512/File-512.png";

  switch (extension) {
    case "pdf":
      return pdf;

    case "xlsx":
      return excel;

    case "xls":
      return excel;

    case "xlsm":
      return excel;

    case "xlsb":
      return excel;

    case "xltx":
      return excel;

    case "docm":
      return word;

    case "docx":
      return word;

    case "doc":
      return word;

    case "png":
      return png;

    case "jpg":
      return jpg;

    case "jpeg":
      return jpg;

    case "svg":
      return svg;

    default:
      return file;
  }
};

export default fileTypeImages;
