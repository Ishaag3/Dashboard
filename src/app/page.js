// pages/index.js
/*import React from 'react';

const Home = () => {
  // Replace this with your actual static data or logic to fetch data
  const teamStats = {
    totalTeams: 50,
    teamsOf4: 20,
    teamsOf3: 15,
    teamsOf2: 10,
    teamsOf1: 5,
  };

  return (
    <div>
      <h1>Team Statistics</h1>
      <p>Total Teams Registered: {teamStats.totalTeams}</p>
      <p>4-member Teams: {teamStats.teamsOf4}</p>
      <p>3-member Teams: {teamStats.teamsOf3}</p>
      <p>2-member Teams: {teamStats.teamsOf2}</p>
      <p>1-member Teams: {teamStats.teamsOf1}</p>
    </div>
  );
};

export default Home;*/
"use client"
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [teamStats, setTeamStats] = useState(null);

  useEffect(() => {
    // Fetch data from backend API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch('api/analytics/totalTeams'); //  API endpoint
        const data = await response.json();
        setTeamStats(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Team Statistics</h1>
      {teamStats ? (
        <>
          <p>Total Teams Registered: {teamStats["Total Teams Registered"]}</p>
          <p>4-member Teams: {teamStats["4-member teams"]}</p>
          <p>3-member Teams: {teamStats["3-member teams"]}</p>
          <p>2-member Teams: {teamStats["2-member teams"]}</p>
          <p>1-member Teams: {teamStats["1-member teams"]}</p>
        </>
      ) : (
        <p>Loading team statistics...</p>
      )}
    </div>
  );
};

export default Home;
