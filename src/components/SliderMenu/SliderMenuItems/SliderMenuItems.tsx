import { useState } from 'react';
import SliderMenuItem from './SliderMenuItem';
import DocumentScannerIcon from '../MenuIcons/DocumentScannerIcon';
import SignAndStampIcon from '../MenuIcons/SignAndStampIcon';
import BatchScanningIcon from '../MenuIcons/BatchScanningIcon';
import AdvancedFiltersIcon from '../MenuIcons/AdvancedFiltersIcon';
import ExportAndShareIcon from '../MenuIcons/ExportAndShareIcon';

function SliderMenuItems() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (text: string) => {
    setActiveItem(text);
  };

  return (
    <div className="slider-menu-items">
      <SliderMenuItem
        IconComponent={DocumentScannerIcon}
        text="Document Scanner"
        isActive={activeItem === 'Document Scanner'}
        onClick={() => handleItemClick('Document Scanner')}
      />
      <SliderMenuItem
        IconComponent={SignAndStampIcon}
        text="Sign & Stamp"
        isActive={activeItem === 'Sign & Stamp'}
        onClick={() => handleItemClick('Sign & Stamp')}
      />
      <SliderMenuItem
        IconComponent={BatchScanningIcon}
        text="Batch Scanning"
        isActive={activeItem === 'Batch Scanning'}
        onClick={() => handleItemClick('Batch Scanning')}
      />
      <SliderMenuItem
        IconComponent={AdvancedFiltersIcon}
        text="Advanced Filters"
        isActive={activeItem === 'Advanced Filters'}
        onClick={() => handleItemClick('Advanced Filters')}
      />
      <SliderMenuItem
        IconComponent={ExportAndShareIcon}
        text="Export & Share"
        isActive={activeItem === 'Export & Share'}
        onClick={() => handleItemClick('Export & Share')}
      />
    </div>
  );
}

export default SliderMenuItems;
