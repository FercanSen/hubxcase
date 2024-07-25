import '../PageContent.scss';
import './ExportAndSharePage.scss';

function ExportAndSharePage() {
  return (
    <>
      <div className="page-content">
        <div className="page-content__text">
          <h1>EXPORT & SHARE</h1>
          <h2>All-Round Conversion</h2>
          <p>Export your scans as PDF,JPG,ZIP,TXT and Word.</p>
          <button>Learn More</button>
        </div>
        <div className="page-content__image">
          <img
            className="export-and-share"
            src="src/images/ExportAndShare/ExportAndShare.png"
            alt="Export and Share"
          />
          <div className="file-formats">
            <img
              className="arrow rotateInUpLeft"
              src="src/images/ExportAndShare/arrow.png"
              alt="Export and Share Arrow"
            />
            <img
              className="pdf rotateInUpLeft"
              src="src/images/ExportAndShare/pdf.png"
              alt="Export and Share PDF"
            />
            <img
              className="jpg rotateInUpLeft"
              src="src/images/ExportAndShare/jpg.png"
              alt="Export and Share JPG"
            />
            <img
              className="txt rotateInUpLeft"
              src="src/images/ExportAndShare/txt.png"
              alt="Export and Share TXT"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ExportAndSharePage;
