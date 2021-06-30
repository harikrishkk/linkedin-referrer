import { DisplayProfileCard } from '../components/DisplayProfileCard';
import { Downloads } from '../components/Downloads';
import { ProfilePageWrapper } from '../wrappers/ProfilePageWrapper';
import { ProfileSelectMobile } from '../components/ProfileSelectMobile';
import { ProfileTabs } from '../components/ProfileTabs';
import { useHarperDB } from 'use-harperdb';
import React, { useState, useEffect, useCallback } from 'react';

/* Profile page that shows User's profile for recruiters  */
const Profiles = () => {
  const [data] = useHarperDB({
    query: { operation: 'sql', sql: 'select * from candidates.profiles' },
  });

  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [paginatedProfiles, setPaginatedProfiles] = useState([]);
  const [selectedDropdownVal, setSelectedDropdownVal] = useState('all');
  const [displayCount, setDisplayCount] = useState(1);
  const DISPLAY_COUNT = 6;

  const setFilter = useCallback(
    (filter) => {
      setDisplayCount(1);
      if (filter === 'all' && data && data.length) {
        setFilteredProfiles(data);
      } else {
        const filtered = data && data.filter((p) => p.expertise === filter);
        setFilteredProfiles(filtered);
      }
    },
    [data]
  );

  const handleShowMore = () => {
    setDisplayCount((c) => c + 1);
  };

  useEffect(() => {
    setFilteredProfiles(data);
  }, [data]);

  useEffect(() => {
    const showItems =
      filteredProfiles.length &&
      filteredProfiles.slice(0, DISPLAY_COUNT * displayCount);

    setPaginatedProfiles(showItems);
  }, [filteredProfiles, displayCount]);

  useEffect(() => {
    setFilter(selectedDropdownVal);
  }, [setFilter, selectedDropdownVal]);

  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <ProfilePageWrapper />
        <Downloads />
        <ProfileTabs onTabChange={(v) => setFilter(v)} />
        <ProfileSelectMobile
          value={selectedDropdownVal}
          onSelectChange={(v) => setSelectedDropdownVal(v)}
        />
        <DisplayProfileCard
          profiles={paginatedProfiles}
          filtered={filteredProfiles}
          handleShowMore={handleShowMore}
        />
      </div>
    </div>
  );
};

export default Profiles;
