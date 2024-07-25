import '../PageContent.scss';
import './BatchScanningPage.scss';

function BatchScanningPage() {
  return (
    <>
      <div className="page-content">
        <div className="page-content__text">
          <h1>BATCH SCANNING</h1>
          <h2>Multiple Page Scan</h2>
          <p>
            Scan multiple pages or documents in multiple-scanning mode. Batch
            all scans as a single document.
          </p>
          <button>Learn More</button>
        </div>
        <div className="page-content__image">
          <img
            className="batch-scanning"
            src="src/images/BatchScanning/BatchScanningFrame.png"
            alt="Batch Scanning"
          />
            <img
              className="batch-scanning__file file1"
              src="src/images/BatchScanning/FilePreview1.png"
              alt="First File Preview"
            />
            <img
              className="batch-scanning__file file2"
              src="src/images/BatchScanning/FilePreview2.png"
              alt="Second File Preview"
            />
            <img
              className="batch-scanning__file file3"
              src="src/images/BatchScanning/FilePreview3.png"
              alt="Third File Preview"
            />
        </div>
      </div>
    </>
  );
}

export default BatchScanningPage;
