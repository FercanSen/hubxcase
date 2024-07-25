import '../PageContent.scss';
import './DocumentScannerPage.scss';

function DocumentScannerPage() {
  return (
    <>
      <div className="page-content">
        <div className="page-content__text">
          <h1>DOCUMENT SCANNER</h1>
          <h2>Scan with Ease</h2>
          <p>
            Scan any document instantly with your mobile device by just a few
            steps. Save as PDF,JPG,ZIP,TXT and Word format.
          </p>
          <button>Learn More</button>
        </div>
        <div className="page-content__image">
          <img
            className="page-content__image--document-scanner"
            src="src/images/DocumentScanner/DocumentScanner.png"
            alt="Document Scanner"
          />
        </div>
      </div>
    </>
  );
}

export default DocumentScannerPage;
