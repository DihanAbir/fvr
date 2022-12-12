import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import BreakBtn from '../components/Home/BreakBtn';
import HealthManagement from '../components/Home/HealthManagement';
import ProgrammeDetails from '../components/Home/ProgrammeDetails';
import Timeline from '../components/Timeline/Timeline';

const ProgramPage = () => {
    return (
        <div>
            <Header/>
        <ProgrammeDetails />
        <HealthManagement />
        <Timeline />
        <BreakBtn />
        <Footer/>
      </div>
    );
};

export default ProgramPage;