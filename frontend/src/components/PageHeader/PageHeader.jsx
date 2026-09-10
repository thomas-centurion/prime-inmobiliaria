import "./PageHeader.css";

const PageHeader = ({
  title = "Todas las propiedades",
  subtitle = "",
  count = 0,
  operation,
}) => {
  let finalTitle = title;
  let finalSubtitle = subtitle;

  if (operation === "venta") {
    finalTitle = "Propiedades en venta";
    finalSubtitle = `${count} propiedades encontradas`;
  } else if (operation === "alquiler") {
    finalTitle = "Propiedades en alquiler";
    finalSubtitle = `${count} propiedades encontradas`;
  } else if (!subtitle) {
    finalSubtitle = `${count} propiedades encontradas`;
  }

  return (
    <div className="page-header">
      <div className="wrap">
        <h1>{finalTitle}</h1>
        <p>{finalSubtitle}</p>
      </div>
    </div>
  );
};

export default PageHeader;