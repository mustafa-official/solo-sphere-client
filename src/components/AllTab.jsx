import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import PropTypes from "prop-types";
import JobCard from "./JobCard";
const AllTab = ({ jobs }) => {
  // console.log(jobs);
  return (
    <div className="my-10">
      <Tabs>
        <div className="flex justify-center items-center">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            jobs.filter(j=>j.category==='Web Development').map(job=><JobCard key={job._id} job={job}></JobCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            jobs.filter(j=>j.category==='Graphics Design').map(job=><JobCard key={job._id} job={job}></JobCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            jobs.filter(j=>j.category==='Digital Marketing').map(job=><JobCard key={job._id} job={job}></JobCard>)
          }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default AllTab;

AllTab.propTypes = {
  jobs: PropTypes.array,
};
