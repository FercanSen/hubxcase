import { FC } from 'react';
import './SliderMenuItem.scss';

interface SliderMenuItemProps {
  IconComponent: FC<{ color?: string }>;
  itemTitle: string;
  isActive: boolean;
  onClick: () => void;
}

const SliderMenuItem: FC<SliderMenuItemProps> = ({ IconComponent, itemTitle, isActive, onClick }) => {
  return (
    <div
      className={`slider-menu-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className="slider-menu-item__icon">
        {IconComponent && <IconComponent color={isActive ? '#0381FF' : '#666666'} />}
      </div>
      {itemTitle}
    </div>
  );
}

export default SliderMenuItem;
