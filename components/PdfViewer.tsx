"use client";

import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";

// styles (important)
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

type PdfViewerProps = {
  fileUrl: string;
};

const PdfViewer = ({ fileUrl }: PdfViewerProps) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div>
      <div style={{ height: "750px" }}>
      {/* <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js"> */}
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
        <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
    </div>
  );
};

// const PdfViewer = ({ fileUrl }) => {
//   const defaultLayoutPluginInstance = defaultLayoutPlugin();

//   return (
//     <div style={{ height: "750px" }}>
//       <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
//         <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
//       </Worker>
//     </div>
//   );
// };

export default PdfViewer;