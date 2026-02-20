// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Registration from './Registration.jsx';
import Login from './Login.jsx';
import Dashboard from './Dashboard.jsx';
import Animals from './Animals.jsx'; 
import LandAnimals from './LandAnimals.jsx'; 
import WaterAnimals from './WaterAnimals.jsx'; 
import AirAnimals from './AirAnimals.jsx';
import Resources from './Resources.jsx'; 
import Timber from './Timber.jsx';
import NonTimber from './NonTimber.jsx';
import EcologicalCulturalServices from './EcologicalCulturalServices.jsx';
import WaterBodies from './WaterBodies.jsx';
import Rivers from './Rivers.jsx';
import Lakes from './Lakes.jsx';
import Streams from './Streams.jsx';
import Waterfalls from './Waterfalls.jsx';
import Ponds from './Ponds.jsx';
import Reservoirs from './Reservoirs.jsx';
import Minerals from './Minerals.jsx';
import Insects from './Insects.jsx';
import Tourism from './Tourism.jsx';
import TourismRecords from './TourismRecords.jsx';
import Community from './Community.jsx';
import Forests from './Forests.jsx';
import DataManagement from './DataManagement.jsx';
import BandipurPage from './BandipurPage.jsx';
import DandeliPage from './DandeliPage.jsx';
import NagarholePage from './NagarholePage.jsx';
import BannerghattaPage from './BannerghattaPage.jsx';
import BhadraPage from './BhadraPage.jsx';
import KudremukhPage from './KudremukhPage.jsx';
import IllegalActivityReport from './IllegalActivityReport.jsx';
import OfficerLogin from './OfficerLogin'; // adjust path
const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Registration />} />
    <Route path="/login" element={<Login />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/animals" element={<Animals />} />
    <Route path="/land-animals" element={<LandAnimals />} />
    <Route path="/water-animals" element={<WaterAnimals />} />
    <Route path="/air-animals" element={<AirAnimals />} />
    <Route path="/resources" element={<Resources />} />
    <Route path="/resources/timber" element={<Timber />} />
    <Route path="/resources/non-timber" element={<NonTimber />} />
    <Route path="/resources/ecological-cultural-services" element={<EcologicalCulturalServices />} />
    <Route path="/waterbodies" element={<WaterBodies />} />
    <Route path="/waterbodies/rivers" element={<Rivers />} />
    <Route path="/waterbodies/lakes" element={<Lakes />} />
    <Route path="/waterbodies/streams" element={<Streams />} />
    <Route path="/waterbodies/waterfalls" element={<Waterfalls />} />
    <Route path="/waterbodies/ponds" element={<Ponds />} />
    <Route path="/waterbodies/reservoirs" element={<Reservoirs />} />
    <Route path="/minerals" element={<Minerals />} />
    <Route path="/insects" element={<Insects />} />
    <Route path="/tourism" element={<Tourism />} />
    <Route path="/tourism-records" element={<TourismRecords />} />
    <Route path="/community" element={<Community />} />
    <Route path="/forests" element={<Forests />} />
    <Route path="/datamanagement" element={<DataManagement />} />
    <Route path="/forests/1" element={<BandipurPage />} />
    <Route path="/forests/2" element={<DandeliPage />} />
    <Route path="/forests/3" element={<NagarholePage />} />
    <Route path="/forests/4" element={<BannerghattaPage />} />
    <Route path="/forests/5" element={<BhadraPage />} />
    <Route path="/forests/6" element={<KudremukhPage />} />
    <Route path="/illegalactivityreport" element={<IllegalActivityReport />} />
    <Route path="/forestofficers" element={<OfficerLogin />} />
    </Routes>
  );
};

export default App;
