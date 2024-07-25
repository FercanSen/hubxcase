import '../PageContent.scss';
import './AdvancedFilters.scss';

function AdvancedFiltersPage() {
  return (
    <>
      <div className="page-content">
        <div className="page-content__text">
          <h1>ADVANCED FILTERS</h1>
          <h2>Unique Filters</h2>
          <p>
            Apply advanced filters and enhance quality with various custom made
            filters. Manually edit brightness and contrast by your own choice on
            the custom filters.
          </p>
          <button>Learn More</button>
        </div>
        <div className="page-content__image">
          <img
            className="advanced-filters__frame"
            src="src/images/AdvancedFilters/AdvancedFiltersFrame.png"
            alt="Advanced Filters"
          />
          <div className="advanced-filters">
            <img
              className="advanced-filters filter1"
              src="src/images/AdvancedFilters/Filter1.png"
              alt="Filter Example 1"
            />
            <img
              className="advanced-filters filter2"
              src="src/images/AdvancedFilters/Filter2.png"
              alt="Filter Example 2"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdvancedFiltersPage;
