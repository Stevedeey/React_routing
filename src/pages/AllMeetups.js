import { useState, useEffect } from "react";
//useEffect allows us to run some code under certain condition

import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-getting-started-199d9-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],  //...data=spread operator
          };

          meetups.push(meetup);
        }

        setIsLoading(false); //set to false if we have already got the data
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (  // returns some jsx code to indicate that we dont have data yet
      <section>
        <p>Loading...</p> 
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}
export default AllMeetupsPage;