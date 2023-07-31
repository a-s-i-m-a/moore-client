import React, { useState } from 'react';

const FilterBar: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState('Все');

    const handleFilterClick = (filter: string) => {
        setActiveFilter(filter);
    };

    return (
        <div className="d-flex align-items-center mb-3">
            <button
                className={`filter-value ${activeFilter === 'Все' ? 'active-filter' : ''}`}
                onClick={() => handleFilterClick('Все')}
            >
                Все
            </button>
            <button
                className={`filter-value  ${activeFilter === 'Prime City' ? 'active-filter' : ''}`}
                onClick={() => handleFilterClick('Prime City')}
            >
                Prime City
            </button>
            <button
                className={`filter-value  ${activeFilter === 'Kochmon City' ? 'active-filter' : ''}`}
                onClick={() => handleFilterClick('Kochmon City')}
            >
                Kochmon City
            </button>
            <button
                className={`filter-value ${activeFilter === 'Baytik' ? 'active-filter' : ''}`}
                onClick={() => handleFilterClick('Baytik')}
            >
                Baytik
            </button>
        </div>
    );
};

export default FilterBar;
