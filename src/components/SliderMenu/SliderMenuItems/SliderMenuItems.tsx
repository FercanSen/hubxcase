import React from 'react';
import SliderMenuItem from './SliderMenuItem';
import DocumentScannerIcon from '../MenuIcons/DocumentScannerIcon';
import SignAndStampIcon from '../MenuIcons/SignAndStampIcon';
import BatchScanningIcon from '../MenuIcons/BatchScanningIcon';
import AdvancedFiltersIcon from '../MenuIcons/AdvancedFiltersIcon';
import ExportAndShareIcon from '../MenuIcons/ExportAndShareIcon';

interface SliderMenuItemsProps {
  onItemClick: (route: string) => () => void;
}

function SliderMenuItems({ onItemClick }: SliderMenuItemsProps) {
  const [activeItem, setActiveItem] = React.useState<string | null>(null);

  const handleItemClick = (itemTitle: string, route: string) => {
    setActiveItem(itemTitle);
    onItemClick(route)();
  };

  return (
    <div className="slider-menu-items">
      <SliderMenuItem
        IconComponent={DocumentScannerIcon}
        itemTitle="Document Scanner"
        isActive={activeItem === 'Document Scanner'}
        onClick={() => handleItemClick('Document Scanner', '/')}
      />
      <SliderMenuItem
        IconComponent={SignAndStampIcon}
        itemTitle="Sign & Stamp"
        isActive={activeItem === 'Sign & Stamp'}
        onClick={() => handleItemClick('Sign & Stamp', '/sign-and-stamp')}
      />
      <SliderMenuItem
        IconComponent={BatchScanningIcon}
        itemTitle="Batch Scanning"
        isActive={activeItem === 'Batch Scanning'}
        onClick={() => handleItemClick('Batch Scanning', '/batch-scanning')}
      />
      <SliderMenuItem
        IconComponent={AdvancedFiltersIcon}
        itemTitle="Advanced Filters"
        isActive={activeItem === 'Advanced Filters'}
        onClick={() => handleItemClick('Advanced Filters', '/advanced-filters')}
      />
      <SliderMenuItem
        IconComponent={ExportAndShareIcon}
        itemTitle="Export & Share"
        isActive={activeItem === 'Export & Share'}
        onClick={() => handleItemClick('Export & Share', '/export-and-share')}
      />
    </div>
  );
}

export default SliderMenuItems;
